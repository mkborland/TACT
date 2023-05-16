import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [UserInfo, setUser] = useState({});

  const tryLogin = (userName, password) => {
    // Make a API request to see if this is a good account.
    // YES
    // Get User INFO
    // setUser(To the return of the server side object)
    // return that actions was good
  };

  const trySignUp = (userName, pass) => {
    //check if other inputs
    //save to db
    //return action was good
  };

  const errorMessage = (message) => {};

  return (
    <AppContext.Provider value={{ UserInfo, tryLogin, trySignUp }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
