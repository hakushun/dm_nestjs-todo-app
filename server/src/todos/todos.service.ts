import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatus } from './todo-status';
import { Todo } from './todo.entity';
import { knex } from '../../db/knex';

@Injectable()
export class TodosService {
	async getTodos(): Promise<Todo[]> {
		return knex.select().from('todos');
	}

	async getTodoById(id: number): Promise<Todo> {
		const target = await knex
			.select()
			.from('todos')
			.where('id', id);

		if (target.length === 0) {
			throw new NotFoundException();
		}

		return target;
	}

	async createTodo(todo: CreateTodoDto): Promise<Todo> {
		const id = await knex('todos')
			.returning('id')
			.insert({ title: todo.title, detail: todo.detail });
		return knex
			.select()
			.from('todos')
			.where('id', id[0]);
	}

	async deleteTodo(id: number): Promise<void> {
		await this.getTodoById(id);
		await knex('todos')
			.where('id', id)
			.del();
		return;
	}

	async updateTodoStatus(id: number, status: TodoStatus): Promise<Todo> {
		await this.getTodoById(id);
		await knex('todos')
			.where('id', id)
			.update({ status });
		return knex('todos').where('id', id);
	}
}
