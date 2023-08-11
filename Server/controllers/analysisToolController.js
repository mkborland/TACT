import knex from "../db/db.js";

let totals = [];

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
                // let j = await knex('exerciseaircraft')
                //     .select('*')
                //     .whereIn('unitExerciseID', function () {
                //         this.select('unitExerciseID')
                //             .from('unitexercises')
                //             .whereIn("exerciseID", function () {
                //                 this.select('exerciseID')
                //                     .from('exercises')
                //                     .whereBetween('exerciseStartDate', [`10-01-${param - 1}`, `09-30-${param}`])
                //                     ;

                //             });
                //     });

                // //                        )}`)


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
                    // First calculate costPerDay, which includes lodging/per-diem/meals.  DON'T FORGET TO INCLUDE PER-DIEM, WHICH IS CURRENTLY MISSING FROM THIS TBL!!!
                    const costPerDay = (airframeData.commercialLodgingCost * airframeData.commercialLodgingCount) + (airframeData.governmentLodgingCost * airframeData.governmentLodgingCount) + (airframeData.lodgingPerDiem * airframeData.fieldLodgingCount) + (airframeData.mealPerDiem * airframeData.mealNotProvidedCount)
                        // + (ADD PER DIEM HERE!!!)
                        ;

                    // Now calculate costPerHead, which we're interpreting to just include travel costs for all personnel.  Per specs, gov't travel is $0.
                    const costTravel = (airframeData.commercialAirfareCost * airframeData.commercialAirfareCount)
                        // + (ADD GOV'T AIRFARE HERE!!!)
                        ;

                    // Now calculate Manpower Cost, which we're interpreting as the costs to get out there and back (travel) plus the costs for daily ops for all days total.
                    const travelDuration = (airframeData.travelEndDate - airframeData.travelStartDate) + 1;
                    const manpowerCost = ((costPerDay * travelDuration) + costTravel);

                    // Now build the return JSON like this; the "perAirframe" section will repeat for each airframe.
                    totals.push(
                        {
                            'allAirframes': {
                                'totalCost': '',
                            },
                            'perAirframe': {
                                'aircraftType': airframeData.aircraftType,
                                'daysSupported': travelDuration,
                                'costPerDay': costPerDay,
                                'costTravel': costTravel,
                                'manpowerCost': manpowerCost,
                                'costPerAircraft': manpowerCost / airframeData.aircraftCount,
                            },
                        });
                });

                console.log(`RETURN: ${JSON.stringify(totals)}`)
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

    // await knex('exerciseaircraft')
    // .select("*")
    // .where(whereClause)
    // .then((data) => {
    //     })

    const data = [{ 'whereClause': whereClause, 'userRole': role }];
    res.status(200).json(data);
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
