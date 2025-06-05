import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseRoveFocusExample } from './UseRoveFocusExample';

export default {
  title: 'dds-components/Hooks/useRoveFocus',
  component: UseRoveFocusExample,
  parameters: {
    disableGlobalDecorator: true,
  },
  argTypes: {
    active: {
      control: 'boolean',
      description:
        'Om fokus skal kontrolleres av hooken. Når status blir inaktiv vil fokusrekkefølge nullstilles.',
      table: { defaultValue: { summary: 'false' } },
    },
    direction: {
      control: { type: 'select', options: ['column', 'row', undefined] },
      description: 'Retningen elementene blas i.',
      table: { defaultValue: { summary: 'column' } },
    },
    noWrap: {
      control: 'boolean',
      description:
        "Om indeksen skal 'wrappe' rundt til 0 hvis den går over size - 1, eller til size - 1 hvis den går under 0.",
      table: { defaultValue: { summary: 'false' } },
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
