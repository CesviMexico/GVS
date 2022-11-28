
import React, {useContext} from "react";
import { getAxiosLumen } from '../../components/Global/funciones'

export const DataMenu = async (setloading ,msErrorApi ,keycloak ,logoutOptions, id) => {
     const response = await getAxiosLumen({
        uri:`menu/${id}`,       
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions

    })
    return response
}

export const ActualizaUserData = async (setloading ,msErrorApi ,keycloak ,logoutOptions, parametros, request) => {
    const response = await getAxiosLumen({
       uri: `configuracion/forms/elements/attributes`,
       setloading: setloading,
       msErrorApi: msErrorApi,
       keycloak: keycloak,
       notification: false,
       request: request?request:'post',
       logoutOptions: logoutOptions,
       parametros,
   })
   return response
}



export default DataMenu;