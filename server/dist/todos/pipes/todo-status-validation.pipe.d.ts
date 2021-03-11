import { PipeTransform } from '@nestjs/common';
import { TodoStatus } from '../todo-status';
export declare class TodoStatusValidationPipe implements PipeTransform {
    readonly allowedStatus: TodoStatus[];
    transform(value: any): any;
    private isStatusValid;
}
