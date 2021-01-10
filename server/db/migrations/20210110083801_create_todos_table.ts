import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('todos', table => {
		table.increments();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
		table.string('title').notNullable();
		table.string('detail').notNullable();
		table.string('status').defaultTo('OPEN');
	})
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('todos');
}

