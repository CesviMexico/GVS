import React, { useState, useContext, useEffect } from "react";
import CrudContext from "../../../context/crud/crudContext"
import Crud from "../../../components/Global/Crud";
import { FormAntdCrud } from "../../../components/Global/FormComponent";

const Home = () => {

  const crudContext = useContext(CrudContext);
  const {
    datasource, form, obtenerDatosAction, editarDatosAction,
    openModalCAction, chCurrentRowIDAction, chTitleBtnCAction, loading
  } = crudContext;

  const [uri] = useState("user");

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
    editarDatosAction(uri, row, 'delete');
  }

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

export default Home;
