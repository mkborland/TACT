/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@gmail.com',
      unit: 'OL-2',
      roleID: '12345'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: 'OL-1',
      roleID: '54321'
    }
  ]);
};
