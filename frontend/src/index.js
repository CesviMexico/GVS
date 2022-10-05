import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { ThemeProvider } from './context/ThemContext';
import { UserProvider } from './context/UserContext'
import CrudAction from './context/crud/crudAction';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./components/Global/Keycloak"

ReactDOM.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <ThemeProvider>
      <CrudAction>
        <UserProvider>
          <Router />
        </UserProvider>
      </CrudAction>
    </ThemeProvider>
  </ReactKeycloakProvider>,
  document.getElementById('root')
);

