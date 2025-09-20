import { Meta, StoryObj } from '@storybook/react';
import Textfield from './Textfield';
import { TextfieldProps } from './Textfield.types';

const meta: Meta<TextfieldProps> = {
  title: 'Atoms/Textfield',
  component: Textfield,
  args: {
    label: 'Label',
    placeholder: 'Enter text',
    value: '',
    disabled: false
  },
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<TextfieldProps>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'Hello world',
    onChange: () => {}
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled'
  }
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type your name...',
    value: ''
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    value: ''
  }
};
export const Required: Story = {
  args: {
    type: 'text',
    placeholder: 'This is required',
    value: '',
    required: true
  }
};
export const Multiline: Story = {
  args: {
    type: 'text',
    placeholder: 'This is required',
    value: 'a',
    multiline: true
  }
};
