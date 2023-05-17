/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("authentication", (table) => {
        table.integer("userID");
        table.foreign("userID").references("users.userID");
        table.integer("authKey");
        table.foreign("authKey").references("roles.authKey");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("authentication", (table) => {
        table.dropForeign("userID");
        table.dropForeign("authKey");
    }).then(() => {
        return knex.schema.dropTableIfExists("authentication");
    });
};
