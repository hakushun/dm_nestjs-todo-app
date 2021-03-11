import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
import { TodoStatus } from './todo-status';
export declare class Todo extends BaseEntity {
    id: number;
    title: string;
    detail: string;
    status: TodoStatus;
    user: User;
    userId: number;
}
