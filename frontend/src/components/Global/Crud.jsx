import React, { useState, useContext } from "react";
import CrudContext from "../../context/crud/crudContext";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Form } from "antd";
import "antd/dist/antd.css";

import TablaANTD from "./TablaComponent";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


const Crud = (props) => {

  const crudContext = useContext(CrudContext);

  const { tableProps, loading, columns, datasource, OnClickAction, ActualizaTabla, title, uri, viewFab } = props

  const { form, openmodal, currentrowid, btntitle, guardarDatosAction, editarDatosAction,
    openModalCAction, closeModalCAction, chCurrentRowIDAction, chTitleBtnCAction, } = crudContext;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onNewCrud = () => {
    form.resetFields();
    chCurrentRowIDAction(0);
    chTitleBtnCAction("Guardar");
    openModalCAction();
  };

  const onFinish = (values) => {
    if (btntitle === "Guardar") {
      guardarDatosAction(uri, values);
    } else {    
      editarDatosAction(uri, values, currentrowid);
    }
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openmodal}
        onClose={closeModalCAction}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
        maxWidth="sm"
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(111, 126, 140, 0.2)",
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <Form form={form} name="control-hooks" layout="vertical" onFinish={onFinish}>
          <DialogContent>{props.children}</DialogContent>
          <DialogActions>
            <Button autoFocus onClick={closeModalCAction}>
              Cancelar
            </Button>
            <Button type="submit" autoFocus>
              {btntitle}
            </Button>
          </DialogActions>
        </Form>
      </Dialog>

      <Box sx={{
        display: 'flex', flexWrap: 'wrap', '& > :not(style)':
          { m: 1, width: '98%', height: '100%', },
      }}>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TablaANTD
              loading={loading}
              columnsTable={columns}
              datasource={datasource}

              pagination={tableProps && tableProps.pagination}
              pageSize={tableProps && tableProps.pageSize}
              simplepage={tableProps && tableProps.simplepage}
              positionBottom={tableProps && tableProps.positionBottom}
              positionTop={tableProps && tableProps.positionTop}

              size={tableProps && tableProps.size}
              bordered={tableProps && tableProps.bordered}
              scrollX={tableProps && tableProps.scrollX}
              scrollY={tableProps && tableProps.scrollY}
              tableLayout={tableProps && tableProps.tableLayout}

              Title={tableProps && tableProps.Title}
              IconAvatar={tableProps && tableProps.IconAvatar}

              OnClickAction={OnClickAction}
              ActualizaTabla={ActualizaTabla}

              Agregar={onNewCrud}
              AgregarIcon={tableProps && tableProps.IconAgregar}

            />
            {viewFab &&
              <Fab aria-label="save" color="primary"
                sx={{
                  position: 'fixed',
                  bottom: "80px",
                  right: '45%',

                }}
                onClick={onNewCrud}
              >
                <AddIcon />
              </Fab>
            }
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Crud;