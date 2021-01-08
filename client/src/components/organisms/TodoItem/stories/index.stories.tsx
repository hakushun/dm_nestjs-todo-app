import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TodoItem, Props } from '../TodoItem';

export default {
	title: 'organisms/TodoItem',
	component: TodoItem,
} as Meta;

const Template: Story<Props> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	todo: { id: 1, title: 'title', detail: 'detail', status: 'OPEN' },
	handleSelectStatus: action('Change'),
	handleRemoveTodo: action('Clicked'),
};
