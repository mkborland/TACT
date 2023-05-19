import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TactApi from "../api/TactApi";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [UserInfo, setUser] = useState({
    userName: "bob",
    access: "admin",
  });

  const tryLogin = (userName, password) => {
    // Make a API request to see if this is a good account.
    TactApi.getUser({name:userName}).then(data => {
      if(data != "error" && data != undefined){
      setUser({userName: data.userName , access: "admin" })
      }
    })
    // YES
    // Get User INFO
    // setUser(To the return of the server side object)
    // return that actions was good
  };

  const trySignUp = (userName, pass) => {
    //check if other inputs
      TactApi.addUser({name:userName,pass:pass}).then( data => {
          return data.status
      }
      )
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
    userId: "",
    basicInfo: {
      exercise: "",
      unit: "",
      dateCreated: "",
      author: "",
    },
    overView: {
      startEx: "2022-05-15",
      endEx: "",
      startLocation: "Tucsan, AZ",
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
        providedAmount: "2",
        ratePer: "",
        incidentalExpenses: "0",
      },
      lodging: {
        total: 0,
        govLodgingInfo: {
          type: "Government Lodging",
          ratePerOccupancy: "0",
          occupancy: "",
          total: "0",
        },
        comLodgingInfo: {
          type: "Commercial Lodging",
          ratePerOccupancy: "",
          occupancy: "",
          total: "",
        },
        fieLodgingInfo: {
          type: "Field Conditions",
          ratePerOccupancy: "0",
          occupancy: "",
          total: "0",
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
