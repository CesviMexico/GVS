import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useKeycloak } from '@react-keycloak/web'

const Login = () => {
    const navigate = useNavigate()
    const { keycloak } = useKeycloak()
    let rol = keycloak.resourceAccess ? keycloak.resourceAccess[process.env.REACT_APP_clientId].roles[0] : null


    useEffect(() => {

        if (!keycloak.authenticated) {
            navigate('/')
            keycloak.login(process.env.REACT_APP_logoutOption)
        } else {
            if (rol === "Ajustador") {
                navigate('/Proceso')
            } else {
                navigate('/Valuacion/Espera')
            }
        }

    }, [keycloak])
}

export default Login;
