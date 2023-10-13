import AnalysisToolTheme from "../../styles/AnalysisToolTheme";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Bar } from "react-chartjs-2";
import { Divider } from "@mui/material";
import AnalysisToolStyle from "../../styles/AnalysisToolStyle";

// hooks
import { useEffect, useState } from "react";
import TactApi from "../../api/TactApi";

const theme = createTheme(AnalysisToolTheme("dark"));
function AnalysisTool(props) {
  const { user } = props;
  const userEmail = user.email;
  const [dataOptionsList, setDataOptionsList] = useState([
    { id: 0, value: "2019" },
  ]);
  const dropdownOptionByFY = "FY";
  const dropdownOptionByExercise = "Exercise";

  let totalsByAirframe = [];
  let totalsByAirframePie = [];

  // These are the options available in the first dropdown on the left.
  const viewingOptionsDataView = [
    { id: dropdownOptionByFY, value: "by FY" },
    { id: dropdownOptionByExercise, value: "by Exercise" },
  ];

  // These state hooks store the values that the user selected from the dropdowns.
  const [dataViewSelected, setDataViewSelected] = useState(dropdownOptionByFY);
  const [dataOptionsSelected, setDataOptionsSelected] = useState({
    id: "0",
    value: "2019",
  });
  const [totalsForFY, setTotalsForFY] = useState([]);

  // Call API then set the state hooks to populate the second dropdown list when "by FY" is selected.
  const queryDropdownByFY = async () => {
    const response = await TactApi.getFYs(userEmail);
    setDataOptionsList(response);
    setDataOptionsSelected({ id: 0, value: response[0].value });
  };

  // Call API then set the state hooks to populate the second dropdown list when "by exercise" is selected.
  const queryDropdownByExercise = async () => {
    const response = await TactApi.getExerciseList(userEmail);
    setDataOptionsList(response);
    setDataOptionsSelected({ id: response[0].id, value: response[0].value });
  };

  // Once all dropdown options are selected, get all data from the DB.
  const querySummaryData = async () => {
    setTotalsForFY(
      await TactApi.getSummaries(
        userEmail,
        dataViewSelected,
        dataOptionsSelected
      )
    );
  };

  // Determine which option the user selected from the first dropdown.
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

  // Call the API to populate the charts.
  useEffect(() => {
    querySummaryData();
  }, [dataOptionsSelected.value]);

  // We'll track "FY/Exercise" instead of "by FY/by Exercise" so we can dual-use this variable as some of our headers.
  const handleDataViewChange = (event) => {
    const temp = event.target.value.split(" ");
    setDataViewSelected(temp[1]);
  };

  const handleDataOptionsChange = (event) => {
    let param = {};
    let ctr = 1;

    // Initial handler for when the user selects an option from the right-side dropdown.
    switch (dataViewSelected) {
      case dropdownOptionByFY:
        param = { id: 0, value: event.target.value };
        break;
      case dropdownOptionByExercise:
        // Need to correlate the exercise name selected from the dropdown with its ID so we can pass the ID to the Summary API.
        dataOptionsList.forEach((exerciseNames) => {
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

  // Build the arrays from the DB for use by the charts & cards.
  let ctr = 0;
  let manpowerTotal = 0;
  let airframeLabels = [];
  let airframeValues = [];
  totalsForFY.forEach((rec) => {
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
        value: Math.round(rec.wingAcft.manpowerCost),
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

  // Options for the pie chart.
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: "5%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
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
        text: `Total ${dataViewSelected} Spending, ${dataOptionsSelected.value}:`,
        font: {
          size: 22,
          weight: "bold", // Font weight is adjusted
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

  // Data settings for the pie chart.
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

  // Settings for the horizontal lines.
  const ColoredLine = () => <hr style={{ height: 1 }} />;

  // JSX for the bar charts & cards.
  const displayBarChartsAndReports = () => {
    let dataSetTravelComm = [];
    let dataSetTravelGov = [];
    let dataSetLodging = [];
    let dataSetMeals = [];
    let costLabels = [];

    // Looping through each record to display a bar chart & card for each.
    return totalsForFY.map((airframe, index) => {
      if (typeof airframe?.wingAcft?.aircraftType !== "undefined") {
        if (airframe.wingAcft.aircraftType !== "All") {
          dataSetTravelComm = [airframe.wingAcft.costTravel.costTravelComm];
          dataSetTravelGov = [airframe.wingAcft.costTravel.costTravelGov];
          dataSetLodging = [airframe.wingAcft.onSiteCosts.lodging];
          dataSetMeals = [airframe.wingAcft.onSiteCosts.meals];
          costLabels = ["Travel Costs              Per-Diem"];

          // JSX for the charts and reports.
          return (
            <Grid key={`grid_${index}`} container>
              <Box sx={AnalysisToolStyle.DividerBox}>
                <Divider variant="fullWidth" />
              </Box>

              <Grid container alignItems="center">
                {/* Bar charts. */}
                <Grid item {...AnalysisToolStyle.gridItem}>
                  <Bar
                    data={{
                      labels: costLabels,
                      datasets: [
                        {
                          label: "Commercial Travel",
                          data: dataSetTravelComm,
                          backgroundColor: "rgba(255, 99, 132, 0.45)",
                          borderColor: "rgba(255, 99, 132, 1)",
                          borderWidth: 2.5,
                          stack: "Stack 0",
                        },
                        {
                          label: "Gov't Travel",
                          data: dataSetTravelGov,
                          backgroundColor: "rgba(72, 223, 237, 0.45)",
                          borderColor: "rgba(72, 223, 237, 1)",
                          borderWidth: 2.5,
                          stack: "Stack 0",
                        },
                        {
                          label: "Lodging",
                          data: dataSetLodging,
                          backgroundColor: "rgba(255, 206, 86, 0.45)",
                          borderColor: "rgba(255, 206, 86, 1)",
                          borderWidth: 2.5,
                          stack: "Stack 1",
                        },
                        {
                          label: "Meals",
                          data: dataSetMeals,
                          backgroundColor: "rgba(75, 192, 192, 0.45)",
                          borderColor: "rgba(75, 192, 192, 1)",
                          borderWidth: 2.5,
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
                            weight: "bold",
                          },
                          padding: {
                            bottom: 20,
                          },
                          color: "rgba(237, 220, 72, 0.8)",
                        },

                        legend: {
                          display: true,
                          position: "bottom",
                          labels: {
                            font: {
                              size: 18,
                            },
                            color: "rgba(255, 255, 255, 1)",
                            padding: 20,
                          },
                        },
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
                      scales: {
                        x: {
                          stacked: true,
                          ticks: {
                            color: "rgba(255, 255, 255, 0.6)",
                            font: {
                              size: 24,
                            },
                          },
                          grid: {
                            color: "rgba(255, 255, 255, 0.1)",
                            font: {
                              size: 24,
                            },
                          },
                        },
                        y: {
                          stacked: true,
                          ticks: {
                            color: "rgba(255, 255, 255, 0.6)",
                            font: {
                              size: 24,
                            },
                          },
                          grid: {
                            color: "rgba(255, 255, 255, 0.1)",
                            font: {
                              size: 24,
                            },
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Bar chart cards. */}
                <Grid {...AnalysisToolStyle.gridItem}>
                  <Card
                    sx={AnalysisToolStyle.BarChartCardReport}
                    variant="outlined"
                  >
                    <CardContent>
                      <Grid container>
                        <Typography
                          sx={AnalysisToolStyle.TypographyTitleCardReport}
                          gutterBottom
                          key="1"
                          variant="h4"
                          component="div"
                          align="center"
                        >
                          Total {dataViewSelected} Spending,{" "}
                          {dataOptionsSelected.value},{" "}
                          {airframe.wingAcft.aircraftType}
                          {" ("}
                          {airframe.wingAcft.unit}
                          {"), "}
                          {airframe.wingAcft.travelDuration} Days
                          {", "}
                          {airframe.wingAcft.personnel} PAX
                        </Typography>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItemHeader}>
                          {
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
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="3"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Commercial:
                            </Typography>
                          }
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
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
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="20"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Government:
                            </Typography>
                          }
                          <Divider
                            sx={AnalysisToolStyle.DividerBarChart}
                            variant="fullWidth"
                          />
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
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
                          <Divider
                            sx={AnalysisToolStyle.DividerBarChart}
                            variant="fullWidth"
                          />
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="20"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Total Travel Costs:
                            </Typography>
                          }
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="12"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(
                                airframe.wingAcft.costTravel.costTravel
                              )}
                            </Typography>
                          }
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItemHeader}>
                          {
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
                              Per-Diem
                            </Typography>
                          }
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="5"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Lodging:
                            </Typography>
                          }
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
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
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="6"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Meals:
                            </Typography>
                          }
                          <Divider
                            sx={AnalysisToolStyle.DividerBarChart}
                            variant="fullWidth"
                          />
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
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
                          <Divider
                            sx={AnalysisToolStyle.DividerBarChart}
                            variant="fullWidth"
                          />
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="7"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Total Per-Diem:
                            </Typography>
                          }
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="17"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(
                                airframe.wingAcft.onSiteCosts.totalPerDiem
                              )}
                            </Typography>
                          }
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItemHeader}>
                          {
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
                              Totals
                            </Typography>
                          }
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="9"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Cost-Per-Aircraft:
                            </Typography>
                          }
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              gutterBottom
                              key="19"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              {USDollar.format(
                                airframe.wingAcft.costPerAircraft
                              )}
                            </Typography>
                          }
                        </Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              sx={
                                AnalysisToolStyle.TypographyTotalsHeaderCardReport
                              }
                              gutterBottom
                              key="9"
                              variant="h6"
                              component="div"
                              align="right"
                            >
                              Total {dataViewSelected} Spending:
                            </Typography>
                          }
                        </Grid>
                        <Grid item {...AnalysisToolStyle.gridSubItem}>
                          {
                            <Typography
                              sx={
                                AnalysisToolStyle.TypographyTotalsValueCardReport
                              }
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
                        <Grid
                          item
                          {...AnalysisToolStyle.gridSubItemFiller}
                        ></Grid>

                        {/*
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
                        </Grid> */}
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

  // JSX for the two dropdowns and pie chart & card.
  if (totalsByAirframe) {
    return (
      <ThemeProvider theme={theme}>
        <div key="22" className="jjjj">
          <Grid container alignItems="flex-end" spacing={1} padding={5.0}>
            {/* First dropdown. */}
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

            {/* Second dropdown. */}
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

            {/* Horizontal line. */}
            <Grid item xs={12}>
              <ColoredLine />
            </Grid>

            <Grid container alignItems="stretch">
              {/* Pie chart. */}
              <Grid item xs={6} padding={6}>
                <Pie data={display} options={options} />
              </Grid>

              {/* Pie chart cards. */}
              <Grid item {...AnalysisToolStyle.gridItem}>
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
                        Total {dataViewSelected} Spending,{" "}
                        {dataOptionsSelected.value}
                      </Typography>

                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeSmall}
                      >
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color="rgba(72, 223, 237, 0.8)"
                          fontWeight="600"
                          gutterBottom
                          key="0"
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Acft
                          <ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeSmall}
                      >
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color="rgba(72, 223, 237, 0.8)"
                          fontWeight="600"
                          gutterBottom
                          key="0"
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Qty
                          <ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeLarge}
                      >
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color="rgba(72, 223, 237, 0.8)"
                          fontWeight="600"
                          gutterBottom
                          key="0"
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Unit
                          <ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeLarge}
                      >
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color="rgba(72, 223, 237, 0.8)"
                          fontWeight="600"
                          gutterBottom
                          key="0"
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Cost
                          <ColoredLine />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeLarge}
                      >
                        <Typography
                          sx={
                            AnalysisToolStyle.PieChartTypographyCardReportLeft
                          }
                          color="rgba(72, 223, 237, 0.8)"
                          fontWeight="600"
                          gutterBottom
                          key="0"
                          variant="h6"
                          component="div"
                          align="right"
                        >
                          Per-Tail
                          <ColoredLine />
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeSmall}
                      >
                        {totalsByAirframe.map((airframe) => {
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
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeSmall}
                      >
                        {totalsByAirframe.map((airframe) => {
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
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeLarge}
                      >
                        {totalsByAirframe.map((airframe) => {
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
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeLarge}
                      >
                        {totalsByAirframe.map((airframe) => {
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
                      <Grid
                        item
                        {...AnalysisToolStyle.gridItemPerAirframeLarge}
                      >
                        {totalsByAirframe.map((airframe) => {
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

            {/* This calls the bar charts & cards to display below the pie chart/card. */}
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
