/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      exerciseName: 'Test Exercise',
      status: '1',
      dateCreated: '15 May 2023',
      location: 'Tucsan, AZ',
      exerciseStartDate: '17 July 2023',
      exerciseEndDate: '28 July 2023',
      userID: '1',
      personnelSum: '7',
      costSum: '30000'
    }
  ]);
  await knex('exercises').insert([
    {
      exerciseName: 'Test Exercise Too',
      status: '0',
      dateCreated: '16 May 2023',
      location: 'Scott AFB, IL',
      exerciseStartDate: '18 July 2023',
      exerciseEndDate: '29 July 2023',
      userID: '2',
      personnelSum: '9',
      costSum: '35000'
    }
  ]);
};
