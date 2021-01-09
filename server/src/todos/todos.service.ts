import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatus } from './todo-status';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
	async getTodos(): Promise<Todo[]> {
		return;
	}

	async getTodoById(id: number): Promise<Todo> {
		return;
	}

	async createTodo(todo: CreateTodoDto): Promise<Todo> {
		return;
	}

	async deleteTodo(id: number): Promise<void> {
		return;
	}

	async updateTodoStatus(
		id: number,
		status: TodoStatus,
	): Promise<Todo> {
		return;
	}
}
