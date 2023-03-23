
// import React, {useContext} from "react";
import { getAxiosLumen, getAxiosLumenHea  } from '../../components/Global/funciones'

export const DataProceso = async (setloading, msErrorApi, keycloak, logoutOptions, data_id) => {
    const response = await getAxiosLumen({
        uri: `/ajustador/proceso/${data_id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions

    })
    return response
}

export const InsertValuacion = async (setloading ,msErrorApi,keycloak, logoutOptions, parametros, data) => {
    const response = await getAxiosLumenHea({
       uri:`Insertvaluacion`,
       setloading: setloading,
       msErrorApi: msErrorApi,
       keycloak: keycloak,
       notification: true,
       request: 'post',
       logoutOptions: logoutOptions,
       parametros:parametros,
       data:data,
       headers :{ 'Content-Type': 'application/x-www-form-urlencoded'}
   })
   return response
}

export const DataPorconfirmar = async (setloading, msErrorApi, keycloak, logoutOptions, data_id) => {
    const response = await getAxiosLumen({
        uri: `/ajustador/porconfirmar/${data_id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}

export const DataUpdate = async (setloading, msErrorApi, keycloak, logoutOptions, data_id,parametros) => {
    const response = await getAxiosLumen({
        uri: `/ajustador/${data_id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'put',
        logoutOptions: logoutOptions,
        parametros:parametros,


    })
    return response
}

export const DataDeclinadas = async (setloading, msErrorApi, keycloak, logoutOptions, data_id) => {
    const response = await getAxiosLumen({
        uri: `/ajustador/declinadas/${data_id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions

    })
    return response
}

export const DataAceptadas = async (setloading, msErrorApi, keycloak, logoutOptions, data_id) => {
    const response = await getAxiosLumen({
        uri: `/ajustador/aceptadas/${data_id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions

    })
    return response
}

export const DataBusqueda = async (setloading, msErrorApi, keycloak, logoutOptions, data_id,parametros) => {
    const response = await getAxiosLumen({
        uri: `/ajustador/busqueda/${data_id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'post',
        logoutOptions: logoutOptions,
        parametros:parametros,
    })
    return response
}


export default DataProceso;