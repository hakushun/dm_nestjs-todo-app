import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatusSelect, Props } from '..';

export default {
	title: 'atoms/StatusSelect',
	component: StatusSelect,
} as Meta;

const Template: Story<Props> = (args) => <StatusSelect {...args} />;

export const Default = Template.bind({});
