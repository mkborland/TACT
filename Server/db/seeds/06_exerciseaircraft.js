/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('exerciseaircraft').del()
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: '1',
        aircraftType: 'KC-135',
        aircraftCount: '2',
        personnelCount: '145',
        commercialAirfareCount: '100',
        commercialAirfareCost: '30000',
        governmentAirfareCount: '45',
        commercialLodgingCount: '120',
        commercialLodgingCost: '12000',
        governmentLodgingCount: '25',
        governmentLodgingCost: '300',
        fieldLodgingCount: '0',
        lodgingPerDiem: '500',
        mealPerDiem: '300',
        mealProvidedCount: '0',
        mealNotProvidedCount: '145'
      }
    ]);
    await knex('exerciseaircraft').insert([
      {
        unitExerciseID: '2',
        aircraftType: 'F-22',
        aircraftCount: '2',
        personnelCount: '50',
        commercialAirfareCount: '50',
        commercialAirfareCost: '4000',
        governmentAirfareCount: '0',
        commercialLodgingCount: '20',
        commercialLodgingCost: '2000',
        governmentLodgingCount: '30',
        governmentLodgingCost: '600',
        fieldLodgingCount: '0',
        lodgingPerDiem: '600',
        mealPerDiem: '400',
        mealProvidedCount: '0',
        mealNotProvidedCount: '50'
      }
    ]);
  };
  