import React from 'react';
import { Todo, TodoStatus } from '../../../redux/modules/todos';
import { SecondaryButton } from '../../atoms/SecondaryButton';
import { StatusSelect } from '../../atoms/StatusSelect';
import styles from './index.module.scss';

export type Props = {
	todo: Todo;
	handleSelectStatus: (id: number, status: TodoStatus) => void;
	handleRemoveTodo: (
		id: number,
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
};

export const TodoItem: React.FC<Props> = React.memo((props) => {
	const { todo, handleSelectStatus, handleRemoveTodo } = props;

	return (
		<li className={styles.root} key={todo.id}>
			<div>
				<div className={styles.todo}>{todo.title}</div>
				<div className={styles.todo}>{todo.detail}</div>
			</div>
			<div className={styles.action}>
				<StatusSelect
					value={todo.status}
					method={(e) =>
						handleSelectStatus(todo.id, e.target.value as TodoStatus)
					}
				/>
				<div className={styles.wrapper}>
					<SecondaryButton
						type="button"
						text="Delete"
						disabled={false}
						method={(e) => handleRemoveTodo(todo.id, e)}
					/>
				</div>
			</div>
		</li>
	);
});
