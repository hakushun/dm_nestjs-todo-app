import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatus } from './todo-status';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from './todo.repository';
import { Todo } from './todo.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TodosService {
	constructor(
		@InjectRepository(TodoRepository)
		private todoRepository: TodoRepository,
	) {}

	async getTodos(filterDto: GetTodosFilterDto, user: User): Promise<Todo[]> {
		return this.todoRepository.getTodos(filterDto, user);
	}

	async getTodoById(id: number, user: User): Promise<Todo> {
		const target = await this.todoRepository.findOne({
			where: { id, userId: user.id },
		});

		if (!target) {
			throw new NotFoundException();
		}
		return target;
	}

	async createTodo(todo: CreateTodoDto, user: User): Promise<Todo> {
		return this.todoRepository.createTodo(todo, user);
	}

	async deleteTodo(id: number, user: User): Promise<void> {
		const result = await this.todoRepository.delete({ id, userId: user.id });

		if (result.affected === 0) {
			throw new NotFoundException();
		}
	}

	async updateTodoStatus(
		id: number,
		status: TodoStatus,
		user: User,
	): Promise<Todo> {
		const todo = await this.getTodoById(id, user);
		todo.status = status;
		await todo.save();
		return todo;
	}
}
