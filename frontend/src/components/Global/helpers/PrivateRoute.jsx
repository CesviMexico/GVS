import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom"
import BackdropMUI from "../BackdropCompont"

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate()
    const { keycloak,initialized } = useKeycloak();
    const isLoggedIn = keycloak.authenticated;
    // console.log("keycloak", keycloak)

    if (!initialized) {
        return <BackdropMUI open={true}/>
      }

    return isLoggedIn ? children : navigate('/')

};

export default PrivateRoute;