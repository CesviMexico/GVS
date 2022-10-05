import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemContext'

import 'antd/dist/antd.css';
import { Result, ConfigProvider, Button,  } from 'antd';

const ResultComponent = (props) => {

  // Hook y funciones o metodos Globales
  const themeContext = useContext(ThemeContext)
  const { idiomaGral } = themeContext

  const { status, title, subTitle , extra} = props

  return (
    <ConfigProvider locale={idiomaGral}>
      <Result
        status={status ? status : ("404")}
        title={title ? title : ("404")}
        subTitle={title ? title : ("Sorry, the page you visited does not exist.")}

      extra={ extra && extra }
      />

    </ConfigProvider>)
};

export default ResultComponent;