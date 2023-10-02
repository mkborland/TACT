// components
import ExerciseInfo from "./ExerciseInfoPg1";
import YourPlan from "./AircraftInfoPg2";
import PickAddOns from "./AirfareInfoPg3";
import Lodging from "./PlanningToolPg4";
import Thanks from "./PlanningToolPg5";
import StepInformations from "./StepInformations";

//styles
import "../../styles/PlanningTool.css";

// hooks
import { useEffect, useState } from "react";
import { texts } from "../../hooks/texts";
import { useForm } from "../../hooks/useForm";
import TactApi from "../../api/TactApi";

// --------- planning layout ------------
//pg 1 (ex Info) -> drop down with made ex's, user name and unit
//pg 2 (Aircraft) -> Amount of aircraft + personnel attached .... list or table
//pg 3 (airfair) -> api needs dates and location ---- steal for unit info
//pg 4 (lodging) -> perdiem api used with total personnel
//pg 5 (meals) -> ^^ above but if meals provided

// find where to join unit exercise db with used aircraft db for calculations

const unitExerciseTemplate = {
  unitExerciseID: undefined,
  exerciseID: undefined, //set from drop down of High level exercise
  status: false, // Should be an enum = 'Draft' | "Complete"
  dateCreated: new Date(),
  locationFrom: undefined, //to be used with api for airfair
  locationTo: undefined,
  travelStartDate: undefined, //should start with the exercise dates, but user modifiable
  travelEndDate: undefined,
  unit: undefined, //exercise info (default to current user)
  userID: -1, //pull from current user
  personnelSum: 0, //calculated from total aircraft
  unitCostSum: 0, //^^
};

const unitAircraftTemplate = {
  unitExerciseID: undefined,
  aircraftType: undefined,
  aircraftCount: 0,
  personnelCount: 0,
  commercialAirfareCost: 0,
  commercialAirfareCount: 0,
  commercialLodgingCount: 0,
  commercialLodgingCost: 0,
  governmentAirfareCount: 0,
  governmentLodgingCount: 0,
  governmentLodgingCost: 0,
  fieldLodgingCount: 0,
  mealProvidedCount: 0,
  mealNotProvidedCount: 0,
  lodgingPerDiem: 0,
  mealPerDiem: 0,
  rentalCount: 0,
  rentalCost: 0,
};

function PlanningTool(props) {
  const { user } = props;
  const [userInfo, setUserInfo] = useState();
  const [exercises, setExercises] = useState();
  const [data, setData] = useState(unitExerciseTemplate);
  const [aircraftData, setAircraftData] = useState([unitAircraftTemplate]);
  const [saved, setSaved] = useState({
    saved: false,
    alert: "Nothing Selected",
  });
  const [airframeList, setAirframeList] = useState([]);

  useEffect(() => {
    const fetchInitialInfo = async () => {
      const response1 = await TactApi.getAllExercises();
      setExercises(response1);
      const response2 = await TactApi.getAllAircraft();
      setAirframeList(response2);
    };
    fetchInitialInfo();
  }, []);

  useEffect(() => {
    setUserInfo(user);
    console.log("user in planning tool", user);
  }, [user]);

  useEffect(() => {
    console.log("useEffect aircraft data", aircraftData);
  }, [aircraftData]);

  useEffect(() => {
    console.log("useEffect data", data);
  }, [data]);

  //creates new mission in the DB with 'newMission' as the data obj
  const createUnitExercise = async (newMission) => {
    setSaved({ saved: true });
    return await TactApi.saveUnitExercise(newMission).then((response) => {
      setData(response);
      return response;
    });
  };

  const createUnitExerciseAircraft = (id) => {
    const result = unitAircraftTemplate;
    result.unitExerciseID = id;
    setAircraftData([result]);
  };

  const updateUnitExercise = async () => {
    await TactApi.updateUnitExercise(data)
      .then((response) => {
        setData(response);
        setSaved({ saved: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { arrayInformationsStep } = texts();

  const findExistingDates = (input) => {
    //process the input to determine if there are already dates in obj
    //if not, need to add the pre-existing dates from the exercise
    const update = input;
    const temp = exercises.find((exercise) => {
      return exercise.exerciseID === input.exerciseID;
    });
    update.travelStartDate = new Date(temp.exerciseStartDate);
    update.travelEndDate = new Date(temp.exerciseEndDate);
    return update;
  };

  const processNewUnitEx = (input) => {
    const temp = unitExerciseTemplate;
    temp.exerciseID = input.exerciseID;
    temp.unit = userInfo.unit;
    temp.userID = userInfo.userID;
    const newData = findExistingDates(temp);
    createUnitExercise(newData).then((result) =>
      createUnitExerciseAircraft(result.unitExerciseID)
    );
  };

  const processOldUnitEx = (input) => {
    setData(input);
    setSaved({ saved: true });
    TactApi.getUnitExerciseAircraftById(input.unitExerciseID).then(
      (response) => {
        if (response && response.length > 0) {
          setAircraftData(response);
        } else {
          createUnitExerciseAircraft(input.unitExerciseID);
        }
      }
    );
  };

  const updateFileHandler = (update) => {
    if (Object.keys(update).includes("exerciseID")) {
      //validate if there is an existing mission with that exId
      //if yes, then update the current 'data' with the db data
      //if no, then create a newmission
      try {
        TactApi.getUnitExerciseByUnit({
          exerciseID: update.exerciseID,
          unit: user.unit,
        }).then((response) => {
          if (response?.exerciseID === update.exerciseID) {
            processOldUnitEx(response);
          } else {
            processNewUnitEx(update);
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      setSaved({ saved: false, alert: "Saving Inputs" });
      const temp = data;
      Object.keys(update).forEach((obj) => {
        temp[obj] = update[obj];
      });
      setData(temp);
      if (data.unitExerciseID) {
        updateUnitExercise();
      } else {
        setSaved({ saved: false, alert: "Must Select an Exercise" });
      }
    }
  };

  const updateUnitExerciseAircraft = async (_input) => {
    await TactApi.getUnitExerciseAircraftById(
      aircraftData[0]?.unitExerciseID
    ).then((result) => {
      if (result.length > 0) {
        TactApi.updateExerciseAircraft(aircraftData[0]);
      } else {
        TactApi.addExerciseAircraft(aircraftData[0]);
      }
    });
  };

  // get the pages of the steps
  //TODO set up the setSave on each of the pages
  const formComponents = [
    <ExerciseInfo
      data={data}
      updateFileHandler={updateFileHandler}
      setSaved={setSaved}
      aircraftData={aircraftData}
      setAircraftData={setAircraftData}
      exercises={exercises}
    />,
    <YourPlan
      data={data}
      updateFileHandler={updateFileHandler}
      setSaved={setSaved}
      aircraftData={aircraftData}
      setAircraftData={setAircraftData}
      airframeList={airframeList}
      updateUnitExerciseAircraft={updateUnitExerciseAircraft}
    />,
    <PickAddOns
      data={data}
      updateFileHandler={updateFileHandler}
      setSaved={setSaved}
      aircraftData={aircraftData}
      setAircraftData={setAircraftData}
      updateUnitExerciseAircraft={updateUnitExerciseAircraft}
    />,
    <Lodging
      data={data}
      updateFileHandler={updateFileHandler}
      setSaved={setSaved}
      aircraftData={aircraftData}
      setAircraftData={setAircraftData}
      updateUnitExerciseAircraft={updateUnitExerciseAircraft}
    />,
    <Thanks />,
  ];

  const { currentStep, currentComponent, changeStep, isFarstStep } = useForm(
    formComponents,
    data,
    saved
  );

  // to keep the 'Next Step' button in the same place
  const styleToActions = isFarstStep ? "end" : "space-between";
  const isThankyouStep =
    currentStep === formComponents.length - 1 ? "center" : "space-between";
  const displayOff =
    currentStep !== formComponents.length - 1 ? "flex" : "none";
  const lastNumber = formComponents.length + 1;

  // DeltaFox: This code was grabbed from this site: https://www.frontendmentor.io/solutions/multistep-form-isMXbZc7cy.  You can go there to see the intended functionality and original source code.
  return (
    <div>
      <main className="main-container">
        <aside>
          <div className="step-background">
            <div className="step-bar">
              {arrayInformationsStep.map((step) => (
                <StepInformations
                  key={step.num}
                  array={step}
                  step={currentStep}
                  lastNumber={lastNumber}
                />
              ))}
            </div>
          </div>
        </aside>

        <div className="header-and-form-container">
          {/* <div className="header-container">
                        <h1>
                            {currentStep + 1 >= formComponents.length ? null : headerText[currentStep].h1}
                        </h1>

                        <p>
                            {currentStep + 1 >= formComponents.length ? null : headerText[currentStep].p}
                        </p>
                    </div> */}
          <form
            onSubmit={(e) => changeStep(currentStep + 1, e)}
            className="form"
            style={{ justifyContent: isThankyouStep }}
          >
            <div className="inputs-container">{currentComponent}</div>
            <div
              className="actions"
              style={{ justifyContent: styleToActions, display: displayOff }}
            >
              {!isFarstStep && currentStep !== formComponents.length - 1 ? (
                <button
                  type="button"
                  className="btn-go-back"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <span>Go Back</span>
                </button>
              ) : (
                ""
              )}

              {currentStep < formComponents.length - 2 ? (
                <button type="submit" className="btn-next-step">
                  <span>Next Step</span>
                </button>
              ) : (
                <button type="submit" className="btn-confirm">
                  <span>Confirm</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </main>

      {/* <footer>
                <p className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="#">Your Name Here</a>.
                </p>
            </footer> */}
      <div className="bottom-space"></div>
    </div>
  );
}

export { PlanningTool, unitAircraftTemplate };
