import React, { useState, useEffect, useContext } from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import "../../components/LayoutMobil/layoutMobil.css"
import { Form, Input, Button, TextArea, ImageUploader, Toast } from 'antd-mobile';
import { PicturesOutline } from "antd-mobile-icons";

import { useNavigate, } from 'react-router-dom';
import ThemeContext from '../../context/ThemContext'
import { AppStringUser } from "../../Const";

//servicios
import { InsertValuacion } from "./Services";
import { beforeUpload } from '../../components/Global/funciones'

const Valuaciones = () => {
    const { keycloak } = useKeycloak();
    const themeContext = useContext(ThemeContext)
    const { msErrorApi, logoutOptions, setIdServicio, } = themeContext

    const navigate = useNavigate()

    const userLocalStorage = {
        id_user: localStorage.getItem(AppStringUser.ID_USER),
        id_company: localStorage.getItem(AppStringUser.ID_COMPANY),
        color: localStorage.getItem(AppStringUser.COLOR),
        background_color: localStorage.getItem(AppStringUser.BACKGROUND_COLOR),
    }


    const onFinishA = (value) => {

        console.log("length", fileList.length)
        console.log("fileList", fileList)

        if (fileList.length) {
            onFinish(value)
            console.log("ok")          
        } else {
            Toast.show({ content: 'No hay fotos', })
            setLoading(false);
        }

    }
    const onFinish = async (value) => {
        setLoading(true);
        let formData = new FormData();
        fileList.map((photo) => {
            let blob = new Blob([photo.file], { type: "image/png,jpg" });
            formData.append("photos[]", blob, photo.file.name);
        });

        formData.append("id_user_solicita", userLocalStorage.id_user);
        formData.append("id_company", userLocalStorage.id_company);
        formData.append("reporte", value.reporte);
        formData.append("vin", value.vin);
        formData.append("danios", value.danios);

        try {
            const response = await InsertValuacion(
                setLoading,
                msErrorApi,
                keycloak,
                logoutOptions,
                "",
                formData
            );
            switch (response.status) {
                case 403:
                    setLoading(false);
                    break;

                case undefined:
                    setLoading(false);
                    break;

                case 200:
                    setFileList([]);
                    // setInitialValues([]);
                    setIdServicio()
                    navigate("/Proceso")
                    setLoading("Valuaciones en proceso");

                    break;

                default:
                    break;
            }
        } catch (error) {
            setLoading(false);
        }
    };

    const [fileList, setFileList] = useState([]);
    const mockUpload = (file) => {
        // await sleep(3000);
        return {
            url: URL.createObjectURL(file),
            file: file,
        };
    };

    const [loading, setLoading] = useState(false);

    return (
        <>
            <ConfigProvider locale={enUS}>
                <Form
                    mode={"card"}
                    // layout="horizontal"
                    onFinish={onFinishA}
                    footer={
                        <Button
                            loading={loading}
                            block
                            type='submit'
                            style={{
                                color: userLocalStorage.color,
                                backgroundColor: userLocalStorage.background_color
                            }}
                            size='large'
                        >
                            Enviar
                        </Button>}
                >
                    <Form.Header>Datos del siniestro</Form.Header>
                    <Form.Item name='reporte' label='Reporte'
                        rules={[{
                            required: true,
                            message: "Reporte",
                            pattern: new RegExp("^[a-zA-Z0-9-]*$"),
                        }]}
                    >
                        <Input max={20} clearable />
                    </Form.Item>

                    <Form.Item name='vin' label='VIN'
                        rules={[{
                            required: true,
                            message: "VIN",
                            pattern: new RegExp("^[a-zA-Z0-9]*$"),
                        }]}
                    >
                        <Input max={17} clearable />
                    </Form.Item>

                    <Form.Item name='danios' label='Reporte de daños'
                        rules={[{
                            required: true,
                            message: "Reporte de daños",
                        }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name="archivos" label="Fotos"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Please confirm your archivos!',
                    //     },
                    // ({ getFieldValue }) => ({
                    //     validator(_, value) {
                    //         console.log("fileList", getFieldValue)

                    //         if (!value || getFieldValue) {
                    //             return Promise.resolve();
                    //         }
                    //         return Promise.reject(new Error('The two archivos that you entered do not match!'));
                    //     },
                    // }),
                    // ]}

                    >
                        <div style={{ height: "22vh", overflowY: "scroll" }}>
                            <ImageUploader
                                multiple={true}
                                value={fileList}
                                onChange={setFileList}
                                upload={mockUpload}
                                beforeUpload={beforeUpload}

                            //capture={true}

                            >
                                <div
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                        backgroundColor: '#f5f5f5',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#999999',
                                    }}
                                >
                                    <PicturesOutline style={{ fontSize: 30 }} />
                                </div>
                            </ImageUploader>

                        </div>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </>
    );
}

export default Valuaciones;