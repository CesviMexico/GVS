import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemContext";
import { useKeycloak } from "@react-keycloak/web";
import FormAntd from "../../components/Global/FormComponent";

//MIU
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import { Form } from "antd";
import IndicadoresForm, { IndicadoresData } from "./Services";

import { Card as CardNTD } from 'antd';
import { Typography as TypographyANTD } from 'antd';

import { Uid, ExportToExcel } from '../../components/Global/funciones'
import NotificationMessageANTD  from "../../components/Global/notification";


const { Title } = TypographyANTD;
const Home = (props) => {
    const themeContext = useContext(ThemeContext);
    const { keycloak } = useKeycloak();
    const { msErrorApi, logoutOptions, } = themeContext;
    const [loading, setLoading] = useState(false);
    const [formItems, setFormItems] = useState([]);

    useEffect(() => { Informes() }, [])

    const Informes = async () => {
        try {
            const response = await IndicadoresForm(
                setLoading,
                msErrorApi,
                keycloak,
                logoutOptions,

            )
            switch (response.status) {
                case 200:
                    console.log(response);
                    setFormItems(response.formItems)
                    break;

                default:
                    break;
            }
        } catch (error) {

        }
    };

    const [verExporta, setVerExporta] = useState(false);
    const [dataSet, setDataSet] = useState([]);
    const [dataSetExcel, setDataSetExcel] = useState([]);

    const [form] = Form.useForm();
    const onFinish = async (values) => {
        const rangeValue = values['dates'] && values['dates'];
        const dataValues = {
            fechaIn: rangeValue && rangeValue[0].format('YYYY-MM-DD'),
            fechaOut: rangeValue && rangeValue[1].format('YYYY-MM-DD'),
            ajustador: values['ajustador'] ? values['ajustador'] : '',
            estado: values['estado'] ? values['estado'] : '',
            valuador: values['valuador'] ? values['valuador'] : '',

        }
        console.log("values", dataValues)

        try {
            const response = await IndicadoresData(
                setLoading,
                msErrorApi,
                keycloak,
                logoutOptions,
                dataValues,
            )
            switch (response.status) {
                case 200:
                 
                    if (response.exel.length > 0) {
                        setVerExporta(true)
                        setDataSet(response.data)
                        setDataSetExcel(response.exel)
                    }else{
                        NotificationMessageANTD({
                            tipoComponent:'notification',
                            type:'warning',
                            texto:'No se encontraron registrós!',                           
                         })
                        setVerExporta(false)
                        setDataSet([])
                    }

                    break;
                default:
                    break;
            }
        } catch (error) {

        }
    }

    const onClickSec = () => {
        ExportToExcel({ datasource: dataSetExcel, Title: "Reporte Completo" })

    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": { m: 1, width: "100%", height: "100%" },
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Card variant="outlined" >
                                <CardContent>
                                    <FormAntd
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        layout={"vertical"}
                                        loading={loading}
                                        formItems={formItems}
                                        form={form}
                                        onFinish={onFinish}
                                        titleSubmit={"Consultar"}
                                        iconButton={"material-symbols:save-as-outline"}

                                        ButtonSec={verExporta}
                                        titleSubmitSec={'Exportar'}
                                        onClickSec={() => onClickSec()}
                                        position={''}
                                        salto={false}
                                        xsBotton={12}
                                        smBotton={12}
                                        mdBotton={12}

                                        block={false}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                {
                                    dataSet && dataSet.map((item, index) => (
                                        <Grid item xs={12} sm={6} md={4}>
                                            <CardNTD
                                                key={Uid(index)}
                                                hoverable
                                                title={item.title}
                                                bordered={false}
                                                height
                                                style={{ height: 250, width: 250, marginTop: 16, textAlign: 'center' }}
                                                actions={[
                                                    <>{item.actions}</>,
                                                ]}
                                            >
                                                <Title key={Uid(index)} level={2}>{item.body}</Title>

                                            </CardNTD>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;