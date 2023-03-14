import React, { useState, useEffect, useRef, useContext } from 'react';
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { Dialog, List, SwipeAction, Toast, Image, ActionSheet, FloatingBubble } from 'antd-mobile';

import { Icon } from '@iconify/react';
import { ListMobileAntd } from '../../components/Global/Mobile/ListMobileAntd';
import { useNavigate } from 'react-router-dom';

import ThemeContext from '../../context/ThemContext'


const Home = () => {


  const themeContext = useContext(ThemeContext)
  const { idServicio, setIdServicio } = themeContext

  const navigate = useNavigate();

  let users = []
  for (let i = 1; i <= 5; i++) {
    let element = {
      id: i,
      key: i,
      avatar: null,
      content: 'No. de servicio ' + i,
      description: 'Descripción ' + i,
      icon: 'fa-solid:car',
      extra: null,
      disabled: false
    }
    users.push(element);
  }

  const actions = [
    { text: 'Finalizar', key: 'f', onClick: () => Toast.show('Se ha finalizado el el servicio: ' + keyservice) },
    { text: 'Finalizar sin costos', key: 'fsc', onClick: () => Toast.show('Se ha finalizado el el servicio sin costos: ' + keyservice) },
    { text: 'Finalizar sin previa', key: 'fsp', onClick: () => Toast.show('Se ha finalizado el el servicio sin previa ' + keyservice) },
  ];

  const onActionSheetEdit = (data) => {
    setIdServicio(data.content)
    navigate("/Servicio/" + data.key)

  }
  const onCreateService = () => {
    navigate("/Servicio")
  }

  const [keyservice, setKeyService] = useState(null);

  return (
    <>
      <ConfigProvider locale={enUS}>
        <ListMobileAntd
          headerTitle="Servicios"
          dataset={users}
          actionSheetActions={actions}
          onActionSheetEdit={onActionSheetEdit}
          setKeyService={setKeyService}
        />

        <FloatingBubble
          style={{
            '--initial-position-bottom': '65px',
            '--initial-position-right': '35px',
            '--edge-distance': '24px',
          }}
          onClick={onCreateService}
        >
          <Icon icon="bx:plus" style={{ fontSize: "30px" }} />
        </FloatingBubble>
      </ConfigProvider>
    </>
  );
}

export default Home;