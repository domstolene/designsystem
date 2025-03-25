import { type Meta, type StoryObj } from '@storybook/react';

import {
  categoryCss,
  htmlPropsArgType,
  responsivePropsArgTypes,
} from '../../../storybook/helpers';

import { Paper } from '.';

const meta: Meta<typeof Paper> = {
  title: 'dds-components/Layout Primitives/Paper',
  component: Paper,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    as: { control: 'text' },
    ...responsivePropsArgTypes,
    elevation: {
      control: { type: 'select' },
      table: categoryCss,
    },
    border: {
      control: { type: 'select' },
      table: categoryCss,
    },
    borderRadius: {
      control: { type: 'select' },
      table: categoryCss,
    },
    tabIndex: htmlPropsArgType,
    role: htmlPropsArgType,
  },
};
export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    border: 'default',
    padding: 'x1.5',
    maxWidth: '20rem',
    children:
      'Dette en en Paper: layout-komponent med støtte for flate-styling',
  },
};
