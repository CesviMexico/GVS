import React, { useContext } from 'react'
import { Layout as AntLayout, Menu } from 'antd'
import ThemeContext from '../../context/ThemContext'
import Typography from '@mui/material/Typography';


const { Footer } = AntLayout

const FooterComponent = () => {

    const themeContext = useContext(ThemeContext)
    const { backgroundColor } = themeContext


    return (
        <Footer
            style={{
                textAlign: 'center',
                background: backgroundColor 
            }}
        >           
            <Typography variant="h7"  color="white" >Cesvi Mexico ©2023</Typography> 

        </Footer>
    )
}

export default FooterComponent
