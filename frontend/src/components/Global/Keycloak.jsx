import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "https://auth.sistemagma.com:8443/",
    realm: "auth",
    clientId: process.env.REACT_APP_clientId,    
});

export default keycloak;