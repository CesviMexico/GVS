import React from 'react'

// import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./components/Global/Keycloak"
import PrivateRoute from "./components/Global/helpers/PrivateRoute";

import { HashRouter, Routes, Route, } from 'react-router-dom';

import DemosComponents from './pages/DemosComponents'
import Login from './pages/login'

//configuracion
import Users from './pages/Configuracion/Users/Home'
import Forms from './pages/Configuracion/Forms/Home'
import Tables from './pages/Configuracion/Tables/Home'
import Catalogos from './components/Catalogos/Home'

import Page404 from './pages/Page404'
import Page403 from './pages/Page403'

import GraficasANTD from './pages/GraficasANTD'
import GraficasChart from './pages/GraficasChart'

import 'antd/dist/antd.css';
import { Spin } from 'antd';
import Layout from './components/Layout/Layout'


const loading = () => <div className="animated fadeIn pt-1 text-center"> <Spin /> Cargando...</div>

const Router = () => {
    return (
        // <ReactKeycloakProvider authClient={keycloak}>
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Routes>
                        <Route path="/DemosComponents" element={<PrivateRoute><Layout><DemosComponents /></Layout></PrivateRoute>} />
                        
                        <Route path="/Cat" element={<PrivateRoute><Layout><Page403 /></Layout></PrivateRoute>} />
                        <Route path="/Cat2" element={<PrivateRoute><Layout><Page403 /></Layout></PrivateRoute>} />
                        
                        <Route path="/" element={<Layout><Login /></Layout>} />                        
                        <Route path="/login" element={<Layout><Login /></Layout>} />

                        <Route path="/antd" element={<PrivateRoute><Layout><GraficasANTD /></Layout></PrivateRoute>} />
                        <Route path="/chartjs" element={<PrivateRoute><Layout><GraficasChart /></Layout></PrivateRoute>} />


                        <Route path="Configuracion/Users" element={<PrivateRoute><Layout><Users /></Layout></PrivateRoute>} />
                        <Route path="Configuracion/Forms" element={<PrivateRoute><Layout><Forms /></Layout></PrivateRoute>} />
                        <Route path="Configuracion/Tables" element={<PrivateRoute><Layout><Tables /></Layout></PrivateRoute>} />
                        <Route path="Configuracion/Catalogos" element={<PrivateRoute><Layout><Catalogos /></Layout></PrivateRoute>} />


                        <Route path="/Page403" element={<PrivateRoute><Page403 /></PrivateRoute>} />
                        <Route path="/Page404" element={<PrivateRoute><Layout><Page404 /></Layout></PrivateRoute>} />

                        <Route path="*" element={<PrivateRoute><Layout><Page403 /></Layout></PrivateRoute>} />
                    </Routes>
                </React.Suspense>
            </HashRouter>
        // </ReactKeycloakProvider>
    )
}

export default Router
