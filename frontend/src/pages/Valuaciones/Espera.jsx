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

//FIREBASE
import { firebaseConfig } from '../../components/Global/firebase'
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';


const Espera = (props) => {
    const themeContext = useContext(ThemeContext);
    const { keycloak } = useKeycloak();
    const {
        msErrorApi,
        logoutOptions,
        tporconfirmar,

    } = themeContext;

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const userContext = useContext(UserContext);
    const { user } = userContext;

    //hooks table
    const [datasource, setDataSource] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setloading] = useState(false);
    const [tableProps, setTableProps] = useState([]);

    //TABLA
    useEffect(() => { ActualizaTabla() }, [tporconfirmar]);
    const ActualizaTabla = async () => {
        try {
            const response = await DataValuations(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,

            )
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
        Monto: () => ActualizaTabla(),
        'Enviar valuación': (row) => onChangeStatus(row),
        Eliminar: (row) => onTrash(row),
    };
    const OnClickAction = (row, key) => {
        swicthComponentAction[key](row);
    };

    const [visible, setVisible] = useState(false)
    const [listImage, setListImage] = useState([])
    const onViewfotos = async (row) => {
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

    const onChangeStatus = async (row) => {
        try {
            const response = await updateValuation(
                setloading,
                msErrorApi,
                keycloak,
                logoutOptions,
                row.id_valuacion,
                {
                    status: 'valuado',
                    id_user_respuesta: user.id_user,
                    id_ajustado :row.id_ajustado
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

                console.log('preferred_username',row.preferred_username);
                console.log('totales', response.totales[0].T);

                    const encuestaRef = doc(db, 'usuarios', row.preferred_username);
                    await updateDoc(encuestaRef, {
                        valuado: response.totales[0].T
                    });

                    ActualizaTabla();
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