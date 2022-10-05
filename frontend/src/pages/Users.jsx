import React, { useState, useContext, useEffect } from "react";
import CrudContext from "../context/crud/crudContext";
import Crud from "../components/Global/Crud";
import {FormAntdCrud} from "../components/Global/FormComponent";

const Users = () => {

  const crudContext = useContext(CrudContext);
  const {
    datasource, form, obtenerDatosAction, editarDatosAction,
    openModalCAction, chCurrentRowIDAction, chTitleBtnCAction, loading
  } = crudContext;

  const [uri] = useState("demo/user");

  //TABLA
  useEffect(() => { ActualizaTabla() }, []);

  const swicthComponentAction = {
    Eliminar: (row) => onEliminarRow(row),
    Editar: (row) => onEditarRow(row),
  };

  const ActualizaTabla = () => {
    obtenerDatosAction(uri)
  };

  //ACTION'S DE LAS TABLAS
  const OnClickAction = (row, key) => {  
    swicthComponentAction[key](row);
  };

  const onEditarRow = (row) => {  
    form.setFieldsValue(row);
    chCurrentRowIDAction(row.id_user);
    chTitleBtnCAction("Editar");
    openModalCAction();
  };

  const onEliminarRow = (row) => {
    row["estatus"] = "BAJA";
    editarDatosAction(uri, row ,'delete');
  }


  const formItems = [
    {
      label: "Keycloak",
      name: "id_keycloak",
      tipo: 'Input',
      placeholder: "Keycloak",
      rules: [
        {
          required: true,
          message: 'Please input your Keycloak!',
        },
      ],
    },
    {
      label: "Nombre",
      name: "given_name",
      tipo: 'Input',
      placeholder: "Nombre",
      rules: [
        {
          required: false,
          message: 'Please input your Nombre!',
        },
      ],
    },
    {
      label: "Apellidos",
      name: "family_name",
      tipo: 'Input',
      placeholder: "Apellidos",
      rules: [
        {
          required: false,
          message: 'Please input your Apellidos!',
        },
      ],
    },
    {
      label: "Usuarios",
      name: "preferred_username",
      tipo: 'Input',
      placeholder: "Usuarios",
      rules: [
        {
          required: false,
          message: 'Please input your Usuarios!',
        },
      ],
    },
    {
      label: "email",
      name: "email",
      tipo: 'Input',
      placeholder: "email",
      rules: [
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: false,
          message: 'Please input your E-mail!',
        },
      ],
    },

  ]


  return (
    <>
      <Crud
        title={"Catálogo plantilla"}
        uri={uri}
        columns={datasource.columns}
        datasource={datasource.data}
        tableProps={datasource.props_table}
        OnClickAction={OnClickAction}
        ActualizaTabla={ActualizaTabla}
        loading={loading}
      >
        <FormAntdCrud
          formItems={datasource.formItems}

        />
      </Crud>
    </>
  );
};

export default Users;
