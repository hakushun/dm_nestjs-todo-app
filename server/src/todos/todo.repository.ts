import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { TodoStatus } from './todo-status';
import { Todo } from './todo.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
	async getTodos(filterDto: GetTodosFilterDto, user: User): Promise<Todo[]> {
		const { status, search } = filterDto;
		const query = this.createQueryBuilder('todo');

		query.where('todo.userId = :userId', { userId: user.id });

		if (status) {
			query.andWhere('todo.status = :status', { status });
		}
		if (search) {
			query.andWhere('(todo.title LIKE :search OR todo.detail LIKE :search)', {
				search: `%${search}%`,
			});
		}

		const todos = await query.getMany();
		return todos;
	}

	async createTodo(createTodoDto: CreateTodoDto , user: User): Promise<Todo> {
		const { title, detail } = createTodoDto;

		const todo = new Todo();
		todo.title = title;
		todo.detail = detail;
		todo.status = TodoStatus.OPEN;
		todo.user = user;
		await todo.save();

		// responseにはuser情報は含めたくないから削除（DBからは消えない）
		delete todo.user;
		return todo;
	}
}
