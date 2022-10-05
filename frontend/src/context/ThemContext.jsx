import React, { useState, createContext } from 'react'
import { green, red, blue, yellow, grey } from '@mui/material/colors';

import es_ES from 'antd/lib/locale/es_ES';


const ThemeContext = createContext();
export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = (props) => {

    //Generales
    const [backgroundColor, setbackgroundColor] = useState(red[500])
    const [colorIcon, setColorIcon] = useState(red[50])
    const [sizeIcon, setSizeIcon] = useState(25)

    //Badge
    const [colorBadge, setColorBadge] = useState(green[500])

    //TABLAS
    const [sizeIconTable, setSizeIconTable] = useState(40)
    const [colorTable, setColorTable] = useState(red[500])

    /// Tipos Generales
    const [primaryColor, setPrimaryColor] = useState(red)
    const [secondaryColor, setSecondaryColor] = useState(green)

    //Layout
    const [themeAntd, setThemeAntd] = useState('dark') //light--dark

    ///mensaje erro genericos
    const [msErrorApi, setMsErrorApi] = useState("ERROR en el API")

    //IDIOMA
    const [idiomaGral, setIdiomaGral] = useState(es_ES)

    const [logoutOptions , setLogoutOptions ] = useState('http://localhost:3000/#/Historico') 
    //const [logoutOptions, setLogoutOptions] = useState('http://appweb.cesvimexico.com.mx/carpeta/#')


    return (
        <ThemeContext.Provider
            value={{

                backgroundColor,
                colorIcon,
                primaryColor,
                secondaryColor,
                themeAntd,
                sizeIcon,
                sizeIconTable,
                colorTable,
                colorBadge,

                msErrorApi,
                idiomaGral,
                logoutOptions,

                setbackgroundColor,
                setColorIcon,
                setColorBadge,
                setSizeIcon,

                setPrimaryColor,
                setSecondaryColor,
                setThemeAntd,

                setColorTable,
                setSizeIconTable,
                setMsErrorApi,
                setIdiomaGral,

            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
