import { type Meta, type StoryObj } from '@storybook/react';

import { LocalMessage } from '../LocalMessage';

import { ThemeProvider } from '.';

export default {
  title: 'dds-components/Components/ThemeProvider',
  component: ThemeProvider,
} satisfies Meta<typeof ThemeProvider>;

type Story = StoryObj<typeof ThemeProvider>;

export const Preview: Story = {
  args: {
    theme: 'public',
  },
  render: args => (
    <ThemeProvider {...args}>
      Tema: {args.theme}
      <LocalMessage>
        Tema her er avhengig av kontrollere under, ikke toggle bar på toppen til
        høyre.
      </LocalMessage>
    </ThemeProvider>
  ),
};
