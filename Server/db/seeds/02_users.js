/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      firstName: "admin",
      lastName: "admin",
      email: "admin@gmail.com",
      unit: "PACAF",
      roleID: "12345",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "PACAF",
      lastName: "COCOM",
      email: "cocom@madeup.mil",
      unit: "PACAF",
      roleID: "12345",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "111",
      lastName: "ARW",
      email: "111arw@madeup.mil",
      unit: "111 ARW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "158",
      lastName: "FW",
      email: "158fw@madeup.mil",
      unit: "158 FW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "174",
      lastName: "ATKW",
      email: "174atkw@madeup.mil",
      unit: "174 ATKW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "183",
      lastName: "WG",
      email: "183wg@madeup.mil",
      unit: "183 WG",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "169",
      lastName: "FW",
      email: "169fw@madeup.mil",
      unit: "169 FW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "146",
      lastName: "AW",
      email: "146aw@madeup.mil",
      unit: "146 AW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "129",
      lastName: "RQW",
      email: "129rqw@madeup.mil",
      unit: "129 RQW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "162",
      lastName: "FW",
      email: "162fw@madeup.mil",
      unit: "162 FW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "164",
      lastName: "AW",
      email: "164aw@madeup.mil",
      unit: "164 AW",
      roleID: "54321",
    },
  ]);
  await knex("users").insert([
    {
      firstName: "192",
      lastName: "FW",
      email: "192fw@madeup.mil",
      unit: "192 FW",
      roleID: "54321",
    },
  ]);
}
