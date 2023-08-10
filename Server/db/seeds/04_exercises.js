/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      exerciseName: 'DEEPEST OCEAN',
      status: '1',
      dateCreated: '15 May 2023',
      location: 'Philippines',
      exerciseStartDate: '17 July 2023',
      exerciseEndDate: '28 July 2023',
      userID: '1',
      personnelSum: '0',
      costSum: '0'
    }
  ]);
  await knex('exercises').insert([
    {
      exerciseName: 'PEACEFUL MAGELLAN',
      status: '0',
      dateCreated: '16 May 2023',
      location: 'Hawaii',
      exerciseStartDate: '18 July 2022',
      exerciseEndDate: '29 July 2022',
      userID: '1',
      personnelSum: '0',
      costSum: '0'
    }
  ]);
  await knex('exercises').insert([
    {
      exerciseName: 'SHRINKING INCH',
      status: '1',
      dateCreated: '15 May 2023',
      location: 'Japan',
      exerciseStartDate: '11 November 2021',
      exerciseEndDate: '27 November 2021',
      userID: '1',
      personnelSum: '0',
      costSum: '0'
    }
  ]);
  await knex('exercises').insert([
    {
      exerciseName: 'STUDIO TURKEY',
      status: '1',
      dateCreated: '15 May 2023',
      location: 'Australia',
      exerciseStartDate: '4 December 2022',
      exerciseEndDate: '10 December 2022',
      userID: '1',
      personnelSum: '0',
      costSum: '0'
    }
  ]);
  await knex('exercises').insert([
    {
      exerciseName: 'ORNERY TURTLE',
      status: '1',
      dateCreated: '15 May 2023',
      location: 'Guam',
      exerciseStartDate: '26 January 2024',
      exerciseEndDate: '3 February 2024',
      userID: '1',
      personnelSum: '0',
      costSum: '0'
    }
  ]);
};
