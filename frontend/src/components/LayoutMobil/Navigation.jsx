import React, { useEffect, useState, useContext } from 'react'
import { NavBar, TabBar, Space, ConfigProvider } from 'antd-mobile'
import { useNavigate, useLocation, } from 'react-router-dom';
import { Icon } from '@iconify/react'
import enUS from 'antd-mobile/es/locales/en-US'
import './layoutMobil.css'
import ThemeContext from '../../context/ThemContext'

import { useKeycloak } from '@react-keycloak/web'
import { DataOneUser } from "../Layout/Services"
import { AppStringUser } from "../../Const";



const Navigation = (props) => {

  const { keycloak } = useKeycloak()
  const themeContext = useContext(ThemeContext)
  const {msErrorApi, logoutOptions, idServicio, setIdServicio,tproceso, tporconfirmar} = themeContext

  const navigate = useNavigate()
  const location = useLocation();
  const { pathname, } = location;

  const [nameNavBar, setNameNavBar] = useState("Valuaciones en proceso")

  const swicthNameNavBar = {
    "/Proceso": () => setNameNavBar("Valuaciones en proceso"),
    "/Porconfirmar": () => setNameNavBar("Valuaciones por confirmar"),
    "/Aceptadas": () => setNameNavBar("Valuaciones aceptadas"),
    "/Declinadas": () => setNameNavBar("Valuaciones declinadas"),
    "/Busqueda": () => setNameNavBar("Búsqueda de valuaciones"),
    "/Valuaciones": () => setNameNavBar("Solicitar Valuación"),
  };

  const setRouteActive = (value) => {
    switch (value) {
      case "/Valuaciones":
        setIdServicio("Solicitar Valuación")
        break;

      case "/Usuario":
        setIdServicio("Usuario")
        break;

      default:
        setIdServicio(0)
        break;
    }

    navigate(value);
    swicthNameNavBar[value]();
  };

  useEffect(() => {
    try {
      swicthNameNavBar[pathname]();
    } catch (error) {
      //console.log('error', error)
    }

  }, []);



  const Bottom = () => {
    const tabs = [
      {
        key: '/Proceso',
        title: 'Valuaciones en proceso',
        icon: <Icon icon={"bx:home"} style={{ fontSize: 35 }} />,
        badge: tproceso,
      },
      {
        key: '/Porconfirmar',
        title: 'Valuaciones por confirmar',
        icon: <Icon icon={"bx:dollar-circle"} style={{ fontSize: 35 }} />,
        badge: tporconfirmar,
      },
      {
        key: '/Aceptadas',
        title: 'Valuaciones aceptadas',
        icon: <Icon icon={"bx:check-circle"} style={{ fontSize: 35 }} />,
      },
      {
        key: '/Declinadas',
        title: 'Valuaciones declinadas',
        icon: <Icon icon={"bx:x-circle"} style={{ fontSize: 35 }} />,
      },
      {
        key: '/Busqueda',
        title: 'Búsqueda de valuaciones',
        icon: <Icon icon={"bx:search-alt-2"} style={{ fontSize: 35 }} />,
      },
    ];


    return (
      <TabBar
        activeKey={pathname}
        onChange={value => setRouteActive(value)}
        safeArea={true}
        style={{ height: '60px' }}
      >
        {tabs.map(item => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            badge={item.badge}
          // title={item.title}
          />
        ))}
      </TabBar>
    )
  }


  const right = (
    <div style={{ fontSize: 20 }}>
      <Space style={{ '--gap': '16px' }}>
        {/* <MoreOutline /> */}
        <Icon icon={"fontisto:more-v-a"} />
      </Space>
    </div>
  )

  const back = () => {
    swicthNameNavBar['/Proceso']();
    setIdServicio(0)
    navigate("/Proceso")
  }


  const [loading, setloading] = useState(false)
  const DatosPerfil = async (keycloak) => {
    await keycloak.loadUserInfo()
    let user_info = keycloak.userInfo
    const response = await DataOneUser(
      setloading,
      msErrorApi,
      keycloak,
      logoutOptions,
      user_info.sub
    );

    console.log("DatosPerfilMovil", response[0])

    localStorage.clear()


    localStorage.setItem(AppStringUser.BACKGROUND_COLOR, response[0].background_color);
    localStorage.setItem(AppStringUser.COLOR, response[0].color);
    localStorage.setItem(AppStringUser.COMPANY, response[0].company);
    localStorage.setItem(AppStringUser.EMAIL, response[0].email);
    localStorage.setItem(AppStringUser.ESTADO, response[0].estado);
    localStorage.setItem(AppStringUser.ID_COMPANY, response[0].id_company);
    localStorage.setItem(AppStringUser.ID_ESTADO, response[0].id_estado);
    localStorage.setItem(AppStringUser.ID_ROL, response[0].id_rol);
    localStorage.setItem(AppStringUser.ID_USER, response[0].id_user);
    localStorage.setItem(AppStringUser.ID_ZONA, response[0].id_zona);
    localStorage.setItem(AppStringUser.NAME, response[0].name);
    localStorage.setItem(AppStringUser.NAME_AVATAR, response[0].name_avatar);
    localStorage.setItem(AppStringUser.PREFERRED_USERNAME, response[0].preferred_username);
    localStorage.setItem(AppStringUser.ROL, response[0].rol);
    localStorage.setItem(AppStringUser.ZONA, response[0].zona);
    localStorage.setItem(AppStringUser.ID_KEYCLOAK, response[0].id_keycloak);

  }

  useEffect(() => {
    if (!!keycloak.authenticated) {
      DatosPerfil(keycloak)
    }
  }, [keycloak])


  const background_color = localStorage.getItem(AppStringUser.BACKGROUND_COLOR);
  const color = localStorage.getItem(AppStringUser.COLOR);


  return (
    <>
      <ConfigProvider locale={enUS}>
        <div className="app">
          <div className="top">
            {!idServicio ?
              <NavBar
                backArrow={false}
                right={right}
              style={{ backgroundColor: background_color, color: color }}
              >
                {nameNavBar}
              </NavBar>
              :
              <NavBar
                onBack={back}
                right={right}
              style={{ backgroundColor: background_color, color: color }}
              >
                {idServicio}
              </NavBar>
            }
          </div>

          <div className="body">
            {props.children}
          </div>

          <div className="bottom" >
            {idServicio !== "Solicitar Valuación" && <Bottom />}
          </div>

        </div>
      </ConfigProvider>
    </>
  )
}

export default Navigation;
