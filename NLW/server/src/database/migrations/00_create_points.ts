import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    });
}
export async function down(knex: Knex){
    // rollback
    return knex.schema.dropTable('points');
}