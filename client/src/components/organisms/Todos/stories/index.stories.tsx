import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Store, AnyAction } from 'redux';
import { Todos } from '../Todos';
import * as TodoFormStories from '../../TodoForm/stories/index.stories';
import * as TodoFilterStories from '../../TodoFilter/stories/index.stories';
import * as TodoListStories from '../../TodoList/stories/index.stories';

const store: Store<any, AnyAction> = {
	getState: () => ({
		resources: {
			todos: {
				todos: TodoListStories.Default.args.todos,
				isLoading: false,
			},
		},
		ui: {
			todo: TodoFormStories.Default.args.todo,
			filter: TodoFilterStories.Default.args.filter,
			user: {
				isLoading: false,
			},
		},
	}),
	subscribe: () => null,
	dispatch: action('dispatch'),
};

export default {
	title: 'organisms/Todos',
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
	component: Todos,
} as Meta;

const Template: Story = (args) => <Todos {...args} />;

export const Default = Template.bind({});
