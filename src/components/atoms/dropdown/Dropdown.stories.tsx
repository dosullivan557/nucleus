/* eslint-disable no-console*/
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownType } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  args: {},
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};

export const CountrySelect: Story = {
  args: {
    type: DropdownType.country,
    onChange: (value) => console.log(value),
    className: 'custom-dropdown-class'
  }
};
