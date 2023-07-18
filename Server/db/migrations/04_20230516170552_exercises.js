/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("exercises", (table) => {
        table.increments("exerciseID");
        table.string("exerciseName");
        table.boolean("status");
        table.date("dateCreated");
        table.string("location");
        table.date("exerciseStartDate");
        table.date("exerciseEndDate");
        table.integer("userID");
        table.foreign("userID").references("users.userID");
        table.integer("personnelSum");
        table.decimal("costSum");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("exercises", (table) => {
        table.dropForeign("userID");
    }).then(() => {
        return knex.schema.dropTableIfExists("exercises");
    });
};
