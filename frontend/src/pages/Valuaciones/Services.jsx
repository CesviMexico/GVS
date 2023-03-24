import { getAxiosLumen } from '../../components/Global/funciones'
export const DataValuations = async (setloading, msErrorApi, keycloak, logoutOptions) => {
    const response = await getAxiosLumen({
        uri: `/Valuacion/Espera`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}
export default DataValuations;

export const DataValuationsConfirmar = async (setloading, msErrorApi, keycloak, logoutOptions) => {
    const response = await getAxiosLumen({
        uri: `/Valuacion/PorConfirmar`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}
export const DataValuationsAcept = async (setloading, msErrorApi, keycloak, logoutOptions) => {
    const response = await getAxiosLumen({
        uri: `/Valuacion/Aceptadas`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}
export const DataValuationsDeclined = async (setloading, msErrorApi, keycloak, logoutOptions) => {
    const response = await getAxiosLumen({
        uri: `/Valuacion/Declinadas`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}
export const GetPhotosValuation = async (setloading, msErrorApi, keycloak, logoutOptions, id_valuacion) =>{
    const response =await getAxiosLumen({
        uri: `/Valuacion/Espera/${id_valuacion}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}

export const GetValuationMonto =async (setloading, msErrorApi, keycloak, logoutOptions, id_valuacion) =>{
    const response =await getAxiosLumen({
        uri: `/Valuacion/Espera/${id_valuacion}/monto`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}

export const updateValuation = async(setloading, msErrorApi, keycloak, logoutOptions, id_valuacion, parametros)=>{
    const response =await getAxiosLumen({
        uri: `/Valuacion/Espera/${id_valuacion}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'put',
        logoutOptions: logoutOptions,
        parametros
    })
    return response
}

export const trashFotoMonto = async(setloading, msErrorApi, keycloak, logoutOptions, id_files, )=>{
    const response =await getAxiosLumen({
        uri: `/Valuacion/Espera/file/${id_files}`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: true,
        request: 'delete',
        logoutOptions: logoutOptions,        
    })
    return response
}