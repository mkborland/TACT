/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("users", (table) => {
        table.string("userName");
        table.integer("userID");
        table.string("userPass");
    }).then(() => {
        return knex.schema.alterTable("users", (table) => {
            table.primary("userID");
        })
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("users", (table) => {
        table.dropPrimary("userID");
    }).then(() => {
        return knex.schema.dropTableIfExists("users");
    });
};
