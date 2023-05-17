/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("exercises", (table) => {
        table.increments();
        table.string("exerciseName");
        table.date("dateCreated");
        table.string("locationStart");
        table.string("locationEnd");
        table.string("unit");
        table.date("exerciseDateStart");
        table.date("exerciseDateEnd");
        table.integer("personnelNumber");
        table.string("airfareType");
        table.decimal("airfareCost");
        table.integer("kc135Num");
        table.integer("c130Num");
        table.integer("c17Num");
        table.integer("c5Num");
        table.integer("f22Num");
        table.integer("f35Num");
        table.integer("a10Num");
        table.integer("f15cNum");
        table.integer("kc135Persons");
        table.integer("c130Persons");
        table.integer("c17Persons");
        table.integer("c5Persons");
        table.integer("f22Persons");
        table.integer("f35Persons");
        table.integer("a10Persons");
        table.integer("f15cPersons");
        table.integer("govLodging");
        table.decimal("govLodgingCost");
        table.integer("commercialHotel");
        table.decimal("commercialHotelCost");
        table.integer("fieldConditions");
        table.decimal("perDiem");
        table.integer("mealsProvided");
        table.decimal("foodPerDiem");
        table.integer("userID");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists("exercises");
};
