import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { Divider } from '.';

export default {
  title: 'dds-components/Divider',
  component: Divider,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    htmlProps: { control: false },
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <div>
      <Divider {...args} />
      <Divider {...args} color="subtle" />
      <Divider {...args} color="onInverse" />
    </div>
  ),
};

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const OnInverse: Story = {
  args: { color: 'onInverse' },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <div
      style={{
        background: 'var(--dds-color-surface-inverse-default',
        padding: 'var(--dds-spacing-x1',
      }}
    >
      <Divider {...args} />
    </div>
  ),
};

export const Example: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <div>
      <Typography withMargins>
        Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått en
        innkalling (kalles stevning) til saken fordi partene eller retten mener
        du kjenner til noe som kan være viktig for retten å vite. Du har plikt
        til å møte opp i tråd med innkallingen og forklare deg for retten.
      </Typography>
      <Divider {...args} />
      <Typography withMargins>
        En rettssak avgjøres med bakgrunn i det som er kommet fram i rettssalen.
        Derfor må vitner forklare seg for retten slik at dommerne hører
        vitneforklaringen. Det gjelder selv om man tidligere ha forklart seg for
        politiet eller partenes advokat. En vitneforklaring kan avgjøre utfallet
        av en sak, derfor har vitner plikt til å snakke sant.
      </Typography>
    </div>
  ),
};
