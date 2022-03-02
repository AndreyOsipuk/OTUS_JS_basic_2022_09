import React from 'react';

import { Button } from './Button';

export default {
  title: 'React/Button',
  component: Button,
  argTypes: {
    onButtonClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template;
export const DisabledButton = Template.bind({});

Primary.args = {
  disabled: false,
  label: "label"
}

DisabledButton.args = {
  disabled: true,
  label: "label"
}


