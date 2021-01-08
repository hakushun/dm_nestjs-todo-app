import React from 'react';
import { Todo } from '../../../redux/modules/todos';
import { TodoFilter } from '../TodoFilter';
import { TodoItem } from '../TodoItem';
import styles from './index.module.scss';

export type Props = {
	todos: Todo[];
};

export const TodoList: React.FC<Props> = React.memo((props) => {
	const { todos } = props;

	return (
		<section className={styles.root}>
			<TodoFilter />
			<ul className={styles.list}>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</section>
	);
});
