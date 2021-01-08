import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField, Props } from '..';

export default {
	title: 'atoms/TextField',
	component: TextField,
} as Meta;

const Template: Story<Props> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'username',
	type: 'text',
	name: 'username',
};

export const Password = Template.bind({});
Password.args = {
	id: 'password',
	type: 'password',
	name: 'password',
};
