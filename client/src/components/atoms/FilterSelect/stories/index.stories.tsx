import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FilterSelect, Props } from '..';

export default {
	title: 'atoms/FilterSelect',
	component: FilterSelect,
} as Meta;

const Template: Story<Props> = (args) => <FilterSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
	method: action('Change'),
};
