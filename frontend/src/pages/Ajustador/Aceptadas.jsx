import React, { useState, useEffect, useRef, useContext } from 'react';
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { ImageViewer, Image, Grid, PullToRefresh, } from 'antd-mobile';

import { Icon } from '@iconify/react';
import { ListMobileAntdOption } from '../../components/Global/Mobile/ListMobileAntdOption';
import "../../components/LayoutMobil/layoutMobil.css"

import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemContext'

import { useKeycloak } from "@react-keycloak/web";
import { DataAceptadas, DataPdf } from "./Services";

//funciones
import { statusRecord } from "../../components/Global/funciones";
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
          ////console.log("DataAceptadas", response.data)
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
    ////console.log("VerFotos", fotos)
    setFotos(fotos)
    setVisible(true)
  }


  const onActionSheet = async (data) => {
    // console.log("onActionSheetEdit", data.id)

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
          // console.log("DataAceptadas", response.data[0].pathname)
          window.open(response.data[0].pathname, '_blank');          
          break;

        default:
          break;
      }
    } catch (error) {
      setloading(false);
    }

  }

  return (
    <>



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