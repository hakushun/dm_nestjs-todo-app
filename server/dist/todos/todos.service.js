"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_repository_1 = require("./todo.repository");
const user_entity_1 = require("../auth/user.entity");
let TodosService = class TodosService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async getTodos(filterDto, user) {
        return this.todoRepository.getTodos(filterDto, user);
    }
    async getTodoById(id, user) {
        const target = await this.todoRepository.findOne({
            where: { id, userId: user.id },
        });
        if (!target) {
            throw new common_1.NotFoundException();
        }
        return target;
    }
    async createTodo(todo, user) {
        return this.todoRepository.createTodo(todo, user);
    }
    async deleteTodo(id, user) {
        const result = await this.todoRepository.delete({ id, userId: user.id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException();
        }
    }
    async updateTodoStatus(id, status, user) {
        const todo = await this.getTodoById(id, user);
        todo.status = status;
        await todo.save();
        return todo;
    }
};
TodosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_repository_1.TodoRepository)),
    __metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map