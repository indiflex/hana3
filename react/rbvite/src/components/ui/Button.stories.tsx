import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Sign In',
  },
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    variant: 'danger',
  },
  render: (args) => <Button {...args}>Remove</Button>,
};

export default meta;
