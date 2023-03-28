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


import { firebaseConfig } from "../Global/firebase"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, onSnapshot, } from 'firebase/firestore';


const { Header } = AntLayout;

const HeaderComponent = () => {
  let navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const themeContext = useContext(ThemeContext);
  const { backgroundColor, sizeIcon, } = themeContext;
  const userContext = useContext(UserContext);
  const { user } = userContext;

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


  const [Total_Data, setTotal_Data] = useState(0);
  useEffect(() => {

    const q = query(collection(db, "usuarios"));
    const unsuscribe = onSnapshot(q, (snapshot) => {
      setTotal_Data(0)
      let total = 0
      snapshot.docChanges().forEach((change) => {

        // if (change.type === "added") {
        //   const final = { ...change.doc.data() }
        //   // //console.log('final', final.solicitado)
        //   total = total + final.solicitado
        //   setTotal_Data(total)

        // }

        // if (change.type === "modified") {
          const final = { ...change.doc.data() }
          total = total + final.solicitado
          setTotal_Data(total)
        // }

      });
      // //console.log('viewListMessage', Total_Data)    
    });

    return () => {
      unsuscribe();
    }
  }, []);


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
        Gestor de valuación en sitio
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
            // src={user.path_avatar}
            />
          </IconButton>
        </Tooltip>

        <IconButton
          onClick={() => navigate("/Valuacion/Espera")}
          size="small"
          style={{ right: 60, backgroundColor: backgroundColor }}
        >
          <BadgeMUIImg
            sizeIcon={sizeIcon}
            icon={bellOutline}
            badgeContent={Total_Data}
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
                // action={() => //console.log("Editar Perfil")}
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
                {user.zona}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* <MenuItem>
                    <Avatar  sx={{ width: 56, height: 56 }} /> My account
                </MenuItem> */}
        <Divider />

        {/* <MenuItem>
          <ListItemIcon>
            <Icon
              icon={reactIcon}
              style={{ fontSize: sizeIcon, color: backgroundColor }}
            />
          </ListItemIcon>

          <Typography variant="caption" display="block" gutterBottom>
            Menu 1
          </Typography>
        </MenuItem> */}

        {/* <MenuItem>
          <ListItemIcon>
            <Icon
              icon={gamepadVariantOutline}
              style={{ fontSize: sizeIcon, color: backgroundColor }}
            />
          </ListItemIcon>

          <Typography variant="caption" display="block" gutterBottom>
            Menu 2
          </Typography>
        </MenuItem> */}

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

      </Menu>
    </Header>
  );
};

export default HeaderComponent;
