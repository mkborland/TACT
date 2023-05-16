/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    { id: 1, roleName: 'admin' },
    { id: 2, authKey: '12345' }
  ]);
  await knex('roles').insert([
    { id: 1, roleName: 'general' },
    { id: 2, authKey: '54321' }
  ]);
};
