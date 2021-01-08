import React from 'react';
import { PrimaryButton } from '../../atoms/PrimaryButton';
import { Form } from '../../molecules/Form';
import { TextInput } from '../../molecules/TextInput';
import styles from './index.module.scss';

export type Props = {
	todo: {
		title: string;
		detail: string;
	};
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export const TodoForm: React.FC<Props> = React.memo((props) => {
	const { todo, handleChange, handleSubmit } = props;

	return (
		<section className={styles.root}>
			<Form legend="Todo Form" submit={handleSubmit}>
				<div className={styles.wrapper}>
					<TextInput
						label="Title:"
						id="todo_title"
						type="text"
						name="title"
						value={todo.title}
						method={handleChange}
					/>
				</div>
				<div className={styles.wrapper}>
					<TextInput
						label="Detail:"
						id="todo_detail"
						type="text"
						name="detail"
						value={todo.detail}
						method={handleChange}
					/>
				</div>
				<div className={styles.wrapper}>
					<PrimaryButton type="submit" text="Create Todo" disabled={false} />
				</div>
			</Form>
		</section>
	);
});
