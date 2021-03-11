"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const todo_status_1 = require("../todo-status");
class TodoStatusValidationPipe {
    constructor() {
        this.allowedStatus = [
            todo_status_1.TodoStatus.OPEN,
            todo_status_1.TodoStatus.IN_PROGRESS,
            todo_status_1.TodoStatus.DONE,
        ];
    }
    transform(value) {
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException();
        }
        return value;
    }
    isStatusValid(status) {
        const index = this.allowedStatus.indexOf(status);
        return index !== -1;
    }
}
exports.TodoStatusValidationPipe = TodoStatusValidationPipe;
//# sourceMappingURL=todo-status-validation.pipe.js.map