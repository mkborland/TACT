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
// import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from '@mui/x-charts/PieChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CurrencyFormat from 'react-currency-format';
import { Bar } from 'react-chartjs-2';

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

ChartJS.register(ArcElement, Tooltip, Legend, Title);

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
    let totalsByAirframe = [];
    let barColors = [
        "rgba(255,99,132,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(255,206,86,0.2)",
    ];
    let barBorderColors = [
        "rgba(255,99,132,1)",
        "rgba(54,162,235,1)",
        "rgba(255,206,86,1)",
    ];

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
    const [totalsForFY, setTotalsForFY] = useState([]);

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
        setTotalsForFY(await TactApi.getSummaries(userEmail, dataViewSelected, dataOptionsSelected));
    };

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

    const handleDataViewChange = (event) => {
        setDataViewSelected(event.target.value);
    };

    const handleDataOptionsChange = (event) => {
        console.log(`EVENT VAL: ${JSON.stringify(event.target.value)}`);
        setDataOptionsSelected(event.target.value);
    };

    console.log(`DATA DUMP: ${JSON.stringify(totalsForFY)}`);
    let j = 0;
    let manpowerTotal = 0;
    let airframeLabels = [];
    totalsForFY.map((rec) => {
        console.log(`REC ${j}: ${JSON.stringify(rec)}`);

        if (rec.acftTotals) {
            console.log(`YEP!`);
            manpowerTotal = rec.acftTotals.totalManpowerCost;
        } else if (rec.wingAcft) {
            console.log(`NOPE!`);
            totalsByAirframe.push({ 'id': j, 'label': rec.wingAcft.aircraftType, 'value': rec.wingAcft.manpowerCost });
            airframeLabels.push(rec.wingAcft.aircraftType);
            //     totalsByAirframe[j].id = j;
            //     totalsByAirframe[j].label = rec.wingAcft.aircraftType;
            //     totalsByAirframe[j].value = rec.wingAcft.manpowerCost;
        }
        else {
            console.log(`UNDEFINED!`);
            totalsByAirframe.push({ id: 0, label: 'undef', value: 0 });
        }

        j++;
    });

    console.log(`TOTALSARRAY: ${JSON.stringify(totalsByAirframe)}`);
    console.log(`airframeLabels: ${JSON.stringify(airframeLabels)}`);

    const options = {
        responsive: true,
        cutout: '10%',
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: `Total FY Spending, per Airframe:`,
                font: {
                    size: 20
                }
            },
        },
    };

    const display = {
        labels: airframeLabels,
        datasets: [
            {
                label: '$',
                data: totalsByAirframe,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,

        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Spending by Quarter',
            font: {
              size: 20
            }
          },
        },
      };

      const barDisplay = {
       airframeLabels,
        // datasets: [
        //   {
        //     label: 'Total Spending',
        //     data: totalsByAirframe ? [totalsByAirframe] : [],
        //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //   },
        //   {
        //     label: 'Total Allocation',
        //     data: totalsByAirframe ? [totalsByAirframe] : [],
        //     backgroundColor: 'rgba(81, 122, 235, 0.5)',
        //   },
        // ],
        datasets: [
            // {
            //   label: 'Total Spending',
            //   data: totalsByAirframe ? [1,2,3,4,5] : [1,2,3,4,5],
            //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // },
            {
              label: 'Total Allocation',
              data: totalsByAirframe ? [1,2,3,4,5] : [1,2,3,4,5],
              backgroundColor: 'rgba(81, 122, 235, 0.5)',
            },
          ],
        };

    if (totalsByAirframe) {
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
                        <Grid container xs={12} alignItems='center'>
                            <Grid item xs={6} padding={5}>

                                <Pie data={display} options={options} />

                                {/* <BarChart
                            width={500}
                            height={300}
                            series={[
                                { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                                { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                            ]}
                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                        /> */}
                            </Grid>
                            <Grid item xs={6} padding={5}>
                                <Card sx={{ minWidth: 100, padding: '8px' }} variant='outlined' >
                                    <CardContent>
                                        <Grid container xs={12}>
                                            <Grid item xs={6} padding={5}>
                                                {
                                                    totalsByAirframe.map((airframe) => {
                                                        return <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            {airframe.label}
                                                        </Typography>;
                                                    })
                                                }
                                            </Grid>
                                            <Grid item xs={6} padding={5} spacing={5} align={'right'}>
                                                {
                                                    totalsByAirframe.map((airframe) => {
                                                        return <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            <CurrencyFormat value={airframe.value} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                                                        </Typography>;
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>

                        <Grid container xs={12} alignItems='center'>
                            <Grid item xs={6} padding={5}>

                                <Bar data={barDisplay} options={barOptions} />
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </ThemeProvider>
        );
    }
}

export default AnalysisTool;