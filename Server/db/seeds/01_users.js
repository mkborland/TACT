/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      userName: 'admin',
      userPass: 'admin'
    }
  ]);
  await knex('users').insert([
    {
      userName: 'test',
      userPass: 'test'
    }
  ]);
};
