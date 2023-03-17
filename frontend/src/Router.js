import React, { useState, useContext, useEffect } from "react";

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
import Proceso from "./pages/Ajustador/Proceso";
import Valuaciones from "./pages/Ajustador/Valuaciones";
import Porconfirmar from "./pages/Ajustador/Porconfirmar";

import Aceptadas from "./pages/Ajustador/Aceptadas";
import Declinadas from "./pages/Ajustador/Declinadas";
import Busqueda from "./pages/Ajustador/Busqueda";




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
  let rol = keycloak.resourceAccess ? keycloak.resourceAccess[process.env.REACT_APP_clientId].roles[0] : null

  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Routes>
          {rol === "Administradorr" ?
            <>
              <Route path="/" element={<Layout> <Login /> </Layout>} />
              <Route path="/login" element={<Layout> <Login /> </Layout>} />
              <Route path="/Dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
              <Route path="/Users" element={<PrivateRoute> <Layout> <Users /> </Layout> </PrivateRoute>} />
              <Route path="Configuracion/Forms" element={<PrivateRoute> <Layout> <Forms /> </Layout> </PrivateRoute>} />
              <Route path="Configuracion/Tables" element={<PrivateRoute><Layout><Tables /> </Layout></PrivateRoute>} />
              <Route path="Configuracion/Catalogos" element={<PrivateRoute> <Layout><Catalogos /> </Layout></PrivateRoute>} />
              <Route path="/Page403" element={<PrivateRoute> <Page403 /></PrivateRoute>} />
              <Route path="/Page404" element={<PrivateRoute> <Layout><Page404 /> </Layout></PrivateRoute>} />
              <Route path="*" element={<PrivateRoute><Layout><Page403 /></Layout></PrivateRoute>} />
            </> :
            <>
              <Route path="/" element={ <Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PrivateRoute><Navigation><Proceso /></Navigation></PrivateRoute>} />
              <Route path="/Proceso" element={<PrivateRoute> <Navigation><Proceso /> </Navigation> </PrivateRoute>} />
              <Route path="/Valuaciones" element={<PrivateRoute> <Navigation><Valuaciones /> </Navigation></PrivateRoute>} />
              <Route path="/Porconfirmar" element={<PrivateRoute> <Navigation><Porconfirmar /> </Navigation></PrivateRoute>} />
              <Route path="/Aceptadas" element={<PrivateRoute> <Navigation><Aceptadas /> </Navigation></PrivateRoute>} />
              <Route path="/Declinadas" element={<PrivateRoute> <Navigation><Declinadas /> </Navigation></PrivateRoute>} />
              <Route path="/Busqueda" element={<PrivateRoute> <Navigation><Busqueda /> </Navigation></PrivateRoute>} />
            </>
          }
        </Routes>

      </React.Suspense>
    </HashRouter>
  );
};

export default Router;
