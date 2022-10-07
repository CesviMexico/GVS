import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemContext'

import 'antd/dist/antd.css';
import { ConfigProvider, Drawer } from 'antd';
import  '../../css/stylesDraw.css'

const DrawerAntd = (props) => {

  // Hook y funciones o metodos Globales
  const themeContext = useContext(ThemeContext)
  const { idiomaGral } = themeContext

  const { title, placement, visible, onClose , getContainer,style} = props

  return (
    <ConfigProvider locale={idiomaGral}>
      <Drawer
        destroyOnClose={true}
        title={title && title}
        placement={placement ? placement : "right"}
        onClose={onClose && onClose}
        visible={visible}
        getContainer={getContainer}
        style={style}       

      >
        {props.children}
      </Drawer>
    </ConfigProvider>)
};

export default DrawerAntd;