import React from "react";

import PrivateRoute from "./components/Global/helpers/PrivateRoute";

import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";

import Users from "./pages/Users/Home";

//configuracion
import Forms from "./pages/Configuracion/Forms/Home";
import Tables from "./pages/Configuracion/Tables/Home";

import Catalogos from "./components/Catalogos/Home";

import Page404 from "./pages/Page404";
import Page403 from "./pages/Page403";


//ajustador
import Ajustador from "./pages/Ajustador/Home";



import { Spin } from "antd";
import Layout from "./components/Layout/Layout";

import { useKeycloak } from "@react-keycloak/web";

import Navigation from './components/LayoutMobil/Navigation'


const loading = () => (
  <div className="animated fadeIn pt-1 text-center">
    {" "}
    <Spin /> Cargando...
  </div>
);

const Router = () => {

  const { keycloak } = useKeycloak();


  console.log('keycloak', keycloak.resourceAccess ? keycloak.resourceAccess[process.env.REACT_APP_clientId].roles[0] : null)
  let rol = keycloak.resourceAccess ? keycloak.resourceAccess[process.env.REACT_APP_clientId].roles[0] : null

  return (
    // <ReactKeycloakProvider authClient={keycloak}>
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Routes>
          <Route
            path="/Dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />

          <Route
            path="/Users"
            element={
              <PrivateRoute>
                <Layout>
                  <Users />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="Configuracion/Forms"
            element={
              <PrivateRoute>
                <Layout>
                  <Forms />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="Configuracion/Tables"
            element={
              <PrivateRoute>
                <Layout>
                  <Tables />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="Configuracion/Catalogos"
            element={
              <PrivateRoute>
                <Layout>
                  <Catalogos />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/Page403"
            element={
              <PrivateRoute>
                <Page403 />
              </PrivateRoute>
            }
          />
          <Route
            path="/Page404"
            element={
              <PrivateRoute>
                <Layout>
                  <Page404 />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/Ajustador"
            element={
              <PrivateRoute>
                  <Ajustador />
              </PrivateRoute>
            }
          />

          <Route
            path="*"
            element={
              <PrivateRoute>               
                  {rol === "Administrador" ?  <Navigation><Ajustador /></Navigation>:<Layout><Page403 /></Layout> }               
              </PrivateRoute>
            }
          />
        </Routes>
      </React.Suspense>
    </HashRouter>
    // </ReactKeycloakProvider>
  );
};

export default Router;
