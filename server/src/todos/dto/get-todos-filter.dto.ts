import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TodoStatus } from '../todo-status';

export class GetTodosFilterDto {
  @IsOptional()
  @IsIn([TodoStatus.OPEN, TodoStatus.IN_PROGRESS, TodoStatus.DONE])
  status: TodoStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
