import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    type: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    type: 'secondary'
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'small'
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'medium'
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'large'
  },
};
