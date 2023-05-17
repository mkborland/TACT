/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("roles", (table) => {
        table.string("roleName");
        table.integer("authKey");
    }).then(() => {
        return knex.schema.alterTable("roles", (table) => {
            table.primary("authKey");
        })
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable("roles", (table) => {
        table.dropPrimary("authKey");
    }).then(() => {
        return knex.schema.dropTableIfExists("roles");
    });
};