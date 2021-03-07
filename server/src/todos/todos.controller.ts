import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Render,
	Req,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatusValidationPipe } from './pipes/todo-status-validation.pipe';
import { TodoStatus } from './todo-status';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
	constructor(private todoService: TodosService) {}

	@Get()
  @Render('todos')
	async getTodos(@Req() req: Request): Promise<{ todos: Todo[]; csrfToken: string; }> {
		const todos = await this.todoService.getTodos()
		return { todos, csrfToken: req.csrfToken() };
	}

	@Get(':id')
	getTodoById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
		return this.todoService.getTodoById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	createTodo(@Body() todo: CreateTodoDto): Promise<Todo> {
		return this.todoService.createTodo(todo);
	}

	@Delete(':id')
	deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.todoService.deleteTodo(id);
	}

	@Patch(':id/status')
	updateTodoStatus(
		@Param('id', ParseIntPipe) id: number,
		@Body('status', TodoStatusValidationPipe) status: TodoStatus,
	): Promise<Todo> {
		return this.todoService.updateTodoStatus(id, status);
	}
}
