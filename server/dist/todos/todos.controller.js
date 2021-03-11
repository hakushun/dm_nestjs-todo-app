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
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const user_entity_1 = require("../auth/user.entity");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const get_todos_filter_dto_1 = require("./dto/get-todos-filter.dto");
const todo_status_validation_pipe_1 = require("./pipes/todo-status-validation.pipe");
const todo_status_1 = require("./todo-status");
const todos_service_1 = require("./todos.service");
let TodosController = class TodosController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getTodos(filterDto, user) {
        return this.todoService.getTodos(filterDto, user);
    }
    getTodoById(id, user) {
        return this.todoService.getTodoById(id, user);
    }
    createTodo(todo, user) {
        return this.todoService.createTodo(todo, user);
    }
    deleteTodo(id, user) {
        return this.todoService.deleteTodo(id, user);
    }
    updateTodoStatus(id, status, user) {
        return this.todoService.updateTodoStatus(id, status, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_todos_filter_dto_1.GetTodosFilterDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "getTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "getTodoById", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "createTodo", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "deleteTodo", null);
__decorate([
    common_1.Patch(':id/status'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body('status', todo_status_validation_pipe_1.TodoStatusValidationPipe)),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "updateTodoStatus", null);
TodosController = __decorate([
    common_1.Controller('todos'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
exports.TodosController = TodosController;
//# sourceMappingURL=todos.controller.js.map