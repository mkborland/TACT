import React, { useContext, useEffect, useState } from "react";
import TactApi from "../api/TactApi.js";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [UserInfo, setUser] = useState({
    userName: "admin",
    access: "admin",
  });

  const tryLogin = async (userName, password) => {
    // Make a API request to see if this is a good account.
    await TactApi.getUser(`${userName}`, "").then(data => {
      if (data != "error" && data != undefined && data[0].userPass === password) {
        setUser({ userName: userName, access: data[0].roleName })
        return true
      } else {
        return false
      }
    })
  };

  const trySignUp = (userName, pass) => {
    //check if other inputs
    TactApi.addUser({ name: userName, pass: pass }).then((data) => {
      return data.status;
    });
    //save to db
    //return action was good
  };

  const errorMessage = (message) => { };

  const defaultExerciseObject = {
    id: "",
    userId: "",
    basicInfo: {
      exercise: "",
      unit: "",
      dateCreated: "",
      author: "",
    },
    overView: {
      startEx: "",
      endEx: "",
      startLocation: "",
      endLocation: "",
      totalPersonal: "",
      totalCost: 0,
    },
    airCraftInventory: {
      airCraftTotal: 0,
      airCraftPersonalTotal: 0,
      airCraftDetails: [
        {
          airCraftType: "KC-135",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
        {
          airCraftType: "C-130",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
        {
          airCraftType: "C-17",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
        {
          airCraftType: "C-5",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
        {
          airCraftType: "F-22",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
        {
          airCraftType: "F-35",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
        {
          airCraftType: "A-10",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
        {
          airCraftType: "F-15c",
          airCraftAmount: "",
          airCraftPersonal: "",
        },
      ],
    },
    perDiem: {
      total: 0,
      mAndIE: {
        total: "",
        providedAmount: "",
        ratePer: "",
        incidentalExpenses: "",
      },
      lodging: {
        total: 0,
        govLodgingInfo: {
          Type: "Government Lodging",
          RatePerOccupancy: "",
          Occupancy: "",
          total: "",
        },
        comLodgingInfo: {
          type: "Commercial Lodging",
          ratePerOccupancy: "",
          occupancy: "",
          total: "",
        },
        fieLodgingInfo: {
          type: "Field Conditions",
          ratePerOccupancy: "",
          occupancy: "",
          total: "",
        },
      },
      airFare: {
        total: 0,
        comAirFare: {
          total: "",
          occupancy: "",
          rate: "",
        },
        govAirFare: {
          total: "",
          occupancy: "",
          rate: "",
        },
      },
    },
  };

  const [newExerciseObject, setNewExerciseObject] = useState({
    id: "",
    userId: "1",
    basicInfo: {
      exercise: "Exercise Name",
      unit: "375 CPST",
      dateCreated: Date.now,
      author: "admin",
    },
    overView: {
      startEx: "2022-05-15",
      endEx: "0",
      startLocation: "Tucsan, AZ",
      endLocation: "0",
      totalPersonal: "0",
      totalCost: 0,
    },
    airCraftInventory: {
      airCraftTotal: 0,
      airCraftPersonalTotal: 0,
      airCraftDetails: [
        {
          airCraftType: "KC-135",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
        {
          airCraftType: "C-130",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
        {
          airCraftType: "C-17",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
        {
          airCraftType: "C-5",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
        {
          airCraftType: "F-22",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
        {
          airCraftType: "F-35",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
        {
          airCraftType: "A-10",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
        {
          airCraftType: "F-15c",
          airCraftAmount: "0",
          airCraftPersonal: "0",
        },
      ],
    },
    perDiem: {
      total: 0,
      mAndIE: {
        total: "0",
        providedAmount: "0",
        ratePer: "0",
        incidentalExpenses: "0",
      },
      lodging: {
        total: 0,
        govLodgingInfo: {
          type: "Government Lodging",
          ratePerOccupancy: "0",
          occupancy: "0",
          total: "0",
        },
        comLodgingInfo: {
          type: "Commercial Lodging",
          ratePerOccupancy: "0",
          occupancy: "0",
          total: "0",
        },
        fieLodgingInfo: {
          type: "Field Conditions",
          ratePerOccupancy: "0",
          occupancy: "0",
          total: "0",
        },
      },
      airFare: {
        total: 0,
        comAirFare: {
          total: "0",
          occupancy: "0",
          rate: "0",
        },
        govAirFare: {
          total: "0",
          occupancy: "0",
          rate: "0",
        },
      },
    },
  });

  return (
    <AppContext.Provider
      value={{
        UserInfo,
        tryLogin,
        trySignUp,
        setNewExerciseObject,
        newExerciseObject,
        defaultExerciseObject,
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
