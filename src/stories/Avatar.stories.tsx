import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import logo from '../logo.svg'

import Avatar from '../components/Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultCircle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCircle.args = {
  size: 'default',
  shape: 'circle',
  src: logo,
  style: { cursor: 'pointer' },
  alt: 'logo'
};

export const DefaultRect = Template.bind({});
DefaultRect.args = {
  size: 'default',
  shape: 'rect',
  src: logo,
  style: { cursor: 'pointer' },
  alt: 'logo'
};
