import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchField, Props } from '..';

export default {
	title: 'atoms/SearchField',
	component: SearchField,
} as Meta;

const Template: Story<Props> = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'search',
	type: 'text',
	name: 'search',
	method: action('Change'),
};
