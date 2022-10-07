
import React, {useContext} from "react";
import { getAxiosLumen } from '../../../components/Global/funciones'

const DetalleElementos = async (setloading ,msErrorApi ,keycloak ,logoutOptions, id) => {
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

export const Tabletributt = async (setloading ,msErrorApi ,keycloak ,logoutOptions) => {
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


export default DetalleElementos;