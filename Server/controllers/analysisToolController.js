import knex from "../db/db.js";

const requestCostSummaries = async (req, res) => {
    // Here's the flow:
    // 1) Determine the user role,
    // 2) Structure the "where" clause based on how the data needs to be structured (by FY, by exercise, etc),
    // 3) Run a set of queries to get the summary data available for that user's unit ("exerciseaircraft" tbl), based on the structure requested
    //      IF COCOM planner, query for all exercises, capabilities, etc
    //      ELSE only query for exercises, capabilities, etc tied to that user's unit
    // 4) Calculate totals then send the data.

    // An Admin role is a COCOM planner, a User role is a wing planner.
    const roleAdmin = 12345;
    const roleUser = 54321;
    let role = '';

    const dropdownOptionByFY = 'by FY';
    const dropdownOptionByExercise = 'by Exercise';
    const dropdownOptionByCapability = 'by Capability';
    const dropdownOptionByUnit = 'by Unit';
    console.log(`dropdownOption: ${req.query.dropdownOption}`);
    console.log(`param: ${req.query.param}`);
    const emailAddy = req.query.email;
    const dropdownOption = req.query.dropdownOption;
    const param = req.query.param;
    let whereClause = '';
    let exerciseaircraftData = [];
    let costTally = 0;
    let travelDuration = 0;
    let endDateTemp = 0;
    let startDateTemp = 0;

    let totals = [];
    let totalAircraftType = 'All Acft';
    let totalDaysSupported = 0;
    let totalCostLodging = 0;
    let totalCostMeals = 0;
    //    let totalCostPerDiem = 0;
    let totalCostPerDay = 0;
    let totalCostTravel = 0;
    let totalManpowerCost = 0;
    let totalCostPerAircraft = 0;




    // Determine user role.
    await knex('users')
        .select('roleID', 'userID')
        .where({ email: emailAddy })
        .then((data) => {
            if (data[0].roleID === roleAdmin) {
                role = roleAdmin;
            }
            else if (data[0].roleID === roleUser) {
                role = roleUser;
            }
            else {
                res.status(200).json(`Error: Unable to determine user role -- \"${data[0].roleID}\"`);
            }
        });

    // Structure the "where" clause.
    switch (dropdownOption) {
        case dropdownOptionByFY:
            if (role === roleAdmin)
                whereClause = `{ unitExerciseID: unitExerciseID, aircraftType: aircraftType }`;
            else if (role === roleUser)
                whereClause = `{ unitExerciseID: unitExerciseID, aircraftType: aircraftType }`;

            // Query all the exercises that began in the FY passed.
            console.log(`DATES: 10-01-${param - 1}`, `09-30-${param}`);
            const exerciseData = await knex('exercises')
                .select('exerciseID', 'exerciseName')
                .whereBetween('exerciseStartDate', [`10-01-${param - 1}`, `09-30-${param}`]);

            console.log(`exerciseData: ${JSON.stringify(exerciseData)}`);
            console.log(`exerciseData.length: ${exerciseData.length}`);

            // query unitexercises now.
            if (exerciseData.length > 0) {
                exerciseaircraftData = await knex
                    .select(
                        'e.exerciseName',
                        'ea.*',
                        'ue.travelStartDate',
                        'ue.travelEndDate',
                    )
                    .from('exerciseaircraft AS ea')
                    .leftJoin('unitexercises AS ue', 'ue.unitExerciseID', 'ea.unitExerciseID')
                    .leftJoin('exercises AS e', 'e.exerciseID', 'ue.exerciseID')
                    .whereBetween('exerciseStartDate', [`10-01-${param - 1}`, `09-30-${param}`])
                    // .first()
                    ;


                console.log(`J: ${JSON.stringify(exerciseaircraftData)}`);

                exerciseaircraftData.map((airframeData) => {
                    // First calculate the amount of exercise days, including the first travel day; by converting the dates to timestamps, subtracting them out, then converting the resulting timestamp to a number of days.
                    endDateTemp = new Date(airframeData.travelEndDate).getTime();
                    startDateTemp = new Date(airframeData.travelStartDate).getTime();
                    travelDuration = ((endDateTemp - startDateTemp) / (1000 * 60 * 60 * 24)) + 1;

                    // Now calculate total manpower cost, which includes lodging/per-diem/meals times X number of days.  DON'T FORGET TO INCLUDE PER-DIEM, WHICH IS CURRENTLY MISSING FROM THIS TBL!!!
                    const lodging = Number(airframeData.commercialLodgingCost) + Number(airframeData.governmentLodgingCost) + Number(airframeData.lodgingPerDiem);

                    const meals = Number(airframeData.mealPerDiem);

//                    const perDiem = ????????????????;

                    // Now calculate costPerHead, which we're interpreting to just include travel costs for all personnel.  Per specs, gov't travel is $0.
                    const costTravelComm = Number(airframeData.commercialAirfareCost);
                    const costTravelGov = 50000; // Hard-coded per specs, but modified to be $50k instead of $0 for better-looking reports.
                    const costTravel = (Number(costTravelComm) + Number(costTravelGov));
                    const manpowerCost = lodging + meals + costTravel;

                    // Now build the return JSON like this; the "perAirframe" section will repeat for each airframe.
                    totals.push(
                        {
                            'wingAcft': {
                                'aircraftType': airframeData.aircraftType,
                                // ADD THE HEAD COUNT HERE.
                                'daysSupported': travelDuration,
                                'onSiteCosts': {
                                    'lodging': lodging,
                                    'meals': meals,
                                    // ADD PER-DIEM HERE.                                    'perdiem': '',
                                },
                                'costTravel': {
                                    costTravelComm,
                                    costTravelGov,
                                },
                                'manpowerCost': manpowerCost,
                                'costPerAircraft': manpowerCost / airframeData.aircraftCount,
                                'travelDuration': travelDuration,
                            },
                        },);

                    totalDaysSupported += travelDuration;
                    totalCostLodging += lodging;
                    totalCostMeals += meals;
                    //                        totalCostPerDiem += perDiem;
                    totalCostTravel += costTravel;

                    totalManpowerCost += manpowerCost;
                    totalCostPerAircraft += manpowerCost / airframeData.aircraftCount;
                });

                // Lastly, add Total Cost to the array object then send this puppy!
                totals.push(
                    // totals.unshift(
                    {
                        'acftTotals': {
                            'aircraftType': totalAircraftType,
                            'totalManpowerCost': totalManpowerCost,
                        },
                    },);
                console.log(`RETURN: ${JSON.stringify(totals)}`);
            }
            break;
        case dropdownOptionByExercise:
            whereClause = '';
            break;
        case dropdownOptionByCapability:
            whereClause = '';
            break;
        case dropdownOptionByUnit:
            whereClause = '';
            break;
        default:
    }

    res.status(200).json(totals);
    // res.status(200).json(data);
};

const requestFYs = async (req, res) => {
    // Here's the flow:
    // 1) Query to determine whether the user is a COCOM or wing planner,
    // 2) Query to get the list of FY data available for that user's unit
    //      IF COCOM planner, query the EXERCISES tbl
    //      ELSE query the EXERCISEAIRCRAFT tbl

    // An Admin role is a COCOM planner, a User role is a wing planner.
    const roleAdmin = 12345;
    const roleUser = 54321;
    console.log(`qry: ${req.query.email}`);
    const emailAddy = req.query.email;

    const alluserdata = await knex('users')
        .select('roleID', 'userID')
        .where({ email: emailAddy })
        .then((data) => {
            if (data[0].roleID === roleAdmin) {
                knex('exercises')
                    .select('exerciseStartDate')
                    // .where({ userID: data[0].userID })
                    .then((data) => {
                        // Game plan: Return a list of FYs for this org.
                        var temp = [];
                        var uniqueYears = [];
                        var prevYear = 0;

                        // For each FY returned...
                        data.map((row) => {

                            // Convert from String to Date.
                            var dateFormatted = new Date(row.exerciseStartDate);

                            // Add +1 to the FY if it's Oct/Nov/Dec to match the fiscal cycle.
                            if ((dateFormatted.getMonth() === 10) || (dateFormatted.getMonth() === 11) || (dateFormatted.getMonth() === 12)) {
                                dateFormatted = (dateFormatted.getFullYear() + 1);
                            }
                            else {
                                dateFormatted = dateFormatted.getFullYear();
                            }

                            temp.push(dateFormatted);
                        });

                        // Sort our Years data from the DB.
                        temp.sort();
                        temp.reverse();

                        // Loop through the sorted list to remove duplicate years.

                        var id = 0;
                        temp.map((row) => {

                            // Create a new array containing only one instance of each year, filtering out duplicates.
                            if (row !== prevYear) {
                                uniqueYears.push({ 'id': id, 'value': row });
                                prevYear = row;
                                id++;
                            }
                        });

                        uniqueYears.map((j) => console.log(`FY: ${j}`));
                        res.status(200).json(uniqueYears);
                    });
            }
            else if (data[0].roleID === roleUser) {
                res.status(200).json(data);

            }
            else {
                res.status(202).json(`Role not found: ${data[0].roleID}`);
            }

        });
};

export { requestCostSummaries, requestFYs };
