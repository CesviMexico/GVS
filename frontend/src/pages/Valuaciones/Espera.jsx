import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemContext";
import UserContext from "../../context/UserContext";

import { useKeycloak } from "@react-keycloak/web";

//components
import TablaANTD from "../../components/Global/TablaComponent";
import { Image, } from 'antd';

//servicios
import DataValuations, { GetPhotosValuation, updateValuation, trashFotoMonto } from "./Services";

//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Uid } from '../../components/Global/funciones'

const Espera = (props) => {
    const themeContext = useContext(ThemeContext);
    const { keycloak } = useKeycloak();
    const {
        backgroundColor,
        primaryColor,
        secondaryColor,
        colorTable,
        sizeIcon,
        msErrorApi,
        logoutOptions,
    } = themeContext;

    const userContext = useContext(UserContext);
    const { user, updateUser } = userContext;

    //hooks table
    const [datasource, setDataSource] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setloading] = useState(false);
    const [tableProps, setTableProps] = useState([]);

    //TABLA
    useEffect(() => { ActualizaTabla() }, []);
    const ActualizaTabla = async () => {
        try {
            const response = await DataValuations(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,

            )
            //console.log("Espera", response)
            switch (response.status) {
                case 403:
                    setloading(false);
                    break;

                case undefined:
                    setloading(false);
                    break;

                case 200:

                    setDataSource(response.data)
                    setColumns(response.columns)
                    setTableProps(response.props_table)

                    break;

                default:
                    break;
            }
        } catch (error) {
            setloading(false);
        }
    };
    const swicthComponentAction = {
        Fotos: (row) => onViewfotos(row),
        Monto: (row) => ActualizaTabla(),
        Validacion: (row) => onChangeStatus(row),
        Eliminar: (row) => onTrash(row),
    };
    //ACTION'S DE LAS TABLAS
    const OnClickAction = (row, key) => {
        swicthComponentAction[key](row);
    };

    //modal action
    const [visible, setVisible] = useState(false)
    // const [id_valuacion, setId_valuacion] = useState("")

    const [listImage, setListImage] = useState([])
    const onViewfotos = async (row) => {
        setVisible(true)
        // setId_valuacion(row.id_valuacion)
        try {
            const response = await GetPhotosValuation(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,
                row.id_valuacion,
            )
            //console.log("verfotosuValuacion", response)
            switch (response.status) {
                case 403:
                    setloading(false);
                    break;

                case undefined:
                    setloading(false);
                    break;

                case 200:
                    setListImage(response.data)
                    break;

                default:
                    break;
            }
        } catch (error) {
            setloading(false);
        }

    }

    const onChangeStatus = async (row) => {
        // //console.log("onChangeStatus", row)
        // setId_valuacion(row.id_valuacion)
        // let parametros = { status: 'valuado', id_user_respuesta: user.id_user }
        try {
            const response = await updateValuation(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,
                row.id_valuacion,
                {
                    status: 'valuado',
                    id_user_respuesta: user.id_user
                }
            )
            switch (response.status) {
                case 403:
                    setloading(false);
                    break;

                case undefined:
                    setloading(false);
                    break;

                case 200:
                    ActualizaTabla();
                    //setListImage(response.data)
                    break;

                default:
                    break;
            }
        } catch (error) {
            setloading(false);
        }
    }

    const onTrash = async (row) => {
        try {
            const response = await trashFotoMonto(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,
                row.idfotoMonto,
            )
            switch (response.status) {
                case 403:
                    setloading(false);
                    break;

                case undefined:
                    setloading(false);
                    break;

                case 200:
                    ActualizaTabla();
                    break;

                default:
                    break;
            }
        } catch (error) {
            setloading(false);
        }
    }

    return (
        <>
            <div style={{ display: 'none', }}>
                <Image.PreviewGroup
                    preview={{
                        visible: visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    {listImage.map((images, index) =>
                        <Image
                            key={Uid(index)}
                            //with="20"
                            height={100}
                            style={{ padding: 5, }}
                            src={images.pathname} />
                    )}
                </Image.PreviewGroup>
            </div>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": { m: 1, width: "97%", height: "100%" },
                }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TablaANTD
                            loading={loading}
                            columnsTable={columns}
                            datasource={datasource}

                            setDataSource={setDataSource}
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
                            dragSorting={tableProps && tableProps.dragSorting}
                            Title={tableProps.Title}
                            IconAvatar={tableProps && tableProps.IconAvatar}

                            OnClickAction={OnClickAction}
                            ActualizaTabla={() => ActualizaTabla()}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Espera;