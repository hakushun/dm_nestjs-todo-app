import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchInput, Props } from '..';

export default {
	title: 'molecules/SearchInput',
	component: SearchInput,
} as Meta;

const Template: Story<Props> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	method: action('Change'),
};
