/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('exercises').del()
  await knex('exercises').insert([
    { id: 1, exerciseName: 'Test Exercise' },
    { id: 2, dateCreated: '15 May 2023' },
    { id: 3, location: 'Tucsan, AZ' },
    { id: 4, unit: '375 CSPTS' },
    { id: 5, exerciseDateRange: '15 May 2023 - 20 May 2023' },
    { id: 6, personnelNumber: '4' },
    { id: 7, airfareType: 'Commercial' },
    { id: 8, airfareCost: '$500' },
    { id: 9, kc135Num: '0' },
    { id: 10, c130Num: '0' },
    { id: 11, c17Num: '0' },
    { id: 12, c5Num: '0' },
    { id: 13, f22Num: '0' },
    { id: 14, f35Num: '0' },
    { id: 15, a10Num: '0' },
    { id: 16, f15cNum: '0' },
    { id: 17, kc135Persons: '0' },
    { id: 18, c130Persons: '0' },
    { id: 19, c17Persons: '0' },
    { id: 20, c5Persons: '0' },
    { id: 21, f22Persons: '0' },
    { id: 22, f35Persons: '0' },
    { id: 23, a10Persons: '0' },
    { id: 24, f15cPersons: '0' },
    { id: 25, govLodging: '0' },
    { id: 26, commercialHotel: '3' },
    { id: 27, fieldConditions: '0' },
    { id: 28, perDiem: '$100' },
    { id: 29, mealsProvided: '0' },
    { id: 30, foodPerDiem: '$70' }
  ]);
};
