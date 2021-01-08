import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, Props } from '../Header';

export default {
	title: 'organisms/Header',
	component: Header,
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const BeforeSignin = Template.bind({});
BeforeSignin.args = {
	userInfo: { username: '' },
	handleLogout: action('onClick'),
};

export const AfterSignin = Template.bind({});
AfterSignin.args = {
	userInfo: { username: 'testuser' },
	handleLogout: action('onClick'),
};
