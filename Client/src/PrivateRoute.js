import Keycloak from 'keycloak-js';
import React, { Component, useEffect, useState, useRef } from 'react';
import DashboardPage from "./pages/DashboardPage";
import { useNavigate } from 'react-router-dom';
export default function PrivateRoute() {

  const [keycloak, setKeycloak] = React.useState("");
  const [authenticated, setAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const hasRun = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {

    // The IF stmt fixes the infinite page-loading loop caused by the React double-load in Dev mode.
    if (hasRun.current) return;

    hasRun.current = true;

    const key = new Keycloak({
      "realm": "TACT",
      "url": "http://localhost:8180/",
      "clientId": "TACT-app",
    });

    const initKeycloak = async () => {
      key
        .init({
          onLoad: 'login-required',
          checkLoginIframe: false,
        })
        .then(function (authenticated) {
          setKeycloak(key); // <-- uncommenting this line does a redirect loop
          setAuthenticated(key.authenticated);
          alert(authenticated ? 'authenticated' : 'not authenticated');
          setIsLoading(false);
          return navigate('/Dashboard');
        })
        .catch(function (e) {
          console.log('Failed to initialize keycloak', e);
          setIsLoading(false);
        })
      ;
      setIsLoading(false);
    };

    if (isLoading) {
      initKeycloak();
    }
  }, [isLoading]);
};