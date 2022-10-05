import React, { useContext, useState, useEffect } from "react";
import ThemeContext from '../context/ThemContext'
import { useKeycloak } from "@react-keycloak/web";

//antd
import { Table, Typography as TypographyAntd, Input } from 'antd';
import 'antd/dist/antd.css';

//MIU
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

//iconos 
import { Icon } from '@iconify/react';

//componentes ejemplo
import CardMUI, { CardAntd } from '../components/Global/CardComponent'
import ModdalMUI, { ModdalANTD } from "../components/Global/ModalComponent";
import TablaANTD from "../components/Global/TablaComponent";
import ButtonMUIE, { ButtonMUIS } from "../components/Global/ButtonComponent";
import NotificationMessageANTD, { NotificationMessageMUI } from "../components/Global/notification"
import FormAntd from "../components/Global/FormComponent"
import { AvatarMUI } from '../components/Global/AvatarComponent'
import DrawerAntd from "../components/Global/DrawerComponent";
import SwitchAntd from "../components/Global/SwichComponent";

//componentes ejemplo para datos
import { getAxiosLumen } from '../components/Global/funciones'
import formItems from './DatosForm'
//COLORES
import { green, red, blue, yellow, } from '@mui/material/colors';


// FUNCIONES
import separator from '../components/Global/funciones'

const { Text } = TypographyAntd;
const DemosComponents = (props) => {

  // Hook y funciones o metodos Globales
  const themeContext = useContext(ThemeContext)
  const { backgroundColor, primaryColor, secondaryColor, colorTable, sizeIcon, msErrorApi, logoutOptions } = themeContext
  const { keycloak } = useKeycloak();

  //modalEjemplo
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const openModal = (tipo) => {
    switch (tipo) {
      case 1:
        setOpen1(true);
        break;
      case 2:
        setOpen2(true);
        break;
      default:
        break;
    }
  };
  const closeModal = () => {
    setOpen1(false);
    setOpen2(false);
  };
  //fin ejemplo

  //Objeto tipo switch para el metodo
  const swicth = {
    "Nuevo": (row) => { console.log('Nuevo', row) },
    "Editar": (row) => { console.log('Editar', row) },
    "Borrar": (row) => { console.log('Borrar', row) },
    "Upload": (row, e, tipoUpluad) => { console.log('Upload', row, e, tipoUpluad) },
    "DatePicker": (row, value, dateString) => { console.log('DatePicker', row, value, dateString) },
    "Input": (row, value) => { console.log('Input', value,) },
    "TextArea": (row, value) => { console.log('TextArea', value,) },

    "Select": (row, value) => { console.log('Select', value,) }
  }

  //ACTION'S DE LAS TABLAS
  const OnClickAction = (row, key, e, tipoUpluad) => {
    swicth[key](row, e, tipoUpluad)
  };

  //TABLA
  const [datasource, setDataSource] = useState([])
  const [columns, setColumns] = useState([])
  const [loading, setloading] = useState(false);
  const [tableProps, setTableProps] = useState([]);

  const ActualizaTabla = async () => {

    const response = await getAxiosLumen({
      uri: 'demo/data',
      setloading: setloading,
      msErrorApi: msErrorApi,
      keycloak: keycloak,
      notification: false,
      request: 'get',
      logoutOptions: logoutOptions

    })

    // console.log('getAxiosLumen-resp', response)

    setDataSource(response.data);
    setColumns(response.columns);
    setTableProps(response.props_table);
  }


  useEffect(() => {
    ActualizaTabla()
  }, [])


  //fin ejemplo TABLA

  //sumary
  const Sumary = (pageData) => {
    let total = 0;
    pageData.forEach(({ double }) => {
      total += Number(double);
    });
    return (
      <>
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={1}>Total   <Text type="danger">{"$" + separator(total.toFixed(2) + "")}</Text></Table.Summary.Cell>

            <Table.Summary.Cell index={2} />
            <Table.Summary.Cell index={3} />
            <Table.Summary.Cell index={4} />
            <Table.Summary.Cell index={5} />
            <Table.Summary.Cell index={6} />
            <Table.Summary.Cell index={7} />
            <Table.Summary.Cell index={8} />
            <Table.Summary.Cell index={9} />
            <Table.Summary.Cell index={10} />
            <Table.Summary.Cell index={11} />
            <Table.Summary.Cell index={12} />
            <Table.Summary.Cell index={13} />

          </Table.Summary.Row>
        </Table.Summary>
      </>
    );
  }

  // mensaje y notification SOLO PAR **MUI
  const [stateSnackbar, setStateSnackbar] = useState({
    open: false,
  })

  // mensaje y notification ANTD - MUI
  const calMN = (tipoComponent, libreria) => {

    const obliterioTiposMN = [
      {
        type: 'success',
        texto: 'texto',
        placement: 'topLeft',
      },
      {
        type: 'info',
        texto: 'texto',
        placement: 'topLeft',
      },
      {
        type: 'warning',
        texto: 'texto',
        placement: 'topRight',
      },
      {
        type: 'error',
        texto: 'texto',
        placement: 'topRight',
      },
      {
        type: 'warn',
        texto: 'texto',
        placement: 'bottomLeft',
      },
      {
        type: 'loading',
        texto: 'texto',
        placement: 'bottomLeft',
      },
      {
        type: 'open',
        texto: 'texto',
        placement: 'bottomRight',
      },
    ]

    obliterioTiposMN.map((Row, index) =>
      libreria === 'ANTD' ?
        NotificationMessageANTD({
          type: Row.type,
          texto: Row.texto,
          tipoComponent: tipoComponent,
          placement: Row.placement,
          timepo: index
        })
        :
        (index) === 1 &&
        setStateSnackbar({
          open: true,
          message: Row.texto,
          type: Row.type,
        })
    )
  }

  const AvatarActionEjemplo = (props) => {
    return (
      <>
        {props.tipo === "avatar" ?
          <AvatarMUI
            sx={{ bgcolor: red[500] }}
            arialabel="recipe"
            src={"https://joeschmoe.io/api/v1/random"} />
          :
          <IconButton aria-label="settings">
            <Icon
              icon={'fontisto:more-v-a'}
              style={{ fontSize: sizeIcon }}
            />
          </IconButton>
        }
      </>

    )
  }

  ///Formulario onFinish
  const onFinish = (values) => {
    console.log('Success:', values);
  };


  //DrawerAntd
  const [visible, setVisible] = useState(false)
  const showDrawer = () => { setVisible(true) }
  const onClose = () => { setVisible(false) }
  const ononChangeSwitch = (checked) => { console.log(`switch to ${checked}`); }

  return (

    <>
      <NotificationMessageMUI
        stateSnackbar={stateSnackbar}
        setStateSnackbar={setStateSnackbar}
      />

      <DrawerAntd title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </DrawerAntd>

      <ModdalMUI open={open1} closeModal={closeModal} title={"titulo del modal"} />
      <ModdalANTD visible={open2} onCancel={closeModal} title={"titulo del modal"} footer={false} />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: '98%', height: '100%', }, }}>
        <Grid container spacing={1}>

          <Grid item xs={12} >
            <Paper elevation={3} >
              <Typography variant="h5" component="div" gutterBottom>  Notification </Typography>
              <Grid container spacing={1}>

                <Grid item xs={3}>
                  <ButtonMUIE
                    fullWidth={true}
                    size={"small"}
                    text="Notificationes ANTD"
                    action={() => calMN('notification', 'ANTD')}
                  />
                </Grid>

                <Grid item xs={3}>
                  <ButtonMUIE
                    fullWidth={true}
                    size={"small"}
                    text="Message ANTD"
                    action={() => calMN('message', 'ANTD')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <ButtonMUIE
                    fullWidth={true}
                    size={"small"}
                    text="Notificationes MUI"
                    action={() => calMN('message', 'MUI')}
                  />
                </Grid>

              </Grid><br />
            </Paper>
          </Grid>

          <Grid item xs={12} >
            <Typography variant="h5" component="div" gutterBottom>  CardmUI </Typography>
            <Grid container spacing={1}>

              <Grid item >
                <CardMUI
                  width={300}
                  avatarCardHeader={<AvatarActionEjemplo tipo="avatar" />}
                  actionsCardHeader={<AvatarActionEjemplo tipo="actions" />}
                  title="Title CardMUI"
                  subheader={"subheader CardMUI"}

                  cardMediacomponent={"img"}
                  cardMediheight={"194"}
                  cardMediimage={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                  cardMedialt={"cardMedialt"}

                  cardActions={
                    <>
                      <IconButton aria-label="add to favorites">
                        <Icon
                          icon={'gis:poi-favorite'}
                          style={{ fontSize: sizeIcon }}
                        />
                      </IconButton>
                      <IconButton aria-label="share">
                        <Icon
                          icon={'ic:sharp-share'}
                          style={{ fontSize: sizeIcon }}
                        />
                      </IconButton>
                    </>
                  }
                >
                  <p>CardMUI content</p>
                  <p>CardMUI content</p>
                  <p>CardMUI content</p>
                </CardMUI>
              </Grid>

              <Grid item >
                <CardMUI
                  width={300}
                  cardMediacomponent={"img"}
                  cardMediheight={"194"}
                  cardMediimage={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                  cardMedialt={"cardMedialt"}

                  cardActions={
                    <>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </>
                  }
                >
                  <p>CardMUI content</p>
                  <p>CardMUI content</p>
                  <p>CardMUI content</p>
                </CardMUI>
              </Grid>

              <Grid item>
                <CardMUI
                  width={250}
                  avatarCardHeader={<AvatarActionEjemplo tipo="avatar" />}
                  title="Title CardMUI"
                  subheader={"subheader CardMUI"}
                  cardActions={
                    <>
                      <IconButton aria-label="add to favorites">
                        <Icon
                          icon={'gis:poi-favorite'}
                          style={{ fontSize: sizeIcon }}
                        />
                      </IconButton>
                      <IconButton aria-label="share">
                        <Icon
                          icon={'ic:sharp-share'}
                          style={{ fontSize: sizeIcon }}
                        />
                      </IconButton>
                    </>
                  }
                />
              </Grid>
              <Grid item>
                <CardMUI
                  width={250}
                  title="Title CardMUI"
                  subheader={"subheader CardMUI"}
                  actionsCardHeader={true}
                />
              </Grid>

            </Grid><br />
          </Grid>

          <Grid item xs={12} >
            <Typography variant="h5" component="div" gutterBottom>  CardAntd </Typography>
            <Grid container spacing={1}>
              <Grid item >
                <CardAntd
                  metaView={true}
                  titleMeta="Title CardAntdMeta"
                  descriptionMeta="This is the descriptionMeta"
                  avataSrcMeta="https://joeschmoe.io/api/v1/random"

                  width={300}
                  coverSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"

                  actions={true}
                />
              </Grid>

              <Grid item >
                <CardAntd

                  metaView={true}
                  titleMeta="Title CardAntdMeta"
                  descriptionMeta="This is the descriptionMeta"
                  avataSrcMeta="https://joeschmoe.io/api/v1/random"

                  width={300}
                  actions={true}
                />
              </Grid>
              <Grid item>
                <CardAntd
                  title="Title CardAntd"
                  width={300}
                  extra={true}
                >
                  <p>CardAntd content</p>
                  <p>CardAntd content</p>
                  <p>CardAntd content</p>
                </CardAntd>
              </Grid>

            </Grid><br />
          </Grid>

          <Grid item xs={12} >
            <Paper elevation={3} >
              <Typography variant="h5" component="div" gutterBottom>  Modales </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <ButtonMUIE
                    fullWidth={true}
                    size={"large"}
                    loading={open1}
                    colorTipe={primaryColor}
                    text="ModdalMUI Primary"
                    action={() => openModal(1)}
                  //startIcon={<Icon icon={gamepadVariantOutline} />}
                  //endIcon={<Icon icon={reactIcon} />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ButtonMUIS
                    fullWidth={true}
                    size={"small"}
                    loading={open2}
                    colorTipe={secondaryColor}
                    text="ModdalANTD Secondary"
                    action={() => openModal(2)}
                  //startIcon={<Icon icon={gamepadVariantOutline} />}
                  //endIcon={<Icon icon={reactIcon} />}
                  />
                </Grid>
              </Grid><br />
            </Paper>
          </Grid>

          <Grid item xs={12} >
            <Paper elevation={3} >
              <Typography variant="h5" component="div" gutterBottom>  Drawer </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <ButtonMUIE
                    fullWidth={true}
                    size={"large"}
                    loading={open1}
                    //colorTipe={primaryColor}
                    text="Drawer Primary"
                    action={() => showDrawer()}
                  //startIcon={<Icon icon={gamepadVariantOutline} />}
                  //endIcon={<Icon icon={reactIcon} />}
                  />
                </Grid>
              </Grid><br />
            </Paper>
          </Grid>

          <Grid item xs={12} >
            <Paper elevation={3} >
              <Typography variant="h5" component="div" gutterBottom>  Switch </Typography>
              <Grid container spacing={1}>

                <Grid item xs={3}>
                  <SwitchAntd
                    defaultChecked={true}
                    onChange={ononChangeSwitch}
                    checkedChildren={'0'}
                    unCheckedChildren={'1'}
                  />
                </Grid>
                <Grid item xs={3}>
                  <SwitchAntd
                    onChange={ononChangeSwitch}
                  />
                </Grid>
                <Grid item xs={3}>
                  <SwitchAntd
                    onChange={ononChangeSwitch}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={3}>
                  <SwitchAntd
                    onChange={ononChangeSwitch}
                    loading={true}
                    size="small"
                  />
                </Grid>

              </Grid><br />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} >
              <TablaANTD
                loading={loading}
                columnsTable={columns}
                datasource={datasource}

                pagination={tableProps.pagination}
                pageSize={tableProps.pageSize}
                simplepage={tableProps.simplepage}
                positionBottom={tableProps.positionBottom}
                positionTop={tableProps.positionTop}

                size={tableProps.size}
                bordered={tableProps.bordered}
                scrollX={tableProps.scrollX}
                scrollY={tableProps.scrollY}
                tableLayout={tableProps.tableLayout}

                Title={tableProps.Title}
                IconAvatar={tableProps.IconAvatar}

                OnClickAction={OnClickAction}
                ActualizaTabla={ActualizaTabla}

                ExportaExcel={true}

              //Sumary={Sumary}
              />
            </Paper>
          </Grid>

          {/* <Grid item xs={12}>
            <Paper elevation={3} >
              <Typography style={{ margin: '50px' }} variant="h5" component="div" gutterBottom>  Formulario </Typography>
              <Grid container spacing={1} style={{ margin: '50px' }}>
                <Grid item xs={6}>
                  <FormAntd
                    formItems={formItems}
                    onFinish={onFinish}
                  />
                </Grid>
              </Grid><br />
            </Paper>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default DemosComponents;
