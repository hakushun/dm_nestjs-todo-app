import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Store, AnyAction } from 'redux';
import { TodoList, Props } from '../TodoList';
import * as TodoFilterStories from '../../TodoFilter/stories/index.stories';
import * as TodoItemStories from '../../TodoItem/stories/index.stories';

const store: Store<any, AnyAction> = {
	getState: () => ({
		ui: {
			filter: TodoFilterStories.Default.args.filter,
		},
	}),
	subscribe: () => null,
	dispatch: action('dispatch'),
};

export default {
	title: 'organisms/TodoList',
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
	component: TodoList,
} as Meta;

const Template: Story<Props> = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
	...TodoItemStories.Default.args,
	todos: [
		{ id: 1, title: 'title', detail: 'detail' },
		{ id: 2, title: 'title', detail: 'detail' },
		{ id: 3, title: 'title', detail: 'detail' },
	],
};
