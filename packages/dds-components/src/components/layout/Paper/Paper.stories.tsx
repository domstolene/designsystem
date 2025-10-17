import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  CSSSelectArgType,
  htmlArgType,
  responsivePropsArgTypes,
} from '../../../storybook';

import { Paper } from '.';

const meta: Meta<typeof Paper> = {
  title: 'dds-components/Layout Primitives/Paper',
  component: Paper,
  argTypes: {
    as: { control: 'text' },
    ...responsivePropsArgTypes,
    elevation: CSSSelectArgType,
    border: CSSSelectArgType,
    borderRadius: CSSSelectArgType,
    background: CSSSelectArgType,
    tabIndex: htmlArgType,
    role: htmlArgType,
  },
};
export default meta;

type Story = StoryObj<typeof Paper>;

export const Preview: Story = {
  args: {
    border: 'border-default',
    padding: 'x1.5',
    maxWidth: '20rem',
    children:
      'Dette er en Paper: layout-komponent med støtte for flate-styling',
  },
};

export const Styled: Story = {
  args: {
    border: 'border-default',
    background: 'surface-info-default',
    elevation: 2,
    padding: 'x1.5',
    maxWidth: '20rem',
    children: 'Dette er en styled Paper',
  },
};

export const Branded: Story = {
  args: {
    background: 'brand-secondary-subtle',
    elevation: 2,
    padding: 'x1.5',
    maxWidth: '20rem',
    children: 'Dette er en branded Paper',
  },
};
