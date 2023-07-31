/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("userID");
        table.string("firstName");
        table.string("lastName");
        table.string("email");
        table.string("unit");
        table.integer("roleID");
        table.foreign("roleID").references("roles.roleID").onDelete("CASCADE");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("users", (table) => {
        table.dropForeign("roleID");
    }).then(() => {
        return knex.schema.dropTableIfExists("users");
    });
};
