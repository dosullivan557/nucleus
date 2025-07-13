import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  args: {
    options: ['Option 1', 'Option 2', 'Option 3']
  },
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
