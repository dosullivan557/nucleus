import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
    title: 'Atoms/Chip',
    component: Chip,
    argTypes: {
        label: { control: 'text' },
        color: { control: 'color' },
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        label: 'Default Chip',
    },
};

export const WithCustomClass: Story = {
    args: {
        label: 'Custom Class Chip',
        className: 'custom-chip-class',
    },
};