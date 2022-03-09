import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'React/Button',
  component: Button,
  argTypes: {
    onButtonClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template;
export const DisabledButton = Template.bind({});

Primary.args = {
  disabled: false,
  label: 'label',
};

DisabledButton.args = {
  disabled: true,
  label: 'label',
};
