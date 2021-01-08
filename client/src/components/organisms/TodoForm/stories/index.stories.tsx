import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TodoForm, Props } from '../TodoForm';

export default {
	title: 'organisms/TodoForm',
	component: TodoForm,
} as Meta;

const Template: Story<Props> = (args) => <TodoForm {...args} />;

export const Default = Template.bind({});
Default.args = {
	todo: { title: 'title', detail: 'detail' },
	handleChange: action('Change'),
	handleSubmit: action('Clicked'),
};
