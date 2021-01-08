import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo } from '..';

export default {
	title: 'atoms/Logo',
	component: Logo,
} as Meta;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
