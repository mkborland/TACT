/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    {
      roleName: 'admin',
      authKey: '12345'
    }
  ]);
  await knex('roles').insert([
    {
      roleName: 'general',
      authKey: '54321'
    }
  ]);
  await knex('roles').insert([
    {
      roleName: 'pending',
      authKey: '11111'
    }
  ]);
};
