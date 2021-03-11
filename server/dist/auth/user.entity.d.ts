import { BaseEntity } from 'typeorm';
import { Todo } from 'src/todos/todo.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    todos: Todo[];
    validatePassword(password: string): Promise<boolean>;
}
