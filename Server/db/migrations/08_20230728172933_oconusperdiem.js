/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("oconusperdiem", (table) => {
        table.string("country");
        table.string("location");
        table.integer("lodging");
        table.integer("mAndI");
        table.integer("perDiem");
        table.integer("locationCode");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("oconusperdiem", (table) => {
        return knex.schema.dropTableIfExists("oconusperdiem");
    });
};
