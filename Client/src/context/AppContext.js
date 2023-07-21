import React, { useContext, useEffect, useState } from "react";
import TactApi from "../api/TactApi.js";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [UserInfo, setUser] = useState({
    userName: "admin",
    access: "admin",
  });

  //TODO fix Login stuff
  const tryLogin = async (userName, password) => {
    // Make a API request to see if this is a good account.
    // await TactApi.getUser(`${userName}`, "").then((data) => {
    //   if (
    //     data != "error" &&
    //     data != undefined &&
    //     data[0].userPass === password
    //   ) {
    //     setUser({ userName: userName, access: data[0].roleName });
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    return true
  };

  const trySignUp = (userName, pass) => {
    //check if other inputs
    // TactApi.addUser({ name: userName, pass: pass }).then((data) => {
    //   return data.status;
    // });
    //save to db
    //return action was good
  };

  const errorMessage = (message) => {};

  const [newExerciseObject, setNewExerciseObject] = useState({
    exerciseID: "",
    exerciseName: "test",
    status: "false",
    dateCreated: "20 July 2023",
    location: "Tucson, AZ",
    exerciseStartDate: "21 July 2023",
    exerciseEndDate: "22 July 2023",
    userID: "1",
    personnelSum: "1",
    costSum: "3000"
  });

  const [newUnitExerciseObject, setNewUnitExerciseObject] = useState({
    unitExerciseID: "",
    exerciseID: "1",
    status: "false",
    dateCreated: "20 July 2023",
    locationFrom: "Scott AFB, IL",
    locationTo: "Tucson, AZ",
    travelStartDate: "21 July 2023",
    travelEndDate: "22 July 2023",
    unit: "OL-2",
    userID: "1",
    personnelSum: "1",
    costSum: "3000"
  });

  const [newExerciseAircraftObject, setNewExerciseAircraftObject] = useState({
    unitExerciseID: "1",
    aircraftType: "F-22",
    aircraftCount: "2",
    personnelCount: "2",
    commercialAircraftCount: "2",
    commercialAircraftCost: "400",
    governmentAircraftCount: "0",
    commercialLodgingCount: "2",
    commercialLodgingCost: "500",
    governmentLodgingCount: "0",
    governmentLodgingCost: "0",
    fieldLodgingCount: "0",
    lodgingPerDiem: "600",
    mealPerDiem: "300",
    mealProvidedCount: "0",
    mealNotProvidedCount: "2"
  });
  return (
    <AppContext.Provider
      value={{
        UserInfo,
        tryLogin,
        trySignUp,
        setNewExerciseObject,
        newExerciseObject,
        setNewUnitExerciseObject,
        newUnitExerciseObject,
        setNewExerciseAircraftObject,
        newExerciseAircraftObject
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
