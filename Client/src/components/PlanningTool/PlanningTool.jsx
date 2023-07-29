// components
import ExerciseInfo from "./ExerciseInfoPg1"
import YourPlan from "./AircraftInfoPg2"
import PickAddOns from "./AirfareInfoPg3"
import Lodging from "./PlanningToolPg4"
import Thanks from "./PlanningToolPg5"
import StepInformations from "./StepInformations"

//styles
import '../../styles/PlanningTool.css'

// hooks
import { useEffect, useRef, useState } from "react"
import { texts } from "../../hooks/texts"
import { useForm } from "../../hooks/useForm"
import TactApi from "../../api/TactApi"

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
    travelStartDate: new Date(), //should start with the exercise dates, but user modifiable
    travelEndDate: new Date(),
    unit: "test18",       //exercise info (default to current user)
    userID: "1",    //pull from current user
    personnelSum: 0, //calculated from total aircraft
    unitCostSum: 0 //^^
}

// function usePreviousId(value) {
//     console.log('value in usePreviousId', value)
//     const ref = useRef();
//     useEffect(() => {
//         ref.previous = ref.current;
//         ref.current = value.unitExerciseID;
//     }, [value]);
//     console.log('refs', ref.previous, ref.current, ref)
//     return ref.current;
// }

function PlanningTool() {
    const [data, setData] = useState(unitExerciseTemplate);
    const [userInfo, setUserInfo] = useState();
    const [saved, setSaved] = useState(false);
    // const previousId = usePreviousId(data);

    console.log('saved in planning tool', saved)

    useEffect(() => {
        fetchUserInfo();
    }, []);

    useEffect(() => {
        console.log('useEffect data', data);
    }, [data]);

    useEffect(() => {
        if (saved) updateUnitExercise(data);
    }, [saved, data])

    //when data state is updated, write to DB
    // useEffect(() => {
    //     console.log('data in useEffect', data, previousId);


    //     if (data.unitExerciseID && previousId === data.unitExerciseID) {
    //         console.log('id and previousId', data.unitExerciseID, previousId)
    //         updateUnitExercise(data);
    //         const test = getCurrentExercise('3');
    //         console.log('test', test)
    //     }
    //     else if (!data.unitExerciseID && data.exerciseID) {
    //         console.log('in the else if')
    //         createUnitExercise(data);
    //     }
    // }, [data]);


    //creates new mission in the DB with 'newMission' as the data obj 
    const createUnitExercise = async (newMission) => {
        const response = await TactApi.saveUnitExercise(newMission);
        // const response = await TactApi.saveUnitExercise(newMission).then((res) => {return res.json()});
        setData(response)
        return response;
    }

    const updateUnitExercise = async (changedMission) => {
        await TactApi.updateUnitExercise(changedMission)
            .then((res) => {
                console.log('response in update', res)
                return res.text()
            })
            .then((result) => {
                console.log('this is what the new data should be', result)
                // setData(result)
            })
            .catch((err) => {console.log(err)});       
    }

    // const getCurrentExercise = async (currentExerciseId) => {
    //     const result = await TactApi.getUnitExercise(currentExerciseId)
    //             .catch((err) => {console.log(err)});
    //     return result;
    // };

    // const getCurrentExerciseByUnit = async (currentExerciseId) => {
    //     const req = {
    //         exerciseID: currentExerciseId,
    //         unit: data.unit
    //     }
    //     const result = await TactApi.getUnitExerciseByUnit(req)
    //             .catch((err) => {console.log(err)});
    //     return result;
    // };

    const fetchUserInfo = async () => {
        const response = await TactApi.getUser("admin@gmail.com");
        setUserInfo(response)
    }

    const { arrayInformationsStep } = texts()

    // const validateCurrentMission = async (idValue) => {
    //     const body = {
    //         exerciseID: idValue,
    //         unit: data.unit
    //     }
    //     const response = await TactApi.getUnitExerciseByUnit(body)
    //         .then((res) => {return res});
    //     console.log('validate mission', response)
    //     return response;
    // }

    const updateFileHandler = (key, value) => {
        if (key === 'exerciseID') {
            //validate if there is an existing mission with that exId
            //if yes, then update the current 'data' with the db data
            //if no, then create a newmission
            const temp = data;
            temp.exerciseID = value;
            createUnitExercise(temp);
        } else {
            setData({...data, [key]: value })
        }
    }


    // get the pages of the steps
    //TODO set up the setSave on each of the pages
    const formComponents = [
        <ExerciseInfo data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
        <YourPlan data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
        <PickAddOns data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
        <Lodging data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
        <Thanks />
    ]

    const { currentStep, currentComponent, changeStep, isFarstStep} = useForm(formComponents, data, saved)

    // to keep the 'Next Step' button in the same place
    const styleToActions = isFarstStep ? 'end' : 'space-between'
    const isThankyouStep = currentStep === formComponents.length - 1 ? 'center' : 'space-between'
    const displayOff = currentStep !== formComponents.length - 1 ? 'flex' : 'none'
    const lastNumber = formComponents.length + 1;

    // DeltaFox: This code was grabbed from this site: https://www.frontendmentor.io/solutions/multistep-form-isMXbZc7cy.  You can go there to see the intended functionality and original source code.
    return  (
        <div>
            <main className="main-container">
                <aside>
                    <div className='step-background'>
                        <div className="step-bar">
                            {arrayInformationsStep.map(step => 
                                <StepInformations 
                                    key={step.num}
                                    array={step}
                                    step={currentStep} 
                                    lastNumber={lastNumber}
                                />
                            )}
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
                    <form onSubmit={(e) => changeStep(currentStep + 1, e)} className='form' style={{ justifyContent: isThankyouStep }}>
                        <div className="inputs-container">{currentComponent}</div>
                        <div className="actions" style={{ justifyContent: styleToActions, display: displayOff }}>
                            {!isFarstStep && currentStep !== formComponents.length - 1 ? (
                                <button
                                    type="button"
                                    className="btn-go-back"
                                    onClick={() => changeStep(currentStep - 1)}
                                >
                                    <span>Go Back</span>
                                </button>
                            ) : ''}

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
    )
}

export default PlanningTool