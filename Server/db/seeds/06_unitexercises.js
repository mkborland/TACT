/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('unitexercises').del()
  await knex('unitexercises').insert([
    {
      exerciseID: '1',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Los Angeles, CA',
      locationTo: 'Seattle, WA',
      travelStartDate: '20 July 2023',
      travelEndDate: '21 July 2023',
      unit: 'OL-3',
      userID: '1',
      personnelSum: '10',
      unitCostSum: '40000'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '2',
      status: '0',
      dateCreated: '20 July 2023',
      locationFrom: 'Charlotte, SC',
      locationTo: 'New York City, NY',
      travelStartDate: '21 July 2023',
      travelEndDate: '22 July 2023',
      unit: 'OL-4',
      userID: '2',
      personnelSum: '12',
      unitCostSum: '45000'
    }
  ]);
};
