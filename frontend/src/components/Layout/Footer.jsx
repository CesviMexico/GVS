import React, { useContext } from 'react'
import "antd/dist/antd.css"
import { Layout as AntLayout, Menu } from 'antd'
// import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';

//import styles from "../../css/styles.module.css"
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
            <Typography variant="h7"  color="white" >Cesvi Mexico ©2022</Typography> 

        </Footer>
    )
}

export default FooterComponent
