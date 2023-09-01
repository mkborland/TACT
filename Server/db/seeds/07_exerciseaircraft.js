/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('exerciseaircraft').del()
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 1,
        aircraftType: 'C-5',
        aircraftCount: 2,
        personnelCount: 145,
        commercialAirfareCount: 0,
        commercialAirfareCost: 0,
        governmentAirfareCount: 145,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12001,
        governmentLodgingCount: 25,
        governmentLodgingCost: 301,
        fieldLodgingCount: 0,
        lodgingPerDiem: 501,
        mealPerDiem: 301,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 601 
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 1,
        aircraftType: 'F-15C',
        aircraftCount: 6,
        personnelCount: 90,
        commercialAirfareCount: 90,
        commercialAirfareCost: 4002,
        governmentAirfareCount: 0,
        commercialLodgingCount: 60,
        commercialLodgingCost: 2000,
        governmentLodgingCount: 30,
        governmentLodgingCost: 602,
        fieldLodgingCount: 0,
        lodgingPerDiem:  602,
        mealPerDiem: 402,
        mealProvidedCount: 0,
        mealNotProvidedCount: 90,
        rentalCount: 5,
        rentalCost: 302
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 2,
        aircraftType: 'C-130',
        aircraftCount: 2,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30003,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12003,
        governmentLodgingCount: 25,
        governmentLodgingCost: 303,
        fieldLodgingCount: 0,
        lodgingPerDiem: 503,
        mealPerDiem: 303,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 603
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 2,
        aircraftType: 'F-15C',
        aircraftCount: 8,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30004,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12004,
        governmentLodgingCount: 25,
        governmentLodgingCost: 304,
        fieldLodgingCount: 0,
        lodgingPerDiem: 504,
        mealPerDiem: 304,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 604
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 3,
        aircraftType: 'F-15C',
        aircraftCount: 6,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30005,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12005,
        governmentLodgingCount: 25,
        governmentLodgingCost: 305,
        fieldLodgingCount: 0,
        lodgingPerDiem: 505,
        mealPerDiem: 305,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 605
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 4,
        aircraftType: 'C-130',
        aircraftCount: 2,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30006,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12006,
        governmentLodgingCount: 25,
        governmentLodgingCost: 306,
        fieldLodgingCount: 0,
        lodgingPerDiem: 506,
        mealPerDiem: 306,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 606
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 3,
        aircraftType: 'KC-135',
        aircraftCount: 2,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30007,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12007,
        governmentLodgingCount: 25,
        governmentLodgingCost: 307,
        fieldLodgingCount: 0,
        lodgingPerDiem: 507,
        mealPerDiem: 307,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 607
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 4,
        aircraftType: 'F-15C',
        aircraftCount: 6,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30008,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12008,
        governmentLodgingCount: 25,
        governmentLodgingCost: 308,
        fieldLodgingCount: 0,
        lodgingPerDiem: 508,
        mealPerDiem: 308,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 608
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 5,
        aircraftType: 'C-17',
        aircraftCount: 2,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30009,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12009,
        governmentLodgingCount: 25,
        governmentLodgingCost: 309,
        fieldLodgingCount: 0,
        lodgingPerDiem: 509,
        mealPerDiem: 309,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 609
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: 5,
        aircraftType: 'F-22',
        aircraftCount: 4,
        personnelCount: 145,
        commercialAirfareCount: 100,
        commercialAirfareCost: 30000,
        governmentAirfareCount: 45,
        commercialLodgingCount: 120,
        commercialLodgingCost: 12000,
        governmentLodgingCount: 25,
        governmentLodgingCost: 300,
        fieldLodgingCount: 0,
        lodgingPerDiem: 500,
        mealPerDiem: 300,
        mealProvidedCount: 0,
        mealNotProvidedCount: 145,
        rentalCount: 15,
        rentalCost: 600
      }
    ]);
};
