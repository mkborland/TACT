/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("roles", (table) => {
        table.string("roleName");
        table.integer("roleID");
    }).then(() => {
        return knex.schema.alterTable("roles", (table) => {
            table.primary("roleID");
        })
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    // i dont think i need this but leaving just in case
    // return knex.schema.alterTable("roles", (table) => {
    //     table.dropPrimary("authKey");
    // }).then(() => {
    return knex.schema.dropTableIfExists("roles");
    // });
};
