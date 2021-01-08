import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavButton, Props } from '..';

export default {
	title: 'atoms/NavButton',
	component: NavButton,
} as Meta;

const Template: Story<Props> = (args) => <NavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: 'Sign Out',
	method: action('click'),
};
