/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("userID");
        table.string("userName");
        table.string("userPass");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    // i dont think i need this but leaving just in case
    // return knex.schema.alterTable("users", (table) => {
    //     table.dropPrimary("userID");
    // })
    //     .then(() => {
    return knex.schema.dropTableIfExists("users");
    // });
};
