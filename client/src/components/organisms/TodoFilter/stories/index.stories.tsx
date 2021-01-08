import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TodoFilter, Props } from '../TodoFilter';

export default {
	title: 'organisms/TodoFilter',
	component: TodoFilter,
} as Meta;

const Template: Story<Props> = (args) => <TodoFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
	filter: {},
	handleFilterTodos: action('Change'),
};
