import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatus } from './todo-status';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { TodoRepository } from './todo.repository';
import { Todo } from './todo.entity';
import { User } from 'src/auth/user.entity';
export declare class TodosService {
    private todoRepository;
    constructor(todoRepository: TodoRepository);
    getTodos(filterDto: GetTodosFilterDto, user: User): Promise<Todo[]>;
    getTodoById(id: number, user: User): Promise<Todo>;
    createTodo(todo: CreateTodoDto, user: User): Promise<Todo>;
    deleteTodo(id: number, user: User): Promise<void>;
    updateTodoStatus(id: number, status: TodoStatus, user: User): Promise<Todo>;
}
