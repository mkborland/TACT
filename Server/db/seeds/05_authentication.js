/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('authentication').del()
  await knex('authentication').insert([
    {
      userID: '1',
      authKey: '12345'
    }
  ]);
  await knex('authentication').insert([
    {
      userID: '2',
      authKey: '54321'
    }
  ]);
};
