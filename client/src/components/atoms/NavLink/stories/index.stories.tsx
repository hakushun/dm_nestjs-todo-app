import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavLink, Props } from '..';

export default {
	title: 'atoms/NavLink',
	component: NavLink,
} as Meta;

const Template: Story<Props> = (args) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	path: '/signin',
	text: 'Sign In',
};
