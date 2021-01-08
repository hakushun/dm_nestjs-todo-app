import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Signin, Props } from '../Signin';

export default {
	title: 'organisms/Signin',
	component: Signin,
} as Meta;

const Template: Story<Props> = (args) => <Signin {...args} />;

export const SigninForm = Template.bind({});
SigninForm.args = {
	formdata: { username: 'username', password: 'password' },
	isLoading: false,
	handleChange: action('Change'),
	handleSubmit: action('Submit'),
};
