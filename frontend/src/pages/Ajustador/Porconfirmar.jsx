import React, { useState, useEffect,  useContext } from 'react';
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { ImageViewer, Image, Grid, PullToRefresh, } from 'antd-mobile';

import { Icon } from '@iconify/react';
import { ListMobileAntdOption } from '../../components/Global/Mobile/ListMobileAntdOption';
import "../../components/LayoutMobil/layoutMobil.css"

import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemContext'

import { useKeycloak } from "@react-keycloak/web";
import { DataPorconfirmar, DataUpdate } from "./Services";

//funciones
import { statusRecord } from "../../components/Global/funciones";
import { AppStringUser } from "../../Const";

//FIREBASE
import { firebaseConfig } from '../../components/Global/firebase'
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';


const Porconfirmar = () => {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const { keycloak } = useKeycloak();
  const themeContext = useContext(ThemeContext)
  const {
    setIdServicio,
    tporconfirmar,
    msErrorApi,
    logoutOptions,
    idiomaGralMobil,

  } = themeContext

  const navigate = useNavigate();

  useEffect(() => { Data() }, [tporconfirmar]);

  const [loading, setloading] = useState(false)
  const [datasource, setDataSource] = useState([]);

  const userLocalStorage = {
    id_user: localStorage.getItem(AppStringUser.ID_USER),
    color: localStorage.getItem(AppStringUser.COLOR),
    background_color: localStorage.getItem(AppStringUser.BACKGROUND_COLOR),
    preferred_username: localStorage.getItem(AppStringUser.PREFERRED_USERNAME),

  }

  const Data = async () => {

    try {
      const response = await DataPorconfirmar(
        setloading,
        msErrorApi,
        keycloak,
        logoutOptions,
        userLocalStorage.id_user

      )

      switch (response.status) {
        case 403:
          setloading(false);
          break;

        case undefined:
          setloading(false);
          break;

        case 200:
          setDataSource([])
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
          const encuestaRef = doc(db, 'usuarios',  userLocalStorage.preferred_username);
          response.data && await updateDoc(encuestaRef, {
            valuado: response.data.length
          });


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
    //console.log("VerFotos", fotos)
    setFotos(fotos)
    setVisible(true)
  }


  const onActionSheet = async (data, tipo, valueMotivo) => {
    //console.log("onActionSheetEdit", data.id)
    //console.log("onActionSheettipo", tipo)
    // return

    try {
      const response = await DataUpdate(
        setloading,
        msErrorApi,
        keycloak,
        logoutOptions,
        data.id,
        {
          motivo_declina: valueMotivo ? valueMotivo : " ",
          status: tipo === 1 ? 'aceptado' : 'declinado',
        }

      )
      switch (response.status) {
        case 403:
          setloading(false);
          break;

        case undefined:
          setloading(false);
          break;

        case 200:
          //console.log("DataUpdate", response.data)
          Data()
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
            onActionSheet={onActionSheet}
            color={userLocalStorage.color}
            backgroundColor={userLocalStorage.background_color}
          />

        </ConfigProvider>
      </PullToRefresh>
    </>
  );
}

export default Porconfirmar;