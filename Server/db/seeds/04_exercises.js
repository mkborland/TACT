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
      dateCreated: '15 May 2023',
      locationStart: 'Tucsan, AZ',
      locationEnd: 'Scott AFB, IL',
      unit: '375 CSPTS',
      exerciseDateStart: '15 May 2023',
      exerciseDateEnd: '20 May 2023',
      personnelNumber: '4',
      airfareType: 'Commercial',
      airfareCost: '500.00',
      kc135Num: '0',
      c130Num: '0',
      c17Num: '0',
      c5Num: '0',
      f22Num: '0',
      f35Num: '0',
      a10Num: '0',
      f15cNum: '0',
      kc135Persons: '0',
      c130Persons: '0',
      c17Persons: '0',
      c5Persons: '0',
      f22Persons: '0',
      f35Persons: '0',
      a10Persons: '0',
      f15cPersons: '0',
      govLodging: '0',
      govLodgingCost: '90.00',
      commercialHotel: '3',
      commercialHotelCost: '150.00',
      fieldConditions: '0',
      perDiem: '100.00',
      mealsProvided: '0',
      foodPerDiem: '70.00',
      userID: '2'
    }
  ]);
};
