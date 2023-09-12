import Keycloak from "keycloak-js";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TactApi from "../../api/TactApi";

export default function PrivateRoute(props) {
  const { setUser } = props;
  const [keycloak, setKeycloak] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const hasRun = useRef(false);
  const navigate = useNavigate();

  const updateUser = async (email) => {
    if (email) {
      await TactApi.getUser(email).then((newUser) => setUser(newUser));
    }
  };

  useEffect(() => {
    // The IF stmt fixes the infinite page-loading loop caused by the React double-load in Dev mode.
    if (hasRun.current) return;

    hasRun.current = true;

    const key = new Keycloak({
      realm: "TACT",
      url: "http://localhost:8180/",
      clientId: "TACT-app",
    });

    const initKeycloak = async () => {
      key
        .init({
          onLoad: "login-required",
          checkLoginIframe: false,
        })
        .then(function (authenticated) {
          setKeycloak(key); // <-- uncommenting this line does a redirect loop
          setAuthenticated(key.authenticated);
          updateUser(key.tokenParsed.email);
          alert(authenticated ? "authenticated" : "not authenticated");
          setIsLoading(false);
          return navigate("/Dashboard");
        })
        .catch(function (e) {
          console.log("Failed to initialize keycloak", e);
          setIsLoading(false);
        });
      setIsLoading(false);
    };

    if (isLoading) {
      initKeycloak();
    }
  }, [isLoading]);
}
