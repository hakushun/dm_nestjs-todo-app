import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TodoStatus } from '../todo-status';

export class TodoStatusValidationPipe implements PipeTransform {
	readonly allowedStatus = [
		TodoStatus.OPEN,
		TodoStatus.IN_PROGRESS,
		TodoStatus.DONE,
	];

	transform(value: any) {
		if (!this.isStatusValid(value)) {
			throw new BadRequestException();
		}
		return value;
	}

	private isStatusValid(status: any) {
		// allowedStatusにstatusが含まれていなければ-1を返す
		const index = this.allowedStatus.indexOf(status);

		// -1ならinvalidとしてfalseを返す
		return index !== -1;
	}
}
