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

export const Others: StoryObj<typeof Button> = {
  render: () => (
    <div className='border'>
      <Button variant='default' className='p-7' style={{ color: 'yellow' }}>
        Primary
      </Button>
      <Button variant='primary' className='p-7'>
        Primary
      </Button>
      <Button onClick={() => alert('danger')} variant='danger' className='p-7'>
        Danger
      </Button>
    </div>
  ),
};

export default meta;
