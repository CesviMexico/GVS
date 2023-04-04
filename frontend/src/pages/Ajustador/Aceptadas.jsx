import React, { useState, useEffect, useRef, useContext } from 'react';
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import {
  ImageViewer, Image, Grid, PullToRefresh,
  Popup, ImageUploader, Form, Button, Toast,
} from 'antd-mobile';
import { PicturesOutline } from "antd-mobile-icons";


import { Icon } from '@iconify/react';
import { ListMobileAntdOption } from '../../components/Global/Mobile/ListMobileAntdOption';
import "../../components/LayoutMobil/layoutMobil.css"

import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemContext'

import { useKeycloak } from "@react-keycloak/web";
import { DataAceptadas, DataPdf, InsertMoreFotos } from "./Services";

//funciones
import { statusRecord, beforeUpload } from "../../components/Global/funciones";
import { AppStringUser } from "../../Const";

const Aceptadas = () => {

  const { keycloak } = useKeycloak();
  const themeContext = useContext(ThemeContext)
  const {
    setTporconfirmar,
    msErrorApi,
    logoutOptions,
    idiomaGralMobil,

  } = themeContext

  const navigate = useNavigate();

  useEffect(() => { Data() }, []);

  const [loading, setloading] = useState(false)
  const [datasource, setDataSource] = useState([]);


  const userLocalStorage = {
    id_user: localStorage.getItem(AppStringUser.ID_USER),
    color: localStorage.getItem(AppStringUser.COLOR),
    background_color: localStorage.getItem(AppStringUser.BACKGROUND_COLOR),
  }

  const Data = async () => {

    try {
      const response = await DataAceptadas(
        setloading,
        msErrorApi,
        keycloak,
        logoutOptions,
        userLocalStorage.id_user

      )
      response.length === 0 && keycloak.logout(process.env.REACT_APP_logoutOption);

      switch (response.status) {
        case 403:
          setloading(false);
          break;

        case undefined:
          setloading(false);
          break;

        case 200:
          setDataSource([])
          setTporconfirmar(response.data && response.data.length)
          let users = []
          response.data && response.data.forEach(row => {
            let element = {
              id: row.id_valuacion,
              key: row.id_valuacion,
              avatar:
                row.foto !== null ?
                  <Image
                    src={row.foto}
                    style={{ borderRadius: 8 }}
                    fit='cover'
                    width={80}
                    height={70}
                    onClick={() => VerFotos(row.files.filter(row => row.type_file === "image").map(row => row.pathname))}
                  /> :
                  <Icon
                    icon={"fa-solid:car"}
                    style={{ fontSize: "30px" }}
                  />,

              content:
                <Grid columns={1} gap={0}>
                  <Grid.Item>
                    <div >{row.reporte}</div>
                  </Grid.Item>
                  <Grid.Item>
                    <div >{row.vin}</div>
                  </Grid.Item>
                </Grid>,
              description: 'Solicitada: ' + row.fecha_solicitud,
              icon: 'fa-solid:car',
              extra:
                row.fotoMonto &&
                <>
                  <Icon
                    icon="tabler:photo-dollar"
                    style={{ fontSize: "35px" }}
                    onClick={() => VerFotos([row.fotoMonto])}
                  />
                </>,
              disabled: false
            }

            users.push(element);
          })
          setDataSource(users)

          break;

        default:
          break;
      }
    } catch (error) {
      setloading(false);
    }

  };

  const [fotos, setFotos] = useState([]);
  const [visible, setVisible] = useState(false);
  const VerFotos = (fotos) => {
    setFotos(fotos)
    setVisible(true)
  }


  const [fileList, setFileList] = useState([]);
  const [id_valuacion, setId_valuacion] = useState([]);
  const mockUpload = (file) => {
    // await sleep(3000);
    return {
      url: URL.createObjectURL(file),
      file: file,
    };
  };


  const onActionSheet = async (data, tipo) => {
    switch (tipo) {
      case "pdf":

        try {
          const response = await DataPdf(
            setloading,
            msErrorApi,
            keycloak,
            logoutOptions,
            data.id

          )
          response.length === 0 && keycloak.logout(process.env.REACT_APP_logoutOption);
          switch (response.status) {
            case 403:
              setloading(false);
              break;

            case undefined:
              setloading(false);
              break;

            case 200:
              window.open(response.data[0].pathname, '_blank');
              break;

            default:
              break;
          }
        } catch (error) {
          setloading(false);
        }

        break;
      case "fotos":      
        setId_valuacion(data.id)
        setFileList([])
        setVisiblePopup(true)
        break;

      default:
        break;
    }



  }

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [loadingF, setLoadingF] = useState(false);

  const onFinishA = (value) => {
    if (fileList.length) {
      onFinish(value)
    } else {
      Toast.show({ content: 'No hay fotos', })
      setLoadingF(false);
    }
  }

  const onFinish = async () => {
    setLoadingF(true);
    let formData = new FormData();
    fileList.map((photo) => {
      let blob = new Blob([photo.file], { type: "image/png,jpg" });
      formData.append("photos[]", blob, photo.file.name);
    });
    formData.append("id_valuacion", id_valuacion);
    try {
      const response = await InsertMoreFotos(
        setLoadingF,
        msErrorApi,
        keycloak,
        logoutOptions,
        "",
        formData
      );
      response.length === 0 && keycloak.logout(process.env.REACT_APP_logoutOption);
      switch (response.status) {
        case 403:
          setLoadingF(false);
          break;

        case undefined:
          setLoadingF(false);
          break;

        case 200:

          setFileList([]);
          Data()
          setVisiblePopup(false)

          break;

        default:
          break;
      }
    } catch (error) {
      setLoadingF(false);
    }
  };

  return (
    <>

      <Popup
        destroyOnClose={true}
        visible={visiblePopup}

        onMaskClick={() => {
          setVisiblePopup(false)
          setFileList([])
        }}

        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "25vh",
        }}

        // position='right'
        showCloseButton
        onClose={() => {
          setVisiblePopup(false)
        }}
      >
        <div style={{ overflowY: 'scroll', paddingTop: '25px' }}>
          <Form
            mode={"card"}
            // layout="horizontal"
            onFinish={onFinishA}
            footer={
              <Button
                loading={loadingF}
                block
                type='submit'
                style={{
                  color: userLocalStorage.color,
                  backgroundColor: userLocalStorage.background_color
                }}
                size='large'
              >
                Enviar
              </Button>}
          >
            {/* <Fo rm.Header>Datos del siniestro</Form.Header> */}
            <Form.Item name="archivos" label="Fotos">
              <div style={{ height: "22vh", overflowY: "scroll" }}>
                <ImageUploader
                  multiple={true}
                  value={fileList}
                  onChange={setFileList}
                  upload={mockUpload}
                  beforeUpload={beforeUpload}
                >
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 15,
                      backgroundColor: '#f5f5f5',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#999999',
                    }}
                  >
                    <PicturesOutline style={{ fontSize: 30 }} />
                  </div>
                </ImageUploader>

              </div>
            </Form.Item>
          </Form>
        </div>
      </Popup>

      <PullToRefresh
        onRefresh={async () => {
          await Data();
        }}
        renderText={(status) => {
          return (
            <ConfigProvider locale={idiomaGralMobil}>
              <div>{statusRecord[status]}</div>
            </ConfigProvider>
          );
        }}
      >
        <ConfigProvider locale={enUS}>
          <ImageViewer.Multi
            images={fotos}
            visible={visible}
            defaultIndex={0}
            onClose={() => {
              setVisible(false);
            }}

          />
          <ListMobileAntdOption
            //headerTitle="Servicios"
            onClickButton={() => Data()}
            dataset={datasource}
            loading={loading}
            pdf={true}
            onActionSheet={onActionSheet}

            color={userLocalStorage.color}
            backgroundColor={userLocalStorage.background_color}

          />

        </ConfigProvider>
      </PullToRefresh>
    </>
  );
}

export default Aceptadas;