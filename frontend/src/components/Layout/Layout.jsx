import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

//ANTD
import { Layout as AntLayout, Menu, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

//iconos 
import { Icon } from '@iconify/react';

//CONTEXT
import ThemeContext from '../../context/ThemContext'
import UserContext from "../../context/UserContext";


//COMPONENTES
import HeaderComponent from '../Layout/Header'
import FooterComponent from '../Layout/Footer'
import logo from '../../assets/images/lcesvimexico.svg'
import logoSvg from '../../assets/images/logo.svg'

//servicios
import { DataMenu, DataOneUser } from "./Services";


const { Sider, Content } = AntLayout
const Layout = ({ children }) => {

    let navigate = useNavigate()
    const themeContext = useContext(ThemeContext)
    const {
        themeAntd, sizeIcon, colorIcon, backgroundColor,      
        msErrorApi, logoutOptions, 
  
        setColorIcon,
        setbackgroundColor, 
        setColorBadge,
        setSizeIcon,
        setPrimaryColor,
        setSecondaryColor,
        setColorTable,


    } = themeContext
    const { keycloak } = useKeycloak()
    const [loading, setloading] = useState(false);
    const [items, setItems] = useState([]);
    const [collapsed, setCollapsed] = useState(false)
    const rootSubmenuKeys = [""];
    const [openKeys, setOpenKeys] = useState([""]);

    const userContext = useContext(UserContext);
    const {
        user, updateUser,

    } = userContext;


    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const getItem = ({ label, key, icon, children, type }) => {
        return {
            key,
            icon: <Icon icon={icon} style={{ fontSize: sizeIcon, color: colorIcon }} />,
            children,
            label,
            type,
        };
    }

    const onTipoMenu = (e) => {

        if (e.key == "login") {
            keycloak.logout(process.env.REACT_APP_logoutOption)
        } else {
            navigate('/' + e.key);
        }

    };

    const ActualizaMenu = async (keycloak) => {
        await keycloak.loadUserInfo()
        let user_info = keycloak.userInfo
        let user = {
            id_keycloak: user_info.sub,
            preferred_username: user_info.preferred_username,
            email: user_info.email,
            given_name: user_info.given_name,
            family_name: user_info.family_name,
            name: user_info.name,
            id_company: 1,
            rol: keycloak.resourceAccess ? keycloak.resourceAccess[process.env.REACT_APP_clientId].roles[0] : null
        }

        let subject = keycloak.subject
        const response = await DataMenu(
            setloading,
            msErrorApi,
            keycloak,
            logoutOptions,
            subject,
            user
        );


        setloading(true)
        let Menu = []
        let SubMenu = []


        switch (response.data.length) {
            default:
                // ActualizaUser([{ ...keycloak.tokenParsed, id_keycloak: keycloak.subject, }])
                setItems([])
                response.data.map((row) => {
                    const { label, key, icon, children } = row
                    SubMenu = []
                    children.length > 0 &&
                        children.map((rowChild) => {
                            SubMenu.push(getItem({ label: rowChild.label, key: rowChild.key, icon: rowChild.icon, }))
                        })
                    Menu.push(
                        children.length > 0 ?
                            getItem({ label, key, icon, children: SubMenu })
                            :
                            getItem({ label, key, icon, })
                    )
                })
                setItems(Menu)
                //console.log("Menu",Menu)
                break;
            case 0:
                // navigate('/Page404');
                // keycloak.logout(process.env.REACT_APP_logoutOption)
                break;
        }

        // //console.log('Menu',Menu)

        setCollapsed(true)
        setloading(false)
    }

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
        
        // //console.log("DatosPerfil", response[0])

        updateUser({ ...response[0], id_keycloak: user_info.sub, });
        

        setColorIcon(response[0].color)
        setbackgroundColor(response[0].background_color)
        setColorBadge(response[0].color_badge)
        setSizeIcon(response[0].size_icon)
        setPrimaryColor(response[0].primary_color)
        setSecondaryColor(response[0].secondary_color)
        setColorTable(response[0].background_color)
        


    }


    useEffect(() => {
        if (!!keycloak.authenticated) {
            ActualizaMenu(keycloak)
            DatosPerfil(keycloak)
        }
    }, [keycloak])

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <AntLayout
            style={{ minHeight: '100vh', }}
        >
            <Sider
                theme={themeAntd}
                collapsible
                style={{ height: "auto", boxShadow: "0px 20px 20px" }}
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)} >

                <div
                    style={{
                        display: collapsed && 'flex',
                        justifycontent: 'center',
                        alignitems: 'center',
                        height: '40px',
                        margin: '11px',
                        textAlign: "center",
                        top: '100',

                        //border: !collapsed && '1px dashed #f5f5f5',
                        borderRadius: !collapsed && '5px 30px 30px 5px',

                        //background: !collapsed && backgroundColor,
                    }}
                >
                    <img
                        src={!collapsed ? logoSvg : logo}
                        height={!collapsed ? "100%" : "90%"}
                        width={!collapsed ? "100%" : "100%"}
                    />

                </div>
                <Spin spinning={loading} indicator={antIcon} >
                    <Menu
                        theme={themeAntd}
                        mode="inline"
                        defaultSelectedKeys={["Dashboard"]}
                        items={items}
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        onClick={onTipoMenu}
                    />
                </Spin>

            </Sider>
            <AntLayout className="site-layout">
                <HeaderComponent />
                <Content
                    //className={styles.content}
                    onClick={() => setCollapsed(true)}
                >
                    {children}
                </Content>
                <FooterComponent />
            </AntLayout>
        </AntLayout>
    )
}

export default Layout
