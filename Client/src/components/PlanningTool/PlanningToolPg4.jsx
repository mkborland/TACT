// hooks
// import { texts } from "../../hooks/texts"
import * as React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import { baseApiUrl, TactApi } from "../../api/TactApi.js";
import TactApi from "../../api/TactApi"
// import { useNavigate } from "react-router-dom";

//styles
import '../../styles/PlanningToolPg4.css'

const Lodging = ({data, updateFileHandler}) => {
    //Initialization
    const baseApiUrl = "http://localhost:8080/api";

    // const date = data.travelStartDate;
    const location = data.locationTo;
    const totalPeopleObj = data.personnelSum;
    const year = "2022"
    // date.slice(0, 4);
    const month = "07"
    // date.slice(5, 7);
    const city = location.split(",")[0];
    const state = location.split(",")[1].trim();
    // const nav = useNavigate();
    //Inputs
    const [numGovLodge, setNumGovLodge] = useState(0);
    const [numComLodge, setNumComLodge] = useState(0);
    const [numFieldCon, setNumFieldCon] = useState(0);
    const [numMealsProv, setnumMealsProv] = useState(0);
    // const [nameExercise, setNameExercise] = useState("New Exercise");
    //Calcs
    // if (isNaN(parseInt(numGovLodge))) {
    //   setNumGovLodge(0);
    // }
    // if (isNaN(parseInt(numComLodge))) {
    //   setNumComLodge(0);
    // }
    // if (isNaN(parseInt(numFieldCon))) {
    //   setNumFieldCon(0);
    // }
    // if (isNaN(parseInt(numMealsProv))) {
    //   setnumMealsProv(0);
    // }
  
    const buttonTing = async () => {
      const endPoint = "/get_rates";
      const params = `?year=${year}&city=${city}&state=${state}`;
      const response = await fetch(`${baseApiUrl}${endPoint}${params}`, {
        method: "GET",
      });
  
      if (!response.ok) {
      } else {
        const result = await response.json();
        return result;
      }
    };
  
    const card = (
      <React.Fragment>
        <CardContent>
          <TextField
            disabled
            id="numPeopleTotal"
            label="Total People"
            variant="outlined"
            margin="normal"
            defaultValue={totalPeopleObj}
          />
          <br />
          <TextField
            id="numGovLodge"
            label="Government Lodging"
            variant="outlined"
            margin="normal"
            type="number"
            onChange={(e) => {
              setNumGovLodge(e.target.value);
            }}
          />
          <br />
          <TextField
            id="numComLodge"
            label="Commercial Hotel"
            variant="outlined"
            margin="normal"
            type="number"
            onChange={(e) => {
              setNumComLodge(e.target.value);
            }}
          />
          <br />
          <TextField
            id="numFieldCon"
            label="Field Conditions"
            variant="outlined"
            margin="normal"
            type="number"
            onChange={(e) => {
              setNumFieldCon(e.target.value);
            }}
          />
          <br />
          <TextField
            id="numMealsProv"
            label="Meals Provided"
            variant="outlined"
            margin="normal"
            type="number"
            onChange={(e) => {
              setnumMealsProv(e.target.value);
            }}
          />
          {/* <br /> */}
          {/* <TextField
            id="numMealsProv"
            label="Exercise Name"
            variant="outlined"
            margin="normal"
            onChange={(e) => {
              setNameExercise(e.target.value);
            }}
          /> */}
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              buttonTing().then((data) => {

                //TODO CHANGE TO USE VALUES PULLED FROM API

                // const LodgingRate = data.monthlyrates[parseInt(month) - 1].value;
                updateFileHandler(unitCostSum, "50000")
                // const totalPpl =
                //   parseInt(numGovLodge) +
                //   parseInt(numComLodge) +
                //   parseInt(numFieldCon);
                // const mealsReq = totalPpl - parseInt(numMealsProv);
                // copy.perDiem.lodging.total = parseInt(numComLodge) * LodgingRate;
                // copy.perDiem.lodging.govLodgingInfo.occupancy =
                //   parseInt(numGovLodge);
                // copy.perDiem.lodging.comLodgingInfo.ratePerOccupancy =
                //   LodgingRate;
                // copy.perDiem.lodging.comLodgingInfo.occupancy =
                //   parseInt(numComLodge);
                // copy.perDiem.lodging.comLodgingInfo.total =
                //   parseInt(numComLodge) * LodgingRate;
                // copy.perDiem.lodging.fieLodgingInfo.occupancy =
                //   parseInt(numFieldCon);
                // copy.perDiem.mAndIE.ratePer = data.mealrate;
                // copy.perDiem.mAndIE.total = parseInt(data.mealrate) * mealsReq;
                // copy.perDiem.mAndIE.providedAmount = parseInt(numMealsProv);
                // copy.basicInfo.exercise = nameExercise;
                // setNewExerciseObject(copy);
                // TactApi.postExercises(newExerciseObject).then(() => {
                //   setNewExerciseObject(defaultExerciseObject);
                //   nav("/Dashboard/History", { replace: true });
                // })
              })
            }
            size="small"
          >
            Submit
          </Button>
        </CardActions>
      </React.Fragment>
    );
  
    return (
      <div>
        <Card>{card}</Card>
      </div>
    );
  };

// function FinishingUp({ data, changeStep }) {
//     const { services } = texts()

//     const Arcade = data.plan.name == "arcade" ? 'Arcade' : false
//     const Advanced = data.plan.name == "advanced" ? 'Advanced' : false
//     const Pro = data.plan.name == "pro" ? 'Pro' : false

//     const planMonthly = data.typePlan == 'Monthly'
//     const title = Arcade || Advanced || Pro

//     // function to calculate and display the final value of the plan and services
//     const valueService = () => {
//         const service01 = data.services.service01.isChecked
//         const service02 = data.services.service02.isChecked
//         const service03 = data.services.service03.isChecked

//         const valueServiceMonthly01 = planMonthly ? services.monthly[0] : services.yearly[0]
//         const valueServiceMonthly02 = planMonthly ? services.monthly[1] : services.yearly[1]
//         const valueServiceMonthly03 = planMonthly ? services.monthly[2] : services.yearly[2]

//         const planValue = data.plan.value
//         const service01IsChecked01 = service01 ? valueServiceMonthly01 : 0
//         const service01IsChecked02 = service02 ? valueServiceMonthly02 : 0
//         const service01IsChecked03 = service03 ? valueServiceMonthly03 : 0

//         const total = planValue + service01IsChecked01 + service01IsChecked02 + service01IsChecked03

//         return `$${total}/${planMonthly ? 'mo' : 'yr'}`
//     }

//     return (
//         <div className="form-container">
//             <div className="final-informations">
//                 <div className="final-plan-informations">
//                     <div className="title-step04">
//                         <h2 >
//                             {`${title} (${data.typePlan})`}
//                         </h2>

//                         <a href="#" onClick={() => changeStep(1)}>Change</a>
//                     </div>
//                     <div className="final-value">
//                         <span>
//                             {`$${data.plan.value}/${planMonthly ? 'mo' : 'yr'}`}
//                         </span>
//                     </div>
//                 </div>

//                 <hr />

//                 <div className="final-services-informations-container">
//                     <div
//                         style={{ display: data.services.service01.isChecked == true ? 'flex' : 'none' }}
//                         className="final-services-informations"
//                     >
//                         <span>{data.services.service01.name}</span>
//                         <span>{planMonthly ? `+$${services.monthly[0]}/mo` : `+$${services.yearly[0]}/yr`}</span>
//                     </div>
//                     <div
//                         style={{ display: data.services.service02.isChecked == true ? 'flex' : 'none' }}
//                         className="final-services-informations"
//                     >
//                         <span>{data.services.service02.name}</span>
//                         <span>{planMonthly ? `+$${services.monthly[1]}/mo` : `+$${services.yearly[1]}/yr`}</span>
//                     </div>
//                     <div
//                         style={{ display: data.services.service03.isChecked == true ? 'flex' : 'none' }}
//                         className="final-services-informations"
//                     >
//                         <span>{data.services.service03.name}</span>
//                         <span>{planMonthly ? `+$${services.monthly[2]}/mo` : `+$${services.yearly[2]}/yr`}</span>
//                     </div>
//                 </div>


//             </div>

//             <div className="total-informations">
//                 <span>{`Total (per ${planMonthly ? 'month' : 'year'})`}</span>
//                 <span>{valueService()}</span>
//             </div>
//         </div>
//     )
// }

export default Lodging;