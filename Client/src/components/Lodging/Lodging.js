import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import baseApiUrl from "../../api/TactApiConfig.js";

const Lodging = () => {
    //Initialization
    const { newExerciseObject, setNewExerciseObject } = useAppContext();
    const copy = newExerciseObject;
    const date = newExerciseObject.overView.startEx;
    const location = newExerciseObject.overView.startLocation;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const city = location.split(',')[0];
    const state = location.split(',')[1].trim();
    //Inputs
    const [numGovLodge, setNumGovLodge] = useState(0);
    const [numComLodge, setNumComLodge] = useState(0);
    const [numFieldCon, setNumFieldCon] = useState(0);
    const [numMealsProv, setnumMealsProv] = useState(0);
    //Calcs
    if (isNaN(parseInt(numGovLodge))) {
        setNumGovLodge(0);
    }
    if (isNaN(parseInt(numComLodge))) {
        setNumComLodge(0);
    }
    if (isNaN(parseInt(numFieldCon))) {
        setNumFieldCon(0);
    }
    if (isNaN(parseInt(numMealsProv))) {
        setnumMealsProv(0);
    }

    const buttonTing = async () => {
        const endPoint = "/get_rates";
        const params = `?year=${year}&city=${city}&state=${state}`
        const response = await fetch(`${baseApiUrl}${endPoint}${params}`, {
            method: "GET",
        });

        if (!response.ok) {
            console.log("error");
        } else {
            const result = await response.json();
            return result
        }
    }

    const card = (
        <React.Fragment>
            <CardContent>
                <TextField id="numGovLodge" label="Government Lodging" variant="outlined" margin="normal" type='number' onChange={(e) => { setNumGovLodge(e.target.value) }} />
                <br />
                <TextField id="numComLodge" label="Commercial Hotel" variant="outlined" margin="normal" type='number' onChange={(e) => { setNumComLodge(e.target.value) }} />
                <br />
                <TextField id="numFieldCon" label="Field Conditions" variant="outlined" margin="normal" type='number' onChange={(e) => { setNumFieldCon(e.target.value) }} />
                <br />
                <TextField id="numMealsProv" label="Meals Provided" variant="outlined" margin="normal" type='number' onChange={(e) => { setnumMealsProv(e.target.value) }} />
            </CardContent>
            <CardActions>
                <Button onClick={() => buttonTing().then((data) => {
                    const LodgingRate = data.monthlyrates[parseInt(month) - 1].value
                    const totalPpl = (parseInt(numGovLodge) + parseInt(numComLodge) + parseInt(numFieldCon));
                    const mealsReq = totalPpl - parseInt(numMealsProv);
                    copy.perDiem.lodging.total = parseInt(numComLodge) * LodgingRate;
                    copy.perDiem.lodging.govLodgingInfo.occupancy = parseInt(numGovLodge);
                    copy.perDiem.lodging.comLodgingInfo.ratePerOccupancy = LodgingRate;
                    copy.perDiem.lodging.comLodgingInfo.occupancy = parseInt(numComLodge);
                    copy.perDiem.lodging.comLodgingInfo.total = parseInt(numComLodge) * LodgingRate;
                    copy.perDiem.lodging.fieLodgingInfo.occupancy = parseInt(numFieldCon);
                    copy.perDiem.mAndIE.ratePer = data.mealrate;
                    copy.perDiem.mAndIE.total = parseInt(data.mealrate) * mealsReq;
                    copy.perDiem.mAndIE.providedAmount = parseInt(numMealsProv);
                    console.log(copy)
                    setNewExerciseObject(copy);
                })} size="small">Submit</Button>
            </CardActions>
        </React.Fragment>
    );

    return (<div>
        <Card>{card}</Card>
    </div>)
}

export default Lodging;