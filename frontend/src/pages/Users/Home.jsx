import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemContext";
import { useKeycloak } from "@react-keycloak/web";

//components
import TablaANTD from "../../components/Global/TablaComponent";
import { ModdalANTD } from "../../components/Global/ModalComponent";
import FormAntd from "../../components/Global/FormComponent";
import DrawerAntd from "../../components/Global/DrawerComponent";

//servicios
import DataUser, { DeleteElement, UpdateElement, MenuPermissions, UpdatePermissions } from "./Services";

//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


//MIU/joy
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Sheet, { sheetClasses } from '@mui/joy/Sheet';
import Switch, { switchClasses } from '@mui/joy/Switch';

//ANTD
import { Form } from "antd";

//iconos 
import { Icon } from '@iconify/react';


const Home = () => {

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
  const [formItems, setFormItems] = useState([]);
  const [menuData, setMenuData] = useState([]);


  //modal action
  const [visible, setVisible] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);


  const [id_user, setId_user] = useState("");
  const [keycloak_id, setKeycloak_id] = useState("");


  //TABLA
  useEffect(() => { ActualizaTabla() }, []);

  const swicthComponentAction = {
    Eliminar: (row) => onEliminarRow(row),
    Editar: (row) => onEditarRow(row),
    Permisos: (row) => onPersmiosRow(row),
  };

  const ActualizaTabla = async () => {

    try {
      const response = await DataUser(
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
          setFormItems(response.formItems)
          // setMenuData(response.menu)

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
    swicthComponentAction[key](row);
  };

  const [form] = Form.useForm();
  const onEditarRow = (row) => {
    //console.log("onEditarRow", row)

    form.resetFields()
    form.setFieldsValue(row);

    setId_user(row.id_user)
    setVisible(true)

  };

  const onEliminarRow = async (row) => {
    //console.log("onEliminarRow", row)


    try {
      const response = await DeleteElement(
        setloading,
        msErrorApi,
        keycloak,
        logoutOptions,
        row.id_user

      )
      //console.log("response", response)

      switch (response.status) {
        case 403:
          setloading(false);
          break;

        case undefined:
          setloading(false);
          break;

        case 200:
          ActualizaTabla()
          break;

        default:
          break;
      }
    } catch (error) {
      setloading(false);
    }

  }

  const onFinish = async (value) => {
    //console.log("onFinish", value)
    setloading(true);
    try {
      const response = await UpdateElement(
        setloading,
        msErrorApi,
        keycloak,
        logoutOptions,
        id_user,
        value

      )
      //console.log("response", response)

      switch (response.status) {
        case 403:
          setloading(false);
          break;

        case undefined:
          setloading(false);
          break;

        case 200:
          ActualizaTabla()
          setVisible(false)
          setId_user("")
          form.resetFields()
          break;

        default:
          break;
      }
    } catch (error) {
      setloading(false);
    }

  };



  const onPersmiosRow = async (row) => {
    setId_user(row.id_user)
    setKeycloak_id(row.id_keycloak)


    try {
      const response = await MenuPermissions(
        setloading,
        msErrorApi,
        keycloak,
        logoutOptions,
        row.id_user

      )
      console.log("VerMenuPermissions", response)

      switch (response.status) {
        case 403:
          setloading(false);
          break;

        case undefined:
          setloading(false);
          break;

        case 200:

          setMenuData(response.menu)
          setVisibleDrawer(true)

          break;

        default:
          break;
      }
    } catch (error) {
      setloading(false);
    }

  }


  const [loadingChecked, setloadingChecked] = useState(false);
  const onChangeChecked = async (value, row) => {

    console.log("value", value)
    console.log("onEditarRow", row)


    let request = ""
    let uri = ""

    switch (value) {
      case true:
        request = 'post'
        uri = '/menu/permisos'

        break;
      case false:
        request = 'delete'
        uri = `/menu/permisos/${row.permission_id}`
        break;

      default:
        break;
    }



    try {
      const response = await UpdatePermissions(
        setloadingChecked,
        msErrorApi,
        keycloak,
        logoutOptions,
        uri,
        request,
        {
          keycloak_id: keycloak_id,
          menu_id: row.menu_id,
          user_id: id_user,
        }


      )
      console.log("onChangeChecked", response)

      switch (response.status) {
        case 403:
          setloadingChecked(false);
          break;

        case undefined:
          setloadingChecked(false);
          break;

        case 200:
          // onPersmiosRow(row)

          break;

        default:
          break;
      }
    } catch (error) {
      setloadingChecked(false);
    }

  };


  return (
    <>

      <ModdalANTD
        visible={visible}
        title={"Modificar Usuario"}
        footer={false}
        onCancel={() => setVisible(false)}
        width={"75%"}
        centered
      >
        <FormAntd
          loading={loading}
          formItems={formItems}
          form={form}
          onFinish={onFinish}
          titleSubmit={"Editar"}
          iconButton={"material-symbols:save-as-outline"}

        />
      </ModdalANTD>


      <DrawerAntd
        title={"Permisos del usuario"}
        onClose={() => setVisibleDrawer(false)}
        visible={visibleDrawer}
      >

        <StyledEngineProvider injectFirst>
          <CssVarsProvider>

            <List
              aria-labelledby="ios-example-demo"
              sx={(theme) => ({
                '& ul': {
                  '--List-gap': '0px',
                  bgcolor: 'background.surface',
                  '& > li:first-child > [role="button"]': {
                    borderTopRightRadius: 'var(--List-radius)',
                    borderTopLeftRadius: 'var(--List-radius)',
                  },
                  '& > li:last-child > [role="button"]': {
                    borderBottomRightRadius: 'var(--List-radius)',
                    borderBottomLeftRadius: 'var(--List-radius)',
                  },
                },
                '--List-radius': '8px',
                '--List-gap': '1rem',
                '--List-divider-gap': '0px',
                '--List-item-paddingY': '0.5rem',
                // override global variant tokens
                '--joy-palette-neutral-plainHoverBg': 'rgba(0 0 0 / 0.08)',
                '--joy-palette-neutral-plainActiveBg': 'rgba(0 0 0 / 0.12)',
                [theme.getColorSchemeSelector('light')]: {
                  '--joy-palette-divider': 'rgba(0 0 0 / 0.08)',
                },
                [theme.getColorSchemeSelector('dark')]: {
                  '--joy-palette-neutral-plainHoverBg': 'rgba(255 255 255 / 0.1)',
                  '--joy-palette-neutral-plainActiveBg': 'rgba(255 255 255 / 0.16)',
                },
              })}
            >

              <ListItem nested>
                <List
                  aria-label="Network"
                  sx={{
                    [`& .${sheetClasses.root}`]: {
                      p: 0.5,
                      lineHeight: 0,
                      borderRadius: 'sm',
                    },
                  }}
                >

                  {menuData.map((row) => (
                    <>
                      <ListItem>
                        <ListItemDecorator>
                          <Sheet variant="solid" style={{ background: backgroundColor }}>
                            <Icon icon={row.icon} style={{ fontSize: sizeIcon }} />
                          </Sheet>
                        </ListItemDecorator>
                        <ListItemContent htmlFor="airplane-mode" component="label">
                          {row.key}
                        </ListItemContent>
                        <Switch

                          defaultChecked={row.checked}
                          onChange={(event) => onChangeChecked(event.target.checked, row)}


                          id="airplane-mode"
                          size="lg"
                          color="success"
                          sx={(theme) => ({
                            '--Switch-thumb-shadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
                            '--Switch-thumb-size': '27px',
                            '--Switch-track-width': '51px',
                            '--Switch-track-height': '31px',
                            '--Switch-track-background': theme.vars.palette.background.level3,
                            [`& .${switchClasses.thumb}`]: {
                              transition: 'width 0.2s, left 0.2s',
                            },
                            '&:hover': {
                              '--Switch-track-background':
                                theme.vars.palette.background.level3,
                            },
                            '&:active': {
                              '--Switch-thumb-width': '32px',
                            },
                            [`&.${switchClasses.checked}`]: {
                              '--Switch-track-background': 'rgb(48 209 88)',
                              '&:hover': {
                                '--Switch-track-background': 'rgb(48 209 88)',
                              },
                            },
                          })}
                        />
                      </ListItem>
                      <ListDivider inset="startContent" />
                    </>
                  )
                  )}

                </List>
              </ListItem>


            </List>


          </CssVarsProvider>
        </StyledEngineProvider>

      </DrawerAntd>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': { m: 1, width: '96%', height: '100%', },
        }}>
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

export default Home;
