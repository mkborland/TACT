/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("locations", (table) => {
        table.increments("locationID");
        table.string("region");
        table.string("iata");
        table.string("icao");
        table.string("airport");
        table.string("country");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists("locations");
};
