/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, userKey: '1' },
    { id: 2, authKey: '12345' },
    { id: 3, userName: 'admin' }
  ]);
  await knex('users').insert([
    { id: 1, userKey: '2' },
    { id: 2, authKey: '54321' },
    { id: 3, userName: 'test' }
  ]);
};
