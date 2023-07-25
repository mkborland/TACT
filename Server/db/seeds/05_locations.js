/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('locations').del()
    await knex('locations').insert([
      {
        baseName: "",
        city: "Tucson",
        state: "AZ",
        country: "USA"
      }
    ]);
    await knex('locations').insert([
      {
        baseName: "",
        city: "Amsterdam",
        state: "",
        country: "Netherlands"
      }
    ]);
    await knex('locations').insert([
        {
          baseName: "Scott AFB",
          city: "St Louis",
          state: "IL",
          country: "USA"
        }
      ]);
  };
  