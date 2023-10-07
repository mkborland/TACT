import AnalysisToolTheme from "../../styles/AnalysisToolTheme";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Bar, ArcElement, CategoryScale } from "react-chartjs-2";
import { Divider } from "@mui/material";
//styles
//import '../../styles/PlanningTool.css';
import AnalysisToolStyle from "../../styles/AnalysisToolStyle";

// hooks
import { useEffect, useState } from "react";
import TactApi from "../../api/TactApi";

const theme = createTheme(AnalysisToolTheme("dark"));
function AnalysisTool(props) {
  const { user } = props;
  const [userInfo, setUserInfo] = useState();
  const [dataOptionsList, setDataOptionsList] = useState([
    { id: 0, value: "2019" },
  ]);
  const dropdownOptionByFY = "FY";
  const dropdownOptionByExercise = "Exercise";

  let totalsByAirframe = [];
  let totalsByAirframePie = [];

  // Hard-coded for now, 'til the Login functionality is complete and user data is passed into the Analysis logic as Props.
  const userEmail = user ? user.email : "admin@gmail.com";
  //TODO: The userID should be passed from main application,
  //this needs to be updated once that is figured out
  const fetchUserInfo = async () => {
    const response = await TactApi.getUser(userEmail);
    setUserInfo(response);
  };

  const viewingOptionsDataView = [
    { id: dropdownOptionByFY, value: "by FY" },
    { id: dropdownOptionByExercise, value: "by Exercise" },
  ];

  const [dataViewSelected, setDataViewSelected] = useState(dropdownOptionByFY);
  const [dataOptionsSelected, setDataOptionsSelected] = useState({
    id: "0",
    value: "2019",
  });
  const [totalsForFY, setTotalsForFY] = useState([]);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const queryDropdownByFY = async () => {
    // Call API to populate the second dropdown list.
    const response = await TactApi.getFYs(userEmail);
    //console.log(response[0])
    setDataOptionsList(response);
    setDataOptionsSelected({ id: 0, value: response[0].value });
  };

  const queryDropdownByExercise = async () => {
    const response = await TactApi.getExerciseList(userEmail);
    setDataOptionsList(response);
    setDataOptionsSelected({ id: response[0].id, value: response[0].value });
  };

  const querySummaryData = async () => {
    setTotalsForFY(
      await TactApi.getSummaries(
        userEmail,
        dataViewSelected,
        dataOptionsSelected
      )
    );
  };

  useEffect(() => {
    switch (dataViewSelected) {
      case dropdownOptionByFY:
        queryDropdownByFY();
        break;
      case dropdownOptionByExercise:
        queryDropdownByExercise();
        break;
      default:
    }
  }, [dataViewSelected]);

  useEffect(() => {
    // Call API to populate the charts.
    querySummaryData();
  }, [dataOptionsSelected.value]);

  const handleDataViewChange = (event) => {
    const temp = event.target.value.split(' ');
    setDataViewSelected(temp[1]);
  };

  const handleDataOptionsChange = (event) => {
    let param = {};
    let ctr = 1;

    switch (dataViewSelected) {
      case dropdownOptionByFY:
        param = { id: 0, value: event.target.value };
        break;
      case dropdownOptionByExercise:
        // Need to correlate the exercise name selected from the dropdown with its ID so we can pass the ID to the Summary API.
        dataOptionsList.map((exerciseNames) => {
          if (exerciseNames.value === event.target.value) {
            param = { id: ctr, value: exerciseNames.value };
          }
          ctr++;
        });
        break;
      default:
    }

    setDataOptionsSelected(param);
  };

  // 'NumberFormat' instanciation to replace the 'CurrencyFormat'
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  let ctr = 0;
  let manpowerTotal = 0;
  let airframeLabels = [];
  let airframeValues = [];
  totalsForFY.map((rec) => {
    if (rec.acftTotals) {
      manpowerTotal = USDollar.format(rec.acftTotals.totalManpowerCost);
    } else if (rec.wingAcft) {
      totalsByAirframe.push({
        id: ctr,
        airframe: rec.wingAcft.aircraftType,
        tailQty: rec.wingAcft.aircraftQty,
        unit: rec.wingAcft.unit,
        totalCost: USDollar.format(rec.wingAcft.manpowerCost),
        perTailCost: USDollar.format(rec.wingAcft.costPerAircraft),
      });
      totalsByAirframePie.push({
        id: ctr,
        label: rec.wingAcft.aircraftType,
        //        value: rec.wingAcft.costPerAircraft,
        value: Math.round(rec.wingAcft.costPerAircraft),
        // value: USDollar.format(rec.wingAcft.costPerAircraft),
      });
      airframeLabels.push(rec.wingAcft.aircraftType);
      airframeValues.push(USDollar.format(rec.wingAcft.costPerAircraft));
    } else {
      totalsByAirframe.push({ id: 0, label: "undef", value: 0 });
      totalsByAirframePie.push({ id: 0, label: "undef", value: 0 });
    }

    ctr++;
  });

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: "5%",
    plugins: {
      legend: {
        display: true, // option to enable or disable the legend
        position: "bottom",
        // adding label to address the style more specific
        labels: {
          font: {
            size: 18,
          },
          color: "rgba(255, 255, 255, 1)",
          padding: 10,
          },
      },
      title: {
        display: true,
        text: `Total ${dataViewSelected} Spending, ${dataOptionsSelected.value}, Per-Tail:`,
        font: {
          size: 22,
          weight: 'bold', // Font weight is adjusted
        },
        color: "rgba(237, 220, 72, 0.8)", // Color changed to white
        padding: {
          // Adding to separate the Pie chart from the drop down menu
          bottom: 5,
          top: 0,
        },
      },
    },
  };

  const display = {
    labels: airframeLabels,
    // labels: ['S12', 'F22', 'G33','T44'], // for testing purposes!
    datasets: [
      {
        label: "$",
        data: totalsByAirframePie,
        // data: [23, 44, 122, 412,76], // for testing purposes!
        backgroundColor: [
          "rgba(255, 99, 132, 0.45)", // from 0.2 to 0.45 to make it more less transparent
          "rgba(72, 223, 237, 0.45)", //'rgba(54, 162, 235, 0.45)',
          "rgba(255, 206, 86, 0.45)",
          "rgba(75, 192, 192, 0.45)",
          "rgba(153, 102, 255, 0.45)",
          "rgba(255, 159, 64, 0.45)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(72, 223, 237, 1)", //'rgba(54, 162, 235, 0.45)',
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2.5, // adjusted to 3 from 1
      },
    ],
  };

  const ColoredLine = () => (
    <hr
      style={{
        // color: 'red',
        // backgroundColor: 'red',
        height: 1
      }}
    />
  );

  // console.log(`The formated version of ${price} is ${USDollar.format(price)}`)
  const displayBarChartsAndReports = () => {
    let dataSetTravelComm = [];
    let dataSetTravelGov = [];
    let dataSetLodging = [];
    let dataSetMeals = [];
    let dataSetPerDiem = [];
    let costLabels = [];
    return totalsForFY.map((airframe, index) => {
      if (typeof airframe?.wingAcft?.aircraftType !== "undefined") {
        if (airframe.wingAcft.aircraftType !== "All") {
          dataSetTravelComm = [airframe.wingAcft.costTravel.costTravelComm];
          dataSetTravelGov = [airframe.wingAcft.costTravel.costTravelGov];
          dataSetLodging = [airframe.wingAcft.onSiteCosts.lodging];
          dataSetMeals = [airframe.wingAcft.onSiteCosts.meals];
          dataSetPerDiem = [airframe.wingAcft.onSiteCosts.perdiem];
          costLabels = ["Travel Costs   |   On-Site Costs"];

          // JSX for the charts and reports.
          return (
            <Grid key={`grid_${index}`} container>
              <Box sx={AnalysisToolStyle.DividerBox}>
                <Divider variant="fullWidth" />
              </Box>

              <Grid container alignItems="center">
                <Grid item {...AnalysisToolStyle.gridItem}>
                  {/* <Grid item xs={6} padding={3} height={'100%'}> */}


                  {/* {" "} */}
                  {/*The padding is decreased, and extra small (xs) screen changed from 6 to 7 to increase the bar chart size*/}
                  <Bar
                    // height={'100%'}
                    // width={'100%'}
                    data={{
                      labels: costLabels,
                      datasets: [
                        {
                          label: "Commercial Travel",
                          data: dataSetTravelComm,
                          backgroundColor: "rgba(255, 99, 132, 0.45)",
                          borderColor: "rgba(255, 99, 132, 1)",
                          borderWidth: 2.5, // Border width adjusted
                          stack: "Stack 0",
                        },
                        {
                          label: "Gov't Travel",
                          data: dataSetTravelGov,
                          backgroundColor: "rgba(72, 223, 237, 0.45)", // Original color -> 'rgba(54, 162, 235, 0.45)',
                          borderColor: "rgba(72, 223, 237, 1)", //Original color -> 'rgba(54, 162, 235, 1)',
                          borderWidth: 2.5, // Border width adjusted
                          stack: "Stack 0",
                        },
                        {
                          label: "Lodging",
                          data: dataSetLodging,
                          backgroundColor: "rgba(255, 206, 86, 0.45)",
                          borderColor: "rgba(255, 206, 86, 1)",
                          borderWidth: 2.5, // Border width adjusted
                          stack: "Stack 1",
                        },
                        {
                          label: "Meals",
                          data: dataSetMeals,
                          backgroundColor: "rgba(75, 192, 192, 0.45)",
                          borderColor: "rgba(75, 192, 192, 1)",
                          borderWidth: 2.5, // Border width adjusted
                          stack: "Stack 1",
                        },
                        {
                          label: "Per-Diem",
                          data: dataSetPerDiem,
                          backgroundColor: "rgba(153, 102, 255, 0.45)",
                          borderColor: "rgba(153, 102, 255, 1)",
                          borderWidth: 2.5, // Border width adjusted
                          stack: "Stack 1",
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      responsive: true,
                      plugins: {
                        title: {
                          display: true,
                          text:
                            "Total FY Spending, " +
                            dataViewSelected +
                            ", " +
                            dataOptionsSelected.value +
                            ", " +
                            airframe.wingAcft.aircraftType +
                            " (" +
                            airframe.wingAcft.unit +
                            "), " +
                            airframe.wingAcft.travelDuration +
                            " Days" +
                            ", " +
                            airframe.wingAcft.personnel +
                            " PAX",
                          font: {
                            size: 22,
                            weight: "bold", // Font weight is adjusted
                          },
                          padding: {
                            // Adding to separate the Pie chart from the drop down menu
                            bottom: 5,
                          },
                          color: "rgba(237, 220, 72, 0.8)", // color changed to 'white'
                        },

                        legend: {
                          display: true, // option to enable or disable the legend
                          position: "bottom",
                          // adding label to address the style more specific
                          labels: {
                            font: {
                              size: 18,
                            },
                            color: "rgba(255, 255, 255, 1)",
                            // padding:10
                          },
                        },
                        // width: 0.1,
                        tooltip: {
                          callbacks: {
                            title: function (tooltipItems, data) {
                              return "";
                            },
                            label: function (context) {
                              let label = context.dataset.label || "";

                              if (label) {
                                label += ": ";
                              }
                              if (context.parsed.y !== null) {
                                label += USDollar.format(context.parsed.y);
                              }
                              return label;
                            },
                          },
                        },
                      },

                      // Bar chart tick and grid color set to white and adjusted their transparency
                      scales: {
                        x: {
                          stacked: true,
                          ticks: {
                            color: "rgba(255, 255, 255, 0.6)",
                          },
                          grid: {
                            color: "rgba(255, 255, 255, 0.1)",
                          },
                        },
                        y: {
                          stacked: true,
                          ticks: {
                            color: "rgba(255, 255, 255, 0.6)",
                          },
                          grid: {
                            color: "rgba(255, 255, 255, 0.1)",
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid {...AnalysisToolStyle.gridItem}>
                  {/* <Grid item xs={6} padding={3}> */}
                  {/* Border color changed to 'white' */}
                  <Card
                    sx={AnalysisToolStyle.BarChartCardReport}
                    variant="outlined"
                  >
                    <CardContent>
                      <Grid container>
                        {/* Add style to cards' title */}
                        <Typography
                          sx={AnalysisToolStyle.TypographyTitleCardReport}
                          gutterBottom
                          key="1"
                          variant="h4"
                          component="div"
                          align="center"
                        >
                          Total {dataViewSelected} Spending, {dataOptionsSelected.value}, {airframe.wingAcft.aircraftType}
                          {" ("}
                          {airframe.wingAcft.unit}
                          {"), "}
                          {airframe.wingAcft.travelDuration} Days
                          {", "}
                          {airframe.wingAcft.personnel} PAX
                        </Typography>

                        <Grid item {...AnalysisToolStyle.gridItem}>
                          {
                            /* Added style to Travel Cost */
                            <Typography
                              sx={
                                AnalysisToolStyle.TypographySubtitleCardReport
                              }
                              gutterBottom
                              key="2"
                              variant="h5"
                              component="div"
                              align="right"
                            >
                              Travel Costs
                            </Typography>
                          }

                          {/*Change the align from 'right' to 'center' for all three Typography below*/}
                          {
                            <Typography
                              gutterBottom
                              key="3"
                              variant="h6"
                              component="div"
                              align="center"
                            >
                              Commercial:
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="20"
                              variant="h6"
                              component="div"
                              align="center"
                            >
                              Government:
                            </Typography>
                          }
                          {
                            <Typography
                              sx={{ paddingTop: "9px" }}
                              gutterBottom
                              key="21"
                              variant="h5"
                              component="div"
                              align="center"
                            >
                              <br />
                            </Typography>
                          }
                          {
                            /* Added style to On-Site Cost */
                            <Typography
                              sx={
                                AnalysisToolStyle.TypographySubtitleCardReport
                              }
                              gutterBottom
                              key="4"
                              variant="h5"
                              component="div"
                              align="right"
                            >
                              On-Site Costs
                            </Typography>
                          }

                          {/*Change the align from 'right' to 'center' for all three Typography below*/}
                          {
                            <Typography
                              gutterBottom
                              key="5"
                              variant="h6"
                              component="div"
                              align="center"
                            >
                              Lodging:
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="6"
                              variant="h6"
                              component="div"
                              align="center"
                            >
                              Meals:
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="7"
                              variant="h6"
                              component="div"
                              align="center"
                            >
                              Per-Diem:
                            </Typography>
                          }
                          <Divider
                            sx={AnalysisToolStyle.DividerBarChart}
                            variant="fullWidth"
                          />
                          {
                            <Typography
                              gutterBottom
                              key="8"
                              variant="h5"
                              component="div"
                              align="right"
                            >
                              <br />
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="9"
                              variant="h6"
                              component="div"
                              align="center"
                            >
                              Total:
                            </Typography>
                          }
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridItem}
                          align={"right"}
                        >
                          {
                            <Typography
                              gutterBottom
                              key="10"
                              variant="h5"
                              component="div"
                              align="right"
                            >
                              <br />
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="11"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(
                                airframe.wingAcft.costTravel.costTravelComm
                              )}
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="12"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(
                                airframe.wingAcft.costTravel.costTravelGov
                              )}
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="13"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              <br />
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="14"
                              variant="h5"
                              component="div"
                              align="right"
                            >
                              <br />
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="15"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(
                                airframe.wingAcft.onSiteCosts.lodging
                              )}
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="16"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(
                                airframe.wingAcft.onSiteCosts.meals
                              )}
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="17"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format("00000")}
                            </Typography>
                          }
                          <Divider
                            sx={AnalysisToolStyle.DividerBarChart}
                            variant="fullWidth"
                          />

                          {
                            <Typography
                              gutterBottom
                              key="18"
                              variant="h5"
                              component="div"
                              align="right"
                            >
                              <br />
                            </Typography>
                          }
                          {
                            <Typography
                              gutterBottom
                              key="19"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(airframe.wingAcft.manpowerCost)}
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

  // JSX for the two dropdowns.
  //
  if (totalsByAirframe) {
    return (
      <ThemeProvider theme={theme}>
        <div key="22" className="jjjj">
        {/* <div key="22" className="header-and-form-container"> */}
        <Grid container alignItems="flex-end" spacing={1} padding={5.0}>
        {/* <Grid container alignItems="flex-end" spacing={2} padding={0.1}> */}
            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                sx={AnalysisToolStyle.DropdownFormControl}
              >
                <InputLabel shrink>Data View</InputLabel>
                <Select
                  label="Data View"
                  defaultValue={viewingOptionsDataView[0].value}
                  onChange={handleDataViewChange}
                  sx={AnalysisToolStyle.DropDownData}
                >
                  {viewingOptionsDataView.map((item) => (
                    <MenuItem key={item.id} value={item.value}>
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  Select how to organize your data
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                sx={AnalysisToolStyle.DropdownFormControl}
              >
                <InputLabel shrink>Data Options</InputLabel>
                <Select
                  label="Data Options"
                  value={dataOptionsSelected.value}
                  defaultValue={dataOptionsSelected.value}
                  onChange={handleDataOptionsChange}
                  sx={AnalysisToolStyle.DropDownData}
                >
                  {dataOptionsList.map((item) => (
                    <MenuItem key={item.id} value={item.value}>
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select an option</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <ColoredLine />
            </Grid>
            <Grid container alignItems="stretch">
              {/* <Grid container alignItems="center" spacing={2}> */}
              <Grid item xs={6} padding={6}>
                <Pie data={display} options={options} />
              </Grid>

              <Grid item {...AnalysisToolStyle.gridItem}>
                {/* The pir chart card report has been adjusted properly to resemble bar report styling*/}
                <Card
                  sx={AnalysisToolStyle.PieChartCardReport}
                  variant="outlined"
                >
                  <CardContent>
                    <Grid container alig>
                      <Typography
                        sx={AnalysisToolStyle.TypographyTitleCardReport}
                        gutterBottom
                        key="1"
                        variant="h4"
                        component="div"
                        align="center"
                      >
                        Total {dataViewSelected} Spending, {dataOptionsSelected.value}, Per-Tail
                      </Typography>

                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeSmall}>
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color='rgba(72, 223, 237, 0.8)'
                          fontWeight='600'
                          gutterBottom
                          key='0'
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Acft<ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeSmall}>
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color='rgba(72, 223, 237, 0.8)'
                          fontWeight='600'
                          gutterBottom
                          key='0'
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Qty<ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeLarge}>
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color='rgba(72, 223, 237, 0.8)'
                          fontWeight='600'
                          gutterBottom
                          key='0'
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Unit<ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeLarge}>
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color='rgba(72, 223, 237, 0.8)'
                          fontWeight='600'
                          gutterBottom
                          key='0'
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Cost<ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeLarge}>
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color='rgba(72, 223, 237, 0.8)'
                          fontWeight='600'
                          gutterBottom
                          key='0'
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Per-Tail<ColoredLine />
                        </Typography>
                      </Grid>

                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeSmall}>
                        {totalsByAirframe.map((airframe) => {
                          // Typography text alignment and font size added (left column)
                          return (
                            <Typography
                              sx={
                                AnalysisToolStyle.PieChartTypographyCardReportLeft
                              }
                              gutterBottom
                              key={airframe.id}
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {airframe.airframe}
                            </Typography>
                          );
                        })}
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeSmall}>
                        {totalsByAirframe.map((airframe) => {
                          // Typography text alignment and font size added (left column)
                          return (
                            <Typography
                              sx={
                                AnalysisToolStyle.PieChartTypographyCardReportLeft
                              }
                              gutterBottom
                              key={airframe.id}
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {airframe.tailQty}
                            </Typography>
                          );
                        })}
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeLarge}>
                        {totalsByAirframe.map((airframe) => {
                          // Typography text alignment and font size added (left column)
                          return (
                            <Typography
                              sx={
                                AnalysisToolStyle.PieChartTypographyCardReportLeft
                              }
                              gutterBottom
                              key={airframe.id}
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {airframe.unit}
                            </Typography>
                          );
                        })}
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeLarge}>
                        {totalsByAirframe.map((airframe) => {
                          // Typography text alignment and font size added (left column)
                          return (
                            <Typography
                              sx={
                                AnalysisToolStyle.PieChartTypographyCardReportLeft
                              }
                              gutterBottom
                              key={airframe.id}
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {airframe.totalCost}
                            </Typography>
                          );
                        })}
                      </Grid>
                      <Grid item {...AnalysisToolStyle.gridItemPerAirframeLarge}>
                        {totalsByAirframe.map((airframe) => {
                          // Typography text alignment and font size added (right column)
                          return (
                            <Typography
                              sx={
                                AnalysisToolStyle.PieChartTypographyCardReportRight
                              }
                              gutterBottom
                              key={airframe.id}
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {airframe.perTailCost}
                            </Typography>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {displayBarChartsAndReports()}

            <Box sx={AnalysisToolStyle.DividerBox}>
              <Divider variant="fullWidth" />
            </Box>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default AnalysisTool;
