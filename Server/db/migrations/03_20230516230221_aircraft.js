/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("aircraft", (table) => {
        table.increments();
        table.string("aircraftName");
        table.integer("aircraftCount");
        table.integer("personnelCount");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists("aircraft");
};
