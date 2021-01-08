import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextInput, Props } from '..';

export default {
	title: 'molecules/TextInput',
	component: TextInput,
} as Meta;

const Template: Story<Props> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Username:',
	id: 'username',
	type: 'text',
	name: 'username',
};

export const Password = Template.bind({});
Password.args = {
	label: 'Password:',
	id: 'password',
	type: 'text',
	name: 'password',
};
