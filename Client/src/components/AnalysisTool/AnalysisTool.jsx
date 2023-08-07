// components
// import ExerciseInfo from "./ExerciseInfoPg1"
// import YourPlan from "./AircraftInfoPg2"
// import PickAddOns from "./AirfareInfoPg3"
// import Lodging from "./PlanningToolPg4"
// import Thanks from "./PlanningToolPg5"
// import StepInformations from "./StepInformations"
import AnalysisToolTheme from "../../styles/AnalysisToolTheme";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from "@mui/material";

//styles
//import '../../styles/PlanningTool.css';

// hooks
import { useEffect, useState } from "react";
// import { texts } from "../../hooks/texts"
// import { useForm } from "../../hooks/useForm"
import TactApi from "../../api/TactApi";

// --------- planning layout ------------
//pg 1 (ex Info) -> drop down with made ex's, user name and unit
//pg 2 (Aircraft) -> Amount of aircraft + personnel attached .... list or table
//pg 3 (airfair) -> api needs dates and location ---- steal for unit info
//pg 4 (lodging) -> perdiem api used with total personnel
//pg 5 (meals) -> ^^ above but if meals provided

// find where to join unit exercise db with used aircraft db for calculations

const theme = createTheme(AnalysisToolTheme('dark'));

const unitExerciseTemplate = {
    unitExerciseID: undefined,
    exerciseID: undefined, //set from drop down of High level exercise
    status: false, // Should be an enum = 'Draft' | "Complete"
    dateCreated: new Date(),
    locationFrom: undefined, //to be used with api for airfair
    locationTo: undefined,
    travelStartDate: new Date(), //should start with the exercise dates, but user modifiable
    travelEndDate: new Date(),
    unit: undefined,       //exercise info (default to current user)
    userID: -1,    //pull from current user
    personnelSum: 0, //calculated from total aircraft
    unitCostSum: 0 //^^
};

function AnalysisTool(props) {
    const { user } = props;
    // const [data, setData] = useState(unitExerciseTemplate);
    const [userInfo, setUserInfo] = useState();
    // const [saved, setSaved] = useState(false);
    // const [byFYSelected, setByFYSelected] = useState(false);
    // const [byExerciseSelected, setByExerciseSelected] = useState(false);
    // const [byCapabilitySelected, setByCapabilitySelected] = useState(false);
    // const [byUnitSelected, setByUnitSelected] = useState(false);
    // const [byFundingTypeSelected, setByFundingTypeSelected] = useState(false);
    const [dataOptionsList, setDataOptionsList] = useState([{ 'id': 0, 'value': '2019' }]);
    const dropdownOptionByFY = 'by FY';
    const dropdownOptionByExercise = 'by Exercise';
    const dropdownOptionByCapability = 'by Capability';
    const dropdownOptionByUnit = 'by Unit';

    const userEmail = user ? user.email : "admin@gmail.com";
    //TODO: The userID should be passed from main application,
    //this needs to be updated once that is figured out
    const fetchUserInfo = async () => {
        const response = await TactApi.getUser(userEmail);
        setUserInfo(response);
    };

    const viewingOptionsDataView = [
        { id: dropdownOptionByFY, value: 'by FY' },
        { id: dropdownOptionByExercise, value: 'by Exercise' },
        { id: dropdownOptionByCapability, value: 'by Capability' },
        { id: dropdownOptionByUnit, value: 'by Unit' },
    ];

    const [dataViewSelected, setDataViewSelected] = useState(dropdownOptionByFY);
    const [dataOptionsSelected, setDataOptionsSelected] = useState('2019');

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const queryDropdownByFY = async () => {
        // console.log(`CALLING queryDropdownByFY`);

        // Call API to populate the second dropdown list.
        const response = await TactApi.getFYs(userEmail);
        setDataOptionsList(response);
        setDataOptionsSelected(response[0].value);
        // console.log(`CALLED queryDropdownByFY: ${JSON.stringify(response)}`);
    };

    const queryDropdownByExercise = async () => {
        setDataOptionsList([{ 'id': 0, 'value': '2' }]);
        // setDataOptionsSelected([{ 'id': 0, 'value': '2' }]);
        setDataOptionsSelected('2');
    };

    const queryDropdownByCapability = async () => {
        setDataOptionsList([{ 'id': 0, 'value': '3' }]);
        // setDataOptionsSelected([{ 'id': 0, 'value': '3' }]);
        setDataOptionsSelected('3');
    };

    const queryDropdownByUnit = async () => {
        setDataOptionsList([{ 'id': 0, 'value': '4' }]);
        // setDataOptionsSelected([{ 'id': 0, 'value': '4' }]);
        setDataOptionsSelected('4');
    };

    const querySummaryData = async () => {
        const response = await TactApi.getSummaries(userEmail, dataViewSelected, dataOptionsSelected);
        console.log(`CALLED getSummaries: ${JSON.stringify(response)}`);
    }

    useEffect(() => {
        switch (dataViewSelected) {
            case dropdownOptionByFY:
                queryDropdownByFY();
                break;
            case dropdownOptionByExercise:
                queryDropdownByExercise();
                break;
            case dropdownOptionByCapability:
                queryDropdownByCapability();
                break;
            case dropdownOptionByUnit:
                queryDropdownByUnit();
                break;
            default:
        }
    }, [dataViewSelected]);

    useEffect(() => {
        // Call API to populate the charts.
        querySummaryData();
    }, [dataOptionsSelected]);


    //     useEffect(() => {
    //         userInfo && updateFileHandler({
    //             unit: userInfo.unit,
    //             userID: userInfo.userID
    //         })
    //     }, [userInfo]);

    //     useEffect(() => {
    //         console.log('useEffect data', data);
    //     }, [data]);

    //     useEffect(() => {
    //         if (saved) updateUnitExercise(data);
    //     }, [saved, data])

    //     //creates new mission in the DB with 'newMission' as the data obj
    //     const createUnitExercise = async (newMission) => {
    //         const response = await TactApi.saveUnitExercise(newMission);
    //         setData(response)
    //     }

    //     const updateUnitExercise = async (changedMission) => {
    //         await TactApi.updateUnitExercise(changedMission)
    //             .catch((err) => {console.log(err)});
    //     }

    //     const { arrayInformationsStep } = texts()

    //     const updateFileHandler = (update) => {
    //         if (Object.keys(update).includes('exerciseID')) {
    //             //validate if there is an existing mission with that exId
    //             //if yes, then update the current 'data' with the db data
    //             //if no, then create a newmission
    //             const temp = data;
    //             temp.exerciseID = update.exerciseID;
    //             createUnitExercise(temp);
    //         } else {
    //             const temp = data;
    //             Object.keys(update).forEach((obj) => {
    //                 temp[obj] = update[obj];
    //             });
    //             setData(temp);
    //         }

    //     }

    //     // get the pages of the steps
    //     //TODO set up the setSave on each of the pages
    //     const formComponents = [
    //         <ExerciseInfo data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
    //         <YourPlan data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
    //         <PickAddOns data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
    //         <Lodging data={data} updateFileHandler={updateFileHandler} setSaved={setSaved}/>,
    //         <Thanks />
    //     ]

    //     const { currentStep, currentComponent, changeStep, isFarstStep} = useForm(formComponents, data, saved)

    //     // to keep the 'Next Step' button in the same place
    //     const styleToActions = isFarstStep ? 'end' : 'space-between'
    //     const isThankyouStep = currentStep === formComponents.length - 1 ? 'center' : 'space-between'
    //     const displayOff = currentStep !== formComponents.length - 1 ? 'flex' : 'none'
    //     const lastNumber = formComponents.length + 1;

    const handleDataViewChange = (event) => {
        setDataViewSelected(event.target.value);
    };

    const handleDataOptionsChange = (event) => {
        console.log(`EVENT VAL: ${JSON.stringify(event.target.value)}`)
        setDataOptionsSelected(event.target.value);
    };

    return (
        <ThemeProvider theme={theme} >
            <div className="header-and-form-container">
                <Grid container alignItems='flex-end' spacing={.8} padding={.1}
                // backgroundColor={'primary.main'}
                >
                    <Grid item xs={6}>
                        <FormControl variant="outlined"
                            sx={{
                                marginTop: 2,
                                width: 300
                            }}>
                            <InputLabel shrink>Data View</InputLabel>
                            <Select label="Data View"
                                defaultValue={viewingOptionsDataView[0].value}
                                onChange={handleDataViewChange}
                                sx={{
                                    // marginTop: 0,
                                    width: 250,
                                    height: 50,
                                }}
                            >
                                {viewingOptionsDataView.map((item) => <MenuItem key={item.id} value={item.value}>{item.value}
                                </MenuItem>)}
                            </Select>
                            <FormHelperText>Select how to organize your data</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="outlined"
                            sx={{
                                marginTop: 2,
                                width: 300
                            }}>
                            <InputLabel shrink>Data Options</InputLabel>
                            <Select label="Data Options"
                                value={dataOptionsSelected}
                                defaultValue={dataOptionsSelected}
                                onChange={handleDataOptionsChange}
                                sx={{
                                    // marginTop: 0,
                                    width: 250,
                                    height: 50,
                                }}
                            >
                                {dataOptionsList.map((item) => <MenuItem key={item.id} value={item.value}>{item.value}
                                </MenuItem>)}
                            </Select>
                            <FormHelperText>Select an option</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>charts go here
                    </Grid>
                    <Grid item xs={6}>reports go here
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default AnalysisTool;