/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    {
      roleName: 'Admin',
      roleID: '12345'
    }
  ]);
  await knex('roles').insert([
    {
      roleName: 'User',
      roleID: '54321'
    }
  ]);
  await knex('roles').insert([
    {
      roleName: 'Pending',
      roleID: '11111'
    }
  ]);
};
