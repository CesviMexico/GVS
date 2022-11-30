import React, { useContext, useState, useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";

//ANTD
import { Layout as AntLayout } from "antd";

//CONTEX
import ThemeContext from "../../context/ThemContext";
import UserContext from "../../context/UserContext";

//MUI
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";

//iconos
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-mdi/react";
import gamepadVariantOutline from "@iconify/icons-mdi/gamepad-variant-outline";
import exitRun from "@iconify/icons-mdi/exit-run";
import accountEdit from "@iconify/icons-mdi/account-edit";
import bellOutline from "@iconify/icons-mdi/bell-outline";

//componentes
import AvatarMUIIcon, { AvatarMUI } from "../Global/AvatarComponent";
import BadgeMUIImg from "../Global/BadgeComponent";
import { IconButtonMUI } from "../Global/ButtonComponent";

//COLOR mui
import { green, red, blue, yellow, grey } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";

const { Header } = AntLayout;

const HeaderComponent = () => {
  let navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const themeContext = useContext(ThemeContext);
  const {
    backgroundColor,
    setbackgroundColor,
    colorIcon,
    setColorIcon,
    setColorBadge,
    sizeIcon,
    setPrimaryColor,
    setSecondaryColor,
    setColorTable,
  } = themeContext;

  const userContext = useContext(UserContext);
  const { user, updateUser } = userContext;

  useEffect(() => {
    if (!!keycloak.authenticated) {
      // console.log('keycloak', keycloak)
      // console.log('tokenParsed', keycloak.tokenParsed)
      updateUser({
        idUser: keycloak.subject,
        name: keycloak.tokenParsed.name,
        age: 0,
        premium: true,
        email: keycloak.tokenParsed.email,
        rol: keycloak.tokenParsed.family_name,
      });
    }
  }, [keycloak]);

  //MENU DE USUARIOUS
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const swicthTipo = {
    Login: () => {
      keycloak.login(process.env.REACT_APP_logoutOption);
    },
    Salir: () => {
      keycloak.logout(process.env.REACT_APP_logoutOption);
    },
  };

  const handleSalir = (event, tipo) => {
    setAnchorEl(event.currentTarget);
    swicthTipo[tipo]();
  };

  const handleColors = (colorsMUI, componentTipo) => {
    console.log("componentTipo-->", componentTipo);
    switch (componentTipo) {
      case "Thema":
        setbackgroundColor(colorsMUI[500]);
        setColorIcon(colorsMUI[50]);
        setColorTable(colorsMUI[500]);

        break;

      case "Badge":
        setColorBadge(colorsMUI[500]);

        break;

      case "primaryColor":
        setPrimaryColor(colorsMUI);

        break;
      case "secondaryColor":
        setSecondaryColor(colorsMUI);

        break;

      default:
        break;
    }
  };

  const ArrayColorButtonMUI = [
    { colorA: green },
    { colorA: red },
    { colorA: blue },
    { colorA: yellow },
    { colorA: grey },
  ];

  const PaletaColores = (props) => {
    const { texto, ArrayColorButtonMUI, componentTipo } = props;

    return (
      <>
        <Typography variant="caption" display="block" gutterBottom>
          {texto}
        </Typography>
        {ArrayColorButtonMUI.map((row, i) => (
          <IconButtonMUI
            size="small"
            key={i}
            onclickIconButton={() => handleColors(row.colorA, componentTipo)}
          >
            <AvatarMUI
              key={i}
              alt={" "}
              src={" "}
              style={{ backgroundColor: row.colorA[500] }}
              sx={{ width: 24, height: 24 }}
            />
          </IconButtonMUI>
        ))}
      </>
    );
  };

  return (
    <Header
      className="site-layout-background"
      style={{
        textAlign: "center",
        background: backgroundColor,
      }}
    >
      <Typography
        variant="h6"
        color="white"
        style={{ top: 10, position: "relative" }}
      >
        Cotizador de daños ecologicos
      </Typography>

      <Box sx={{ position: "relative", float: "right", mt: -5 }}>
        <Tooltip title="Configuraciones de la cuenta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            style={{ right: -40 }}
          >
            <AvatarMUI
              alt="NameUser"
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            />
          </IconButton>
        </Tooltip>
        <IconButton
          onClick={() => navigate("/DemosComponents")}
          size="small"
          style={{ right: 60, backgroundColor: backgroundColor }}
        >
          <BadgeMUIImg
            sizeIcon={sizeIcon}
            icon={bellOutline}
            badgeContent={10}
            max={9999}
          />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            // '& .MuiAvatar-root': {
            //     width: 32,
            //     height: 32,
            //     ml: -0.5,
            //     mr: 1,
            // },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 17,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid align="center" sx={{ width: 280 }}>
            <Grid item>
              <AvatarMUIIcon
                iconHijo={accountEdit}
                sizeHijo={"38px"}
                altHijo={"Editar Perfil"}
                width={90}
                height={90}
                action={() => console.log("Editar Perfil")}
                src={
                  "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                }
              />
            </Grid>
            <Grid item>
              <Typography variant="h6" component="div" gutterBottom>
                {user.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {user.email}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {user.rol}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {user.idUser}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* <MenuItem>
                    <Avatar  sx={{ width: 56, height: 56 }} /> My account
                </MenuItem> */}
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Icon
              icon={reactIcon}
              style={{ fontSize: sizeIcon, color: backgroundColor }}
            />
          </ListItemIcon>

          <Typography variant="caption" display="block" gutterBottom>
            Menu 1
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Icon
              icon={gamepadVariantOutline}
              style={{ fontSize: sizeIcon, color: backgroundColor }}
            />
          </ListItemIcon>

          <Typography variant="caption" display="block" gutterBottom>
            Menu 2
          </Typography>
        </MenuItem>

        {!keycloak.authenticated && (
          <MenuItem onClick={(event) => handleSalir(event, "Login")}>
            <ListItemIcon>
              <Icon
                icon={exitRun}
                style={{ fontSize: sizeIcon, color: backgroundColor }}
              />
            </ListItemIcon>
            <Typography variant="caption" display="block" gutterBottom>
              {" "}
              Login {keycloak.authenticated}
            </Typography>
          </MenuItem>
        )}

        {!!keycloak.authenticated && (
          <MenuItem onClick={(event) => handleSalir(event, "Salir")}>
            <ListItemIcon>
              <Icon
                icon={exitRun}
                style={{ fontSize: sizeIcon, color: backgroundColor }}
              />
            </ListItemIcon>
            <Typography variant="caption" display="block" gutterBottom>
              {" "}
              Salir {keycloak.tokenParsed.preferred_username}
            </Typography>
          </MenuItem>
        )}
        <Divider />

        <Box sx={{ flexGrow: 1 }}>
          <Grid align="center" sx={{ width: 280 }}>
            <Grid item>
              <PaletaColores
                texto={"Color Thema"}
                ArrayColorButtonMUI={ArrayColorButtonMUI}
                componentTipo={"Thema"}
              />
            </Grid>

            <Grid item>
              <PaletaColores
                texto={"Color Badge"}
                ArrayColorButtonMUI={ArrayColorButtonMUI}
                componentTipo={"Badge"}
              />
            </Grid>

            <Grid item>
              <PaletaColores
                texto={"Color primaryColor"}
                ArrayColorButtonMUI={ArrayColorButtonMUI}
                componentTipo={"primaryColor"}
              />
            </Grid>
            <Grid item>
              <PaletaColores
                texto={"Color secondaryColor"}
                ArrayColorButtonMUI={ArrayColorButtonMUI}
                componentTipo={"secondaryColor"}
              />
            </Grid>

            <Grid item> </Grid>
          </Grid>
        </Box>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
