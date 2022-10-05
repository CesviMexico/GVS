import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../context/crud/crudContext";
import Crud from '../components/Global/Crud'
import FormCat2 from "./FormCatalogos/FormCat2";

const Cat2 = () => {

    const crudContext = useContext(CrudContext)
    const { obtenerDatosAction } = crudContext

    const table = "bit_clientes"
    const id = `QrTjH${window.btoa('id_cliente')}`
    const uri = `/catalogos/clientes/?_t=ApLzV${window.btoa(table)}`

    useEffect(() => {
        obtenerDatosAction(uri)
    }, [])

    const [title] = useState("Titulo del CRUD2");
    const columnstable = [
        {
            title: "email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "ip_address",
            dataIndex: "ip_address",
            key: "ip_address",
        },
    ];
    return (

        <>
            <Crud title={title} columnstable={columnstable} uri={uri} id={id} mod={1} >
                <FormCat2/>
            </Crud>
        </>

    );
};

export default Cat2;
