import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignForm, Props } from '..';

export default {
	title: 'organisms/SignForm',
	component: SignForm,
} as Meta;

const Template: Story<Props> = (args) => <SignForm {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'signin',
	username: 'username',
	password: 'password',
	legend: 'SignIn Form',
	text: 'Sign In',
	disabled: false,
	submit: action('Clicked'),
};
