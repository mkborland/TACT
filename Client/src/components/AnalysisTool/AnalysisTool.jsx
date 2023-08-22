import AnalysisToolTheme from "../../styles/AnalysisToolTheme";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from "@mui/material";
import 'chart.js/auto';
import { Pie, Doughnut } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CurrencyFormat from 'react-currency-format';
import { Bar, ArcElement, CategoryScale } from 'react-chartjs-2';
import { Divider } from '@mui/material';

//styles
//import '../../styles/PlanningTool.css';

// hooks
import { useEffect, useState } from "react";
import TactApi from "../../api/TactApi";

// --------- planning layout ------------
//pg 1 (ex Info) -> drop down with made ex's, user name and unit
//pg 2 (Aircraft) -> Amount of aircraft + personnel attached .... list or table
//pg 3 (airfair) -> api needs dates and location ---- steal for unit info
//pg 4 (lodging) -> perdiem api used with total personnel
//pg 5 (meals) -> ^^ above but if meals provided

// find where to join unit exercise db with used aircraft db for calculations

//ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

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
    let airframeValues = [];
    totalsForFY.map((rec) => {
        console.log(`REC ${j}: ${JSON.stringify(rec)}`);

        if (rec.acftTotals) {
            console.log(`YEP!`);
            manpowerTotal = rec.acftTotals.totalManpowerCost;
        } else if (rec.wingAcft) {
            console.log(`NOPE!`);
            totalsByAirframe.push({ 'id': j, 'label': rec.wingAcft.aircraftType, 'value': rec.wingAcft.manpowerCost });
            airframeLabels.push(rec.wingAcft.aircraftType);
            airframeValues.push(rec.wingAcft.manpowerCost);
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
        cutout: '5%',
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

    const displayBarChartsAndReports = () => {
        let dataSetTravelComm = [];
        let dataSetTravelGov = [];
        let dataSetLodging = [];
        let dataSetMeals = [];
        let dataSetPerDiem = [];
        let costLabels = [];
        return totalsForFY.map((airframe) => {
            if (typeof airframe?.wingAcft?.aircraftType !== 'undefined') {
                if (airframe.wingAcft.aircraftType !== 'All') {
                    console.log(`airframe.wingAcft.costTravelComm: ${airframe.wingAcft.costTravel.costTravelComm}`);
                    dataSetTravelComm = [airframe.wingAcft.costTravel.costTravelComm
                    ];
                    dataSetTravelGov = [airframe.wingAcft.costTravel.costTravelGov
                    ];
                    dataSetLodging = [
                        airframe.wingAcft.onSiteCosts.lodging,
                    ];
                    dataSetMeals = [
                        airframe.wingAcft.onSiteCosts.meals,
                    ];
                    dataSetPerDiem = [
                        5000,  // ADD PER DIEM HERE!!!!!!!!!!!!!!!!!!
                    ];
                    costLabels = [
                        'Travel Costs   |   On-Site Costs'
                    ];


                    return (
                        <Grid container xs={12}>
                            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <Divider
                                    variant="fullWidth" borderTop="thin solid green"
                                />
                            </Box>
                            <Grid container xs={12} alignItems='center'>
                                <Grid item xs={6} padding={5}>
                                    <Bar
                                        data={{
                                            labels: costLabels,
                                            datasets: [
                                                {
                                                    label: 'Commercial Travel',
                                                    data: dataSetTravelComm,
                                                    // data: airframeValues,
                                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                                    borderColor: 'rgba(255, 99, 132, 1)',
                                                    borderWidth: 1,
                                                    stack: 'Stack 0',
                                                },
                                                {
                                                    label: 'Gov\'t Travel',
                                                    data: dataSetTravelGov,
                                                    // data: airframeValues,
                                                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                                    borderColor: 'rgba(54, 162, 235, 1)',
                                                    borderWidth: 1,
                                                    stack: 'Stack 0',
                                                },
                                                {
                                                    label: 'Lodging',
                                                    data: dataSetLodging,
                                                    // data: airframeValues,
                                                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                                                    borderColor: 'rgba(255, 206, 86, 1)',
                                                    borderWidth: 1,
                                                    stack: 'Stack 1',
                                                },
                                                {
                                                    label: 'Meals',
                                                    data: dataSetMeals,
                                                    // data: airframeValues,
                                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                                    borderColor: 'rgba(75, 192, 192, 1)',
                                                    borderWidth: 1,
                                                    stack: 'Stack 1',
                                                },
                                                {
                                                    label: 'Per-Diem',
                                                    data: dataSetPerDiem,
                                                    // data: airframeValues,
                                                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                                    borderColor: 'rgba(153, 102, 255, 1)',
                                                    borderWidth: 1,
                                                    stack: 'Stack 1',
                                                },
                                            ],
                                        }}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                title: { display: true, text:
                                                    'Total FY Spending, ' +
                                                    airframe.wingAcft.aircraftType +
                                                    ', ' +
                                                    airframe.wingAcft.travelDuration +
                                                    ' Days',
                                                    font: { size: 20 } },
                                                legend: {
                                                    position: 'bottom'
                                                },
                                                tooltip: {
                                                    callbacks: {
                                                        title: function (tooltipItems, data) {
                                                            return '';
                                                        }, label: function (context) {
                                                            let label = context.dataset.label || '';

                                                            if (label) {
                                                                label += ': ';
                                                            }
                                                            if (context.parsed.y !== null) {
                                                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                                            }
                                                            return label;
                                                        }
                                                    }
                                                },
                                            },
                                            scales: {
                                                x: {
                                                    stacked: true,
                                                },
                                                y: {
                                                    stacked: true
                                                }
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={6} padding={5}>
                                    <Card sx={{ minWidth: 100, padding: '8px' }} variant='outlined' >
                                        <CardContent>
                                            <Grid container xs={12}>
                                            <Typography gutterBottom variant="h4" component="div" align='center'>
                                            Total FY Spending,{' '}
                                                    {airframe.wingAcft.aircraftType}
                                                    {', '}
                                                    {airframe.wingAcft.travelDuration}
                                                    {' '}
                                                    Days
                                                        </Typography>
                                                <Grid item xs={6} padding={5}>
                                                    {
                                                        <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            Travel Costs
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            Commercial:
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            Government:
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            <br />
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            On-Site Costs
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            Lodging:
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            Meals:
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            Per-Diem:
                                                        </Typography>
                                                    }
                                                    <Divider
                                                        variant="fullWidth" borderTop="thin solid green"
                                                    />
                                                    {
                                                        <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            <br />
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            Total:
                                                        </Typography>
                                                    }
                                                </Grid>
                                                <Grid item xs={6} padding={5} spacing={5} align={'right'}>
                                                    {
                                                        <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            <br />
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            {<CurrencyFormat value={airframe.wingAcft.costTravel.costTravelComm} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />}
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            {<CurrencyFormat value={airframe.wingAcft.costTravel.costTravelGov} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />}
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            <br />
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            <br />
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            {<CurrencyFormat value={airframe.wingAcft.onSiteCosts.lodging} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />}
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            {<CurrencyFormat value={airframe.wingAcft.onSiteCosts.meals} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />}
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            {<CurrencyFormat value='00000' displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />}
                                                        </Typography>
                                                    }
                                                    <Divider
                                                        variant="fullWidth" borderTop="thin solid green"
                                                    />
                                                    {
                                                        <Typography gutterBottom variant="h5" component="div" align='right'>
                                                            <br />
                                                        </Typography>
                                                    }
                                                    {
                                                        <Typography gutterBottom variant="h6" component="div" align='right'>
                                                            {<CurrencyFormat value={airframe.wingAcft.manpowerCost} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />}
                                                        </Typography>
                                                    }
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            </Grid>
                        </Grid>
                    );
                }
            }
        });
    };

    if (totalsByAirframe) {
        return (
            <ThemeProvider theme={theme} >
                <div className="header-and-form-container">
                    <Grid container alignItems='flex-end' spacing={.8} padding={.1}>
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


                        {displayBarChartsAndReports()}


                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <Divider
                                variant="fullWidth" borderTop="thin solid green"
                            />
                        </Box>


                    </Grid>
                </div>
            </ThemeProvider>
        );
    }
}

export default AnalysisTool;