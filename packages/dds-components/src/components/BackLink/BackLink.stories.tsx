import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { categoryHtml, htmlEventArgType } from '../../storybook';

import { BackLink } from '.';

const meta: Meta<typeof BackLink> = {
  title: 'dds-components/Components/BackLink',
  component: BackLink,
  argTypes: {
    href: {
      table: categoryHtml,
    },
    onClick: htmlEventArgType,
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof BackLink>;

export const Preview: Story = {
  args: { label: 'Forrige nivå', href: '#' },
};

export const As: Story = {
  args: { label: 'Forrige nivå', href: '#', as: 'div' },
};
