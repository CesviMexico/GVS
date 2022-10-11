
import React, {useContext} from "react";
import { getAxiosLumen } from '../../../components/Global/funciones'

export const DetalleElementos = async (setloading ,msErrorApi ,keycloak ,logoutOptions, id) => {
     const response = await getAxiosLumen({
        uri:`configuracion/forms/elements/${id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions

    })
    return response
}


export const FormElementoAtributt = async (setloading ,msErrorApi ,keycloak ,logoutOptions) => {
    const response = await getAxiosLumen({
       uri: "configuracion/forms",
       setloading: setloading,
       msErrorApi: msErrorApi,
       keycloak: keycloak,
       notification: false,
       request: 'get',
       logoutOptions: logoutOptions

   })
   return response
}

export const TableAtributtes = async (setloading ,msErrorApi ,keycloak ,logoutOptions, id) => {
    const response = await getAxiosLumen({
       uri: `configuracion/forms/elements/attributes/${id}`,
       setloading: setloading,
       msErrorApi: msErrorApi,
       keycloak: keycloak,
       notification: false,
       request: 'get',
       logoutOptions: logoutOptions

   })
   return response
}
export const AddElementForm = async (setloading ,msErrorApi ,keycloak ,logoutOptions, parametros) => {
    const response = await getAxiosLumen({
       uri: `configuracion/forms/elements/attributes`,
       setloading: setloading,
       msErrorApi: msErrorApi,
       keycloak: keycloak,
       notification: true,
       request: 'post',
       logoutOptions: logoutOptions,
       parametros,
   })
   return response
}


export default DetalleElementos;