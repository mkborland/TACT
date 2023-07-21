// components
import ExerciseInfo from "./ExerciseInfoPg1"
import YourPlan from "./AircraftInfoPg2"
import PickAddOns from "./AirfareInfoPg3"
import FinishingUp from "./PlanningToolPg4"
import Thanks from "./PlanningToolPg5"
import StepInformations from "./StepInformations"

//styles
import '../../styles/PlanningTool.css'

// hooks
import { useState } from "react"
import { texts } from "../../hooks/texts"
import { useForm } from "../../hooks/useForm"
import { GetCurrentDate } from "../Util/DefinedListItem"

// --------- planning layout ------------
//pg 1 (ex Info) -> drop down with made ex's, user name and unit
//pg 2 (Aircraft) -> Amount of aircraft + personnel attached .... list or table
//pg 3 (airfair) -> api needs dates and location ---- steal for unit info
//pg 4 (lodging) -> perdiem api used with total personnel
//pg 5 (meals) -> ^^ above but if meals provided

// find where to join unit exercise db with used aircraft db for calculations


const unitExerciseTemplate = {
    exerciseID: "1", //set from drop down of High level exercise
    status: "0", // Not sure where this will be used
    dateCreated: GetCurrentDate(),
    locationFrom: "Phoenix, AZ", //to be used with api for airfair
    locationTo: "St Louis, IL",
    travelStartDate: "26 July 2023", //in airfair for api use
    travelEndDate: "27 July 2023",
    unit: "OL-2",       //exercise info (default to current user)
    userID: "1",    //pull from current user
    personnelSum: "0", //calculated from total aircraft
    unitCostSum: "0" //^^
}

function PlanningTool() {
    const [data, setData] = useState(unitExerciseTemplate)

    const { headerText, arrayInformationsStep } = texts()

    const updateFileHandler = (key, value) => {
        setData(prev => {
            return { ...prev, [key]: value.toUpperCase() }
        })
    }

    // get the pages of the steps
    const formComponents = [
        <ExerciseInfo data={data} updateFileHandler={updateFileHandler} />,
        <YourPlan data={data} updateFielHandler={updateFileHandler} />,
        <PickAddOns data={data} updateFielHandler={updateFileHandler} />,
        <FinishingUp data={data} />,
        <Thanks />
    ]

    const { currentStep, currentComponent, changeStep, isFarstStep} = useForm(formComponents, data)

    // to keep the 'Next Step' button in the same place
    const styleToActions = isFarstStep ? 'end' : 'space-between'
    const isThankyouStep = currentStep == formComponents.length - 1 ? 'center' : 'space-between'
    const displayOff = currentStep != formComponents.length - 1 ? 'flex' : 'none'

    // DeltaFox: This code was grabbed from this site: https://www.frontendmentor.io/solutions/multistep-form-isMXbZc7cy.  You can go there to see the intended functionality and original source code.
    return (
        <div>
            <main className="main-container">
                <aside>
                    <div className='step-background'>
                        <div className="step-bar">
                            {arrayInformationsStep.map(step => <StepInformations key={step.num} array={step} step={currentStep} />)}
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
                            {!isFarstStep && currentStep != formComponents.length - 1 ? (
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