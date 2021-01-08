import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form, Props } from '..';

export default {
	title: 'molecules/Form',
	component: Form,
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
	legend: 'SignIn Form',
};
