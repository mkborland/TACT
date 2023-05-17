const config = {
  development: {
    apiUrl: "http://localhost:8080/api",
  },
  test: {
    apiUrl: "",
  },
  production: {
    apiUrl: "https://api.smartsheets.app/api",
  },
};

export const baseApiUrl =
  config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
