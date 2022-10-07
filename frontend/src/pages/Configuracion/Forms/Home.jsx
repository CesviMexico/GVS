import React, { useState, useContext, useEffect } from "react";
import CrudContext from "../../../context/crud/crudContext"
import Crud from "../../../components/Global/Crud";
import ThemeContext from '../../../context/ThemContext'
import { useKeycloak } from "@react-keycloak/web";

import { FormAntdCrud } from "../../../components/Global/FormComponent";
import { ModdalANTD } from "../../../components/Global/ModalComponent"
import TablaANTD from "../../../components/Global/TablaComponent";
import DrawerAntd from "../../../components/Global/DrawerComponent";


//servicios 
import DetalleElementos from "./Services"
import FormElementoAtributt from "./Services"
import Tabletributt from "./Services"



import { Button } from "antd";


const Home = () => {

  const crudContext = useContext(CrudContext);
  const {
    datasource, form, obtenerDatosAction, editarDatosAction,
    openModalCAction, chCurrentRowIDAction, chTitleBtnCAction, loading, SetloadingCrud
  } = crudContext;

  const themeContext = useContext(ThemeContext)
  const { backgroundColor, primaryColor, secondaryColor, colorTable, sizeIcon, msErrorApi, logoutOptions } = themeContext
  const { keycloak } = useKeycloak();

  const [uri] = useState("configuracion/forms");

  //TABLA
  useEffect(() => { ActualizaTabla() }, []);

  const swicthComponentAction = {
    Eliminar: (row) => onEliminarRow(row),
    Editar: (row) => onEditarRow(row),
    Componetizar: (row) => DetalleComponentes(row),
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
    chCurrentRowIDAction(row.forms_id);
    chTitleBtnCAction("Editar");
    openModalCAction();
  };

  const onEliminarRow = (row) => {
    row["status"] = "BAJA";
    editarDatosAction(uri, row, row.forms_id);
  }

  //modal action
  const [visible, setVisible] = useState(false)
  const [visibleDrawer, setVisibleDrawer] = useState(false)

  //detalle
  const [datasourceDetalle, setDataSourceDetalle] = useState([])
  const [columnsDetalle, setColumnsDetalle] = useState([])
  const [loadingDetalle, setloadingDetalle] = useState(false);
  const [tablePropsDetalle, setTablePropsDetalle] = useState([]);
  const [formPropsDetalle, setFormTablePropsDetalle] = useState([]);


  const [rowForms, setRowForms] = useState([]);
  const DetalleComponentes = async (row) => {
    
    SetloadingCrud(true)

    const response = await DetalleElementos(setloadingDetalle, msErrorApi, keycloak, logoutOptions, row.forms_id)

    setDataSourceDetalle(response.data);
    setColumnsDetalle(response.columns);
    setTablePropsDetalle(response.props_table);
    setFormTablePropsDetalle(response.formItems);

    console.log('DetalleComponentes', response)
  
    setRowForms(row)
    setVisible(true)
    SetloadingCrud(false)
    setVisibleDrawer(false)
  }


  const [loadingAdd, setlLoadingAdd] = useState(false);
  const NewElement = () => {
    setlLoadingAdd(true)   
    setVisibleDrawer(true)
    setlLoadingAdd(false)

  }

  const onChangeSelect = (e, key) => {
    console.log("e", e)
    console.log("key", key)
  }


  return (
    <>

      <ModdalANTD
        visible={visible}
        title={" "}
        footer={false}
        onCancel={() => setVisible(false)}
        width={"75%"}
        centered
      >
        <TablaANTD
          loadingAdd={loadingAdd}
          loading={loading}
          columnsTable={columnsDetalle}
          datasource={datasourceDetalle}

          pagination={tablePropsDetalle && tablePropsDetalle.pagination}
          pageSize={tablePropsDetalle && tablePropsDetalle.pageSize}
          simplepage={tablePropsDetalle && tablePropsDetalle.simplepage}
          positionBottom={tablePropsDetalle && tablePropsDetalle.positionBottom}
          positionTop={tablePropsDetalle && tablePropsDetalle.positionTop}

          size={tablePropsDetalle && tablePropsDetalle.size}
          bordered={tablePropsDetalle && tablePropsDetalle.bordered}
          scrollX={tablePropsDetalle && tablePropsDetalle.scrollX}
          scrollY={tablePropsDetalle && tablePropsDetalle.scrollY}
          tableLayout={tablePropsDetalle && tablePropsDetalle.tableLayout}

          Title={rowForms.name_form}
          IconAvatar={tablePropsDetalle && tablePropsDetalle.IconAvatar}

          OnClickAction={OnClickAction}
          ActualizaTabla={()=>DetalleComponentes(rowForms)}

          Agregar={() => NewElement()}
          AgregarIcon={tablePropsDetalle && tablePropsDetalle.IconAgregar}
        >
          <DrawerAntd
            title={"Nuevo Elemento"}
            onClose={() => setVisibleDrawer(false)}
            visible={visibleDrawer}
            getContainer={false}
            style={{ position: "absolute" }}
          >

            <FormAntdCrud
              formItems={formPropsDetalle}
              onChangeSelect={onChangeSelect}
            />

            <TablaANTD
              tbSimple={true}
              loading={loading}
              columnsTable={columnsDetalle}
              datasource={datasourceDetalle}

              pagination={tablePropsDetalle && tablePropsDetalle.pagination}
              pageSize={tablePropsDetalle && tablePropsDetalle.pageSize}
              simplepage={tablePropsDetalle && tablePropsDetalle.simplepage}
              positionBottom={tablePropsDetalle && tablePropsDetalle.positionBottom}
              positionTop={tablePropsDetalle && tablePropsDetalle.positionTop}

              size={tablePropsDetalle && tablePropsDetalle.size}
              bordered={tablePropsDetalle && tablePropsDetalle.bordered}
              scrollX={tablePropsDetalle && tablePropsDetalle.scrollX}
              scrollY={tablePropsDetalle && tablePropsDetalle.scrollY}
              tableLayout={tablePropsDetalle && tablePropsDetalle.tableLayout}

              // Title={rowForms.name_form}
              // IconAvatar={tablePropsDetalle && tablePropsDetalle.IconAvatar}

              OnClickAction={OnClickAction}
            // ActualizaTabla={ActualizaTabla}

            // Agregar={() => NewElement()}
            // AgregarIcon={tablePropsDetalle && tablePropsDetalle.IconAgregar}
            />

          </DrawerAntd>

        </TablaANTD>

      </ModdalANTD>
      <Crud
        title={"Nuevo Forms"}
        uri={uri}
        columns={datasource.columns}
        datasource={datasource.data}
        tableProps={datasource.props_table}
        OnClickAction={OnClickAction}
        ActualizaTabla={ActualizaTabla}
        loading={loading}
        viewFab={false}
      >
        <FormAntdCrud
          formItems={datasource.formItems}
        />

      </Crud>
    </>
  );
};

export default Home;
