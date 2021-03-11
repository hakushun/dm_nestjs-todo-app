import { User } from 'src/auth/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { TodoStatus } from './todo-status';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';
export declare class TodosController {
    private todoService;
    constructor(todoService: TodosService);
    getTodos(filterDto: GetTodosFilterDto, user: User): Promise<Todo[]>;
    getTodoById(id: number, user: User): Promise<Todo>;
    createTodo(todo: CreateTodoDto, user: User): Promise<Todo>;
    deleteTodo(id: number, user: User): Promise<void>;
    updateTodoStatus(id: number, status: TodoStatus, user: User): Promise<Todo>;
}
