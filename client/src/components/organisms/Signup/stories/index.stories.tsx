import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Signup, Props } from '../Signup';

export default {
	title: 'organisms/Signup',
	component: Signup,
} as Meta;

const Template: Story<Props> = (args) => <Signup {...args} />;

export const SignupForm = Template.bind({});
SignupForm.args = {
	formdata: { username: 'username', password: 'password' },
	isLoading: false,
	handleChange: action('Change'),
	handleSubmit: action('Submit'),
};
