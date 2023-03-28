import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemContext";
import { useKeycloak } from "@react-keycloak/web";

//components
import TablaANTD from "../../components/Global/TablaComponent";
import { ModdalANTD } from "../../components/Global/ModalComponent";
import { Image} from 'antd'

//servicios
import DataValuations, {DataValuationsDeclined, GetPhotosValuation, GetValuationMonto} from "./Services"; 

//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Uid } from '../../components/Global/funciones'

const Declinadas = (props) => {
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

    //hooks table
    const [datasource, setDataSource] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setloading] = useState(false);
    const [tableProps, setTableProps] = useState([]);

     //TABLA
    useEffect(() => { ActualizaTabla() }, [])
    const ActualizaTabla = async () => {
        try {
        const response = await DataValuationsDeclined(
            setloading,
            msErrorApi,
            keycloak,
            logoutOptions,

        )
        ////console.log("response", response)
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

    //ACTION'S DE LAS TABLAS
    const OnClickAction = (row, key) => {
        ////console.log("row, key", row, key)
        swicthComponentAction[key](row);
    }

    const swicthComponentAction = {
        Fotos: (row) => onViewfotos(row),
        Valuacion: (row) => onViewEvaluacion(row),
    };
    //modal action
    const [visible, setVisible] = useState(false)
    const [listImage, setListImage] = useState([])

    //acciones de botones
    const onViewfotos = async(row) => {
        ////console.log("onViewfotos", row)
        setVisible(true)
        try {
            const response = await GetPhotosValuation(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,
                row.id_valuacion,
            )
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
    const onViewEvaluacion = async(row) => {
        ////console.log("onViewEvaluacion", row)
        setVisible(true)
        try {
            const response = await GetValuationMonto(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,
                row.id_valuacion,
            )
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
            "& > :not(style)": { m: 1, width: "98%", height: "100%" },
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

export default Declinadas;