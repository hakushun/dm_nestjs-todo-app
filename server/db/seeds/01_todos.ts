import * as Knex from "knex";

export const seed = async function(knex: Knex) {
	// Deletes ALL existing entries
	return knex('todos')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('todos').insert([
				{ id: 1, title: 'title1', detail: 'detail1', status: 'OPEN' },
				{ id: 2, title: 'title2', detail: 'detail2', status: 'OPEN' },
				{ id: 3, title: 'title3', detail: 'detail3', status: 'OPEN' },
			]);
		});
};
