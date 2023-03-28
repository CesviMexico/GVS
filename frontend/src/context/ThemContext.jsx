import React, { useState, createContext } from 'react'
import { green, red, blue, yellow, grey } from '@mui/material/colors';

import es_ES from 'antd/locale/es_ES';

const ThemeContext = createContext();
export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = (props) => {

    //Generales
    const [backgroundColor, setbackgroundColor] = useState(green[500])
    const [colorIcon, setColorIcon] = useState(green[50])
    const [sizeIcon, setSizeIcon] = useState(25)

    //Badge
    const [colorBadge, setColorBadge] = useState(green[500])

    //TABLAS
    const [sizeIconTable, setSizeIconTable] = useState(40)
    const [colorTable, setColorTable] = useState(green[500])

    /// Tipos Generales
    const [primaryColor, setPrimaryColor] = useState(green)
    const [secondaryColor, setSecondaryColor] = useState(green)

    //Layout
    const [themeAntd, setThemeAntd] = useState('dark') //light--dark

    ///mensaje erro genericos
    const [msErrorApi, setMsErrorApi] = useState("ERROR en el API")

    //IDIOMA
    const [idiomaGral, setIdiomaGral] = useState(es_ES)

    const [logoutOptions , setLogoutOptions ] = useState('http://localhost:3000/#/') 
    //const [logoutOptions, setLogoutOptions] = useState('http://appweb.cesvimexico.com.mx/carpeta/#')
    const [idServicio, setIdServicio] = useState("")  

    const [tproceso, setTproceso] = useState(0)  
        const [tporconfirmar , setTporconfirmar ] = useState(0)  


    const [idiomaGralMobil, setIdiomaGralMobil] = useState(es_ES)

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
                idiomaGralMobil,    

                idServicio,     
                tproceso,
                tporconfirmar,    


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
                setIdServicio,
                setTproceso,
                setTporconfirmar,


            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
