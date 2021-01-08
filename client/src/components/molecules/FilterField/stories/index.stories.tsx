import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FilterField, Props } from '..';
import * as FilterSelectStories from '../../../atoms/FilterSelect/stories/index.stories';

export default {
	title: 'molecules/FilterField',
	component: FilterField,
} as Meta;

const Template: Story<Props> = (args) => <FilterField {...args} />;

export const Default = Template.bind({});
Default.args = {
	...FilterSelectStories.Default.args,
};
