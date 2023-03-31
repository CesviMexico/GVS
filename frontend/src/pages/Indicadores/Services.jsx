import { getAxiosLumen } from '../../components/Global/funciones'
export const IndicadoresForm = async (setloading, msErrorApi, keycloak, logoutOptions) => {
    const response = await getAxiosLumen({
        uri: `/Indicadores`,
        setloading: setloading,
        msErrorApi: msErrorApi,
        keycloak: keycloak,
        notification: false,
        request: 'get',
        logoutOptions: logoutOptions
    })
    return response
}

export const IndicadoresData = async (setloading, msErrorApi, keycloak, logoutOptions,parametros) => {
    const response = await getAxiosLumen({
        uri: `/Indicadores/Data`,
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

export default IndicadoresForm;