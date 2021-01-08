import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavList, Props } from '..';

export default {
	title: 'molecules/NavList',
	component: NavList,
} as Meta;

const Template: Story<Props> = (args) => <NavList {...args} />;

export const Default = Template.bind({});
Default.args = {
	username: '',
};
