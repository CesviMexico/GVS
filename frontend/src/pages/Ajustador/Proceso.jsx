import React, { useState, useEffect, useContext } from 'react';
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { ImageViewer, Image, FloatingBubble, Grid, PullToRefresh, } from 'antd-mobile';

import { Icon } from '@iconify/react';
import { ListMobileAntd } from '../../components/Global/Mobile/ListMobileAntd';
import "../../components/LayoutMobil/layoutMobil.css"

import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemContext'

import { useKeycloak } from "@react-keycloak/web";
import DataProceso from "./Services";

//funciones
import { statusRecord } from "../../components/Global/funciones";
import { AppStringUser } from "../../Const";

//FIREBASE
import { firebaseConfig } from '../../components/Global/firebase'
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';


const Proceso = () => {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const { keycloak } = useKeycloak();
  const themeContext = useContext(ThemeContext)
  const {
    setIdServicio,
    tproceso,
    msErrorApi,
    logoutOptions,
    idiomaGralMobil,

  } = themeContext

  const navigate = useNavigate();

  useEffect(() => { Data() }, [tproceso]);


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
      const response = await DataProceso(
        setloading,
        msErrorApi,
        keycloak,
        logoutOptions,
        userLocalStorage.id_user

      )
      response.length ===0 && keycloak.logout(process.env.REACT_APP_logoutOption);

      switch (response.status) {
        case 403:
          setloading(false);
          break;

        case undefined:
          setloading(false);
          break;

        case 200:

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
                row.files.length > 0 &&
                <Icon
                  icon="mingcute:photo-album-fill"
                  style={{ fontSize: "35px" }}
                  onClick={() => VerFotos(row.files.filter(row => row.type_file === "image").map(row => row.pathname))}
                />,
              disabled: false
            }

            users.push(element);
          })

          setDataSource(users)

          // await setDoc(doc(db, "usuarios", userLocalStorage.preferred_username), {
          //   solicitado: response.data.length
          // });

          const encuestaRef = doc(db, 'usuarios', userLocalStorage.preferred_username);
          response.data && await updateDoc(encuestaRef, {
            solicitado: response.data.length
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
    setFotos(fotos)
    setVisible(true)
  }

  const onCreateService = () => {
    navigate("/Valuaciones")
    setIdServicio("Solicitar Valuación")

  }
  const [keyservice, setKeyService] = useState(null);

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

          <ListMobileAntd
            //headerTitle="Servicios"
            actionSheet={false}
            dataset={datasource}
            setKeyService={setKeyService}
            loading={loading}

            onClickButton={() => Data()}
            color={userLocalStorage.color}
            backgroundColor={userLocalStorage.background_color}
            
          />

          <FloatingBubble
            style={{
              '--initial-position-bottom': '90px',
              '--initial-position-right': '35px',
              '--edge-distance': '24px',
              '--background': userLocalStorage.background_color,
              '--size': "60px",
            }}
            onClick={onCreateService}
          >
            <Icon icon="bx:plus" style={{ fontSize: "33px", color: userLocalStorage.color }} />
          </FloatingBubble>
        </ConfigProvider>
      </PullToRefresh>
    </>
  );
}

export default Proceso;