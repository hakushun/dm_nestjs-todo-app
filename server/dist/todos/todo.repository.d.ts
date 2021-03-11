import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { Todo } from './todo.entity';
export declare class TodoRepository extends Repository<Todo> {
    getTodos(filterDto: GetTodosFilterDto, user: User): Promise<Todo[]>;
    createTodo(createTodoDto: CreateTodoDto, user: User): Promise<Todo>;
}
