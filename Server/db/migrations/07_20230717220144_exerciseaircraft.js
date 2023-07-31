/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("exerciseaircraft", (table) => {
        table.integer("unitExerciseID");
        table.foreign("unitExerciseID").references("unitexercises.unitExerciseID");
        table.string("aircraftType");
        table.integer("aircraftCount");
        table.integer("personnelCount");
        table.integer("commercialAirfareCount");
        table.decimal("commercialAirfareCost");
        table.integer("governmentAirfareCount");
        table.integer("commercialLodgingCount");
        table.decimal("commercialLodgingCost");
        table.integer("governmentLodgingCount");
        table.decimal("governmentLodgingCost");
        table.integer("fieldLodgingCount");
        table.decimal("lodgingPerDiem");
        table.decimal("mealPerDiem");
        table.integer("mealProvidedCount");
        table.integer("mealNotProvidedCount");
        table.integer("rentalCount");
        table.decimal("rentalCost");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("exerciseaircraft", (table) => {
        table.dropForeign("unitExerciseID");
    }).then(() => {
        return knex.schema.dropTableIfExists("exerciseaircraft");
    });
};
