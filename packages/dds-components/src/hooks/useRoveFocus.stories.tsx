import type { Meta, StoryObj } from '@storybook/react';

import { UseRoveFocusExample } from './UseRoveFocusExample';

export default {
  title: 'dds-components/Hooks/useRoveFocus',
  component: UseRoveFocusExample,
  argTypes: {
    active: {
      control: 'boolean',
      description:
        'Om fokus skal kontrolleres av hooken. Når status blir inaktiv vil fokusrekkefølge nullstilles.',
    },
    direction: {
      control: { type: 'select', options: ['column', 'row'] },
      description: 'Retningen elementene blas i.',
    },
    noWrap: {
      control: 'boolean',
      description:
        "Om indeksen skal 'wrappe' rundt til 0 hvis den går over size - 1, eller til size - 1 hvis den går under 0.",
    },
  },
} as Meta<typeof UseRoveFocusExample>;

type Story = StoryObj<typeof UseRoveFocusExample>;
export const Default: Story = {
  args: {
    active: true,
    direction: 'column',
  },
};
