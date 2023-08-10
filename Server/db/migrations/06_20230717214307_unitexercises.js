/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("unitexercises", (table) => {
        table.increments("unitExerciseID");
        table.integer("exerciseID");
        table.foreign("exerciseID").references("exercises.exerciseID");
        table.boolean("status");
        table.date("dateCreated");
        table.string("locationFrom");
        // table.foreign("locationFrom").references("locations.locationID");
        table.string("locationTo");
        // table.foreign("locationTo").references("locations.locationID");
        table.date("travelStartDate");
        table.date("travelEndDate");
        table.string("unit");
        table.integer("userID");
        table.foreign("userID").references("users.userID");
        table.integer("personnelSum");
        table.decimal("unitCostSum");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("unitexercises", (table) => {
        table.dropForeign("userID");
        table.dropForeign("exerciseID");
//        table.dropForeign("locationFrom");
//        table.dropForeign("locationTo");
    }).then(() => {
        return knex.schema.dropTableIfExists("unitexercises");
    });
};
