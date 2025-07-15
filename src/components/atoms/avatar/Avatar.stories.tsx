import { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'Default Avatar'
  }
};

export const WithCustomClass: Story = {
  args: {
    name: 'Custom Class Avatar'
  }
};

export const SingleWord: Story = {
  args: {
    name: 'Danny'
  }
};
