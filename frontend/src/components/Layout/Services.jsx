
import React, {useContext} from "react";
import { getAxiosLumen } from '../../components/Global/funciones'

export const DataMenu = async (setloading ,msErrorApi ,keycloak ,logoutOptions, id, user) => {
     const response = await getAxiosLumen({
        uri:`menu/${id}?_us=${JSON.stringify(user)}`,       
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions

    })
    return response
}

export const DataOneUser = async (setloading, msErrorApi, keycloak, logoutOptions,data_id) => {
    const response = await getAxiosLumen({
        uri: `/user/${data_id}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions

    })
    return response
}



export default DataMenu;