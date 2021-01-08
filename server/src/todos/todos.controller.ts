import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Query,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { TodoStatusValidationPipe } from './pipes/todo-status-validation.pipe';
import { TodoStatus } from './todo-status';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
@UseGuards(AuthGuard())
export class TodosController {
	constructor(private todoService: TodosService) {}

	@Get()
	getTodos(
		@Query(ValidationPipe) filterDto: GetTodosFilterDto,
		@GetUser() user: User,
	): Promise<Todo[]> {
		return this.todoService.getTodos(filterDto, user);
	}

	@Get(':id')
	getTodoById(
		@Param('id', ParseIntPipe) id: number,
		@GetUser() user: User,
	): Promise<Todo> {
		return this.todoService.getTodoById(id, user);
	}

	@Post()
	@UsePipes(ValidationPipe)
	createTodo(
		@Body() todo: CreateTodoDto,
		@GetUser() user: User,
	): Promise<Todo> {
		return this.todoService.createTodo(todo, user);
	}

	@Delete(':id')
	deleteTodo(
		@Param('id', ParseIntPipe) id: number,
		@GetUser() user: User,
	): Promise<void> {
		return this.todoService.deleteTodo(id, user);
	}

	@Patch(':id/status')
	updateTodoStatus(
		@Param('id', ParseIntPipe) id: number,
		@Body('status', TodoStatusValidationPipe) status: TodoStatus,
		@GetUser() user: User,
	): Promise<Todo> {
		return this.todoService.updateTodoStatus(id, status, user);
	}
}
