import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemContext";
import { useKeycloak } from "@react-keycloak/web";

//components
import TablaANTD from "../../components/Global/TablaComponent";
import { Image} from 'antd'

//servicios
import DataValuations, {DataValuationsConfirmar, GetPhotosValuation, GetValuationMonto} from "./Services"; 

//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Uid } from '../../components/Global/funciones'

const PorConfirmar = (props) => {
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
        const response = await DataValuationsConfirmar(
            setloading,
            msErrorApi,
            keycloak,
            logoutOptions,

        )
        console.log("response", response)
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
        fotos: (row) => onViewfotos(row),
        valuacion: (row) => OnViewValuacion(row),
    };

    //ACTION'S DE LAS TABLAS
    const OnClickAction = (row, key) => {
        swicthComponentAction[key](row);
    };

    //Image action
    const [visible, setVisible] = useState(false)
    const [listImage, setListImage] = useState([])
    const onViewfotos = async (row) => {
        setVisible(true)
        //console.log("onViewfotos", row)
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
    const OnViewValuacion = async(row, key) => {
        setVisible(true)
        //console.log("row, key", row, key)
        //swicthComponentAction[key](row);
        try {
            const response = await GetValuationMonto(
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

export default PorConfirmar;