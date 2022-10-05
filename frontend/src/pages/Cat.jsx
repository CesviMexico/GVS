import React, { useState, useContext, useEffect } from "react";
import CrudContext from "../context/crud/crudContext";
import Crud from "../components/Global/Crud";
import FormCat from "./FormCatalogos/FormCat";

const columns = [
  {
    title: "No.",
    key: "no",
    render: (row, record, index) => index + 1,
  },
  {
    title: "Nombre",
    dataIndex: "first_name",
    key: "first_name",
    busqueda: true,
  },
 
  {
    title: "Apellido",
    key: "last_name",
    dataIndex: "last_name",
  },
  {
    title: "Genero",
    dataIndex: "gender",
    key: "gender",
  
  },
  {
    title: "Corre",
    key: "email",
    dataIndex: "email",
  },

  {
    title: "Editar",
    key: "Editar",
    actions: true,
    icon: "fluent:person-edit-24-filled",
    width: "50px",
  },
  {
    title: "Eliminar",
    key: "Eliminar",
    actions: true,
    icon: "fluent:person-delete-16-filled",
    titleMSG: "¿Esta seguro churro?",
    width: "50px",
  },



];

const Cat = () => {

  const crudContext = useContext(CrudContext);
  const {
    datasource, form, obtenerDatosAction, editarDatosAction,
    openModalCAction, chCurrentRowIDAction, chTitleBtnCAction,loading
  } = crudContext;

  const [uri] = useState("demo/data");
  // const [title] = useState("Catálogo plantilla");

  //TABLA
  useEffect(() => { ActualizaTabla() }, []);

  const swicthComponentAction = {
    Eliminar: (row) => onEliminarRow(row),
    Editar: (row) => onEditarRow(row),
  };

  const ActualizaTabla = () => {
    obtenerDatosAction(uri)
    console.log("datasource",datasource)
  };


  //ACTION'S DE LAS TABLAS
  const OnClickAction = (row, key) => {
    console.log("OnClickAction-key,", key)
    swicthComponentAction[key](row);
  };

  const onEditarRow = (row) => {
    form.setFieldsValue(row);
    chCurrentRowIDAction(row.id);
    chTitleBtnCAction("Editar");
    openModalCAction();
  };

  const onEliminarRow = (row) => {
    row["estatus"] = "BAJA";
    chCurrentRowIDAction(row.id);
    editarDatosAction(uri, row);
  }


  return (
    <>
      <Crud
        title={"Catálogo plantilla"}
        uri={"demo/data"}
        columns={datasource.columns}
        datasource={datasource.data}
        tableProps={datasource.props_table}
        OnClickAction={OnClickAction}
        ActualizaTabla={ActualizaTabla}
        loading={loading}
      >
        <FormCat />
      </Crud>
    </>
  );
};

export default Cat;
