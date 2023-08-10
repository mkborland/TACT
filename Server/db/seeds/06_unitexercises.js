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
      locationFrom: 'Shepherd Field ANGB, WV',
      locationTo: 'Clark AB, PHL',
      travelStartDate: '14 July 2023',
      travelEndDate: '31 July 2023',
      unit: '167 AW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '1',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Burlington, VT',
      locationTo: 'Clark AB, PHL',
      travelStartDate: '15 July 2023',
      travelEndDate: '30 July 2023',
      unit: '158 FW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '2',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Savannah ANGB, GA',
      locationTo: 'Honolulu, HI',
      travelStartDate: '13 July 2022',
      travelEndDate: '3 August 2022',
      unit: '165 AW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '2',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Springfield, IL',
      locationTo: 'Honolulu, HI',
      travelStartDate: '16 July 2022',
      travelEndDate: '31 July 2022',
      unit: '183 WG',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '3',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Columbia, SC',
      locationTo: 'Kadena AB, JPN',
      travelStartDate: '6 November 2021',
      travelEndDate: '30 November 2021',
      unit: '169 FW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '4',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Channel Islands ANGS, CA',
      locationTo: 'RAAF Base Darwin, AUS',
      travelStartDate: '1 December 2022',
      travelEndDate: '13 December 2022',
      unit: '146 AW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '4',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Pittsburgh, PA',
      locationTo: 'Brisbane, AUS',
      travelStartDate: '2 December 2022',
      travelEndDate: '12 December 2022',
      unit: '171 ARW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '4',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Tucson, AZ',
      locationTo: 'Katherine, AUS',
      travelStartDate: '1 December 2022',
      travelEndDate: '12 December 2022',
      unit: '162 FW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '5',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Memphis, TN',
      locationTo: 'Anderson AB, GUM',
      travelStartDate: '21 January 2024',
      travelEndDate: '7 February 2024',
      unit: '164 AW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
  await knex('unitexercises').insert([
    {
      exerciseID: '5',
      status: '1',
      dateCreated: '19 July 2023',
      locationFrom: 'Norfolk, VA',
      locationTo: 'Anderson AB, GUM',
      travelStartDate: '21 January 2024',
      travelEndDate: '7 February 2024',
      unit: '192 FW',
      userID: '2',
      personnelSum: '0',
      unitCostSum: '0'
    }
  ]);
};
