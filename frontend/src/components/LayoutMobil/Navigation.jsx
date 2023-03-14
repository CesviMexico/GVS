import React, { useEffect, useState, useContext } from 'react';
import { NavBar, TabBar, Space, ConfigProvider } from 'antd-mobile';
import { useNavigate, useLocation, } from 'react-router-dom';
import { Icon } from '@iconify/react';
import enUS from 'antd-mobile/es/locales/en-US'
import './layoutMobil.css'

import ThemeContext from '../../context/ThemContext'


const Navigation = (props) => {

  const themeContext = useContext(ThemeContext)
  const { idServicio, setIdServicio } = themeContext


  const navigate = useNavigate()
  const location = useLocation();
  const { pathname, } = location;

  const [nameNavBar, setNameNavBar] = useState("")

  const swicthNameNavBar = {
    "/ServiciosenProceso": () => setNameNavBar("Servicios en proceso"),
    "/Cotizacion": () => setNameNavBar("Cotización"),
    "/Consultar": () => setNameNavBar("Consultar"),
    "/Usuario": () => setNameNavBar("Usuario"),
    "/Manual": () => setNameNavBar("Manual"),
    "/Servicio": () => setNameNavBar("Servicio"),
  };

  const setRouteActive = (value) => {

    // if (value === "/Cotizacion" || value === "/Usuario") {
    //   setIdServicio("Cotizacion")
    // } else {
    //   setIdServicio(0)
    // }

    switch (value) {
      case "/Cotizacion":
        setIdServicio("Cotizacion")
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
      console.log('error', error)
    }

  }, []);



  const Bottom = () => {
    const tabs = [
      {
        key: '/ServiciosenProceso',
        title: 'Servicios en Proceso',
        icon: <Icon icon={"ic:baseline-home"} />,
      },
      {
        key: '/Cotizacion',
        title: 'Cotización',
        icon: <Icon icon={"ic:baseline-attach-money"} />,
      },
      {
        key: '/Consultar',
        title: 'Consultar',
        icon: <Icon icon={"ri:search-eye-line"} />,
      },
      {
        key: '/Usuario',
        title: 'Usuario',
        icon: <Icon icon={"fa:user"} />,
      },
      {
        key: '/Manual',
        title: 'Manual',
        icon: <Icon icon={"ep:document"} />,
      },
    ];


    return (
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
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
    swicthNameNavBar['/ServiciosenProceso']();
    setIdServicio(0)
    navigate("/ServiciosenProceso")
  }




  return (
    <>
      <ConfigProvider locale={enUS}>
        <div className="app">

          <div className="top">


            {!idServicio ?
              <NavBar backArrow={false} right={right}  >
                {nameNavBar}
              </NavBar>
              :
              <NavBar onBack={back} right={right}  >
                {idServicio}
              </NavBar>
            }


          </div>


          <div className="body">
            {props.children}
          </div>

          <div className="bottom" >
            <Bottom />
          </div>
        </div>
      </ConfigProvider>
    </>
  )
}

export default Navigation;
