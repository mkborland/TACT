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
      unit: 'PACAF',
      roleID: '12345'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '111 ARW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '158 FW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '174 ATKW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '183 WG',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '169 FW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '146 AW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '129 RQW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '162 FW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '164 AW',
      roleID: '54321'
    }
  ]);
  await knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'Doe.John@gmail.com',
      unit: '192 FW',
      roleID: '54321'
    }
  ]);
};
