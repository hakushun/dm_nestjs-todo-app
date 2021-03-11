"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
const todo_status_1 = require("./todo-status");
const todo_entity_1 = require("./todo.entity");
let TodoRepository = class TodoRepository extends typeorm_1.Repository {
    async getTodos(filterDto, user) {
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
    async createTodo(createTodoDto, user) {
        const { title, detail } = createTodoDto;
        const todo = new todo_entity_1.Todo();
        todo.title = title;
        todo.detail = detail;
        todo.status = todo_status_1.TodoStatus.OPEN;
        todo.user = user;
        await todo.save();
        delete todo.user;
        return todo;
    }
};
TodoRepository = __decorate([
    typeorm_1.EntityRepository(todo_entity_1.Todo)
], TodoRepository);
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo.repository.js.map