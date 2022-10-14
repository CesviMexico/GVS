import React, { useState, useContext, useEffect } from "react";
import CrudContext from "../../../context/crud/crudContext";
import Crud from "../../../components/Global/Crud";
import ThemeContext from "../../../context/ThemContext";
import { useKeycloak } from "@react-keycloak/web";

import { FormAntdCrud } from "../../../components/Global/FormComponent";
import { ModdalANTD } from "../../../components/Global/ModalComponent";
import TablaANTD from "../../../components/Global/TablaComponent";
import DrawerAntd from "../../../components/Global/DrawerComponent";

// import {
//     DetalleElementos,
//     TableAtributtes,
//     AddElementForm,
//     DeleteElementForm,
// } from "./Services";

import { Button } from "antd";

const Home = () => {

    const crudContext = useContext(CrudContext);
    const themeContext = useContext(ThemeContext);
    const { keycloak } = useKeycloak();
    const [uri] = useState("configuracion/tables");

    const {
        datasource,
        form,
        loading,
        currentrowid,
        obtenerDatosAction,
        editarDatosAction,
        openModalCAction,
        chCurrentRowIDAction,
        chTitleBtnCAction,
        setLoadingCrud,
    } = crudContext;
   
    const {
        backgroundColor,
        primaryColor,
        secondaryColor,
        colorTable,
        sizeIcon,
        msErrorApi,
        logoutOptions,
    } = themeContext;
   
   
    useEffect(() => {
         ActualizaTabla();
    }, []);

    const ActualizaTabla = () => {
        obtenerDatosAction(uri);
    };

    const OnClickAction = (row, key, event) => {
        // swicthComponentAction[key](row, event);
    };

    



    return (
        <>
            <Crud
                title={"Nuevo Tabla"}
                uri={uri}
                columns={datasource.columns}
                datasource={datasource.data}
                tableProps={datasource.props_table}
                OnClickAction={OnClickAction}
                ActualizaTabla={ActualizaTabla}
                loading={loading}
                viewFab={false}
            >
                <FormAntdCrud formItems={datasource.formItems} />
            </Crud>
        </>
    )

}

export default Home;
