import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { SkipToContent } from '.';

const { colors: Colors } = ddsBaseTokens;

export default {
  title: 'dds-components/SkipToContent',
  component: SkipToContent,
  argTypes: {
    text: { control: 'text' },
    top: { control: 'text' },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof SkipToContent>;

type Story = StoryObj<typeof SkipToContent>;

export const Default: Story = {
  args: { href: '#innhold' },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  ),
};

export const Overview: Story = {
  args: { href: '#innhold' },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      <SkipToContent {...args} top={'30px'} text="Alternativ tekst" />
      'Tab' når du er i frame for å se varianter av komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  ),
};

export const Example: Story = {
  args: { href: '#innhold' },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten; 'Enter' for å åpne i ny side
      og teste
      <Typography typographyType="headingSans08" withMargins>
        Placeholder
      </Typography>
      <div
        style={{
          height: '1000px',
          backgroundColor: Colors.DdsColorPrimaryLightest,
        }}
      >
        Placeholder
      </div>
      <Typography id="innhold" withMargins>
        Innhold
      </Typography>
    </div>
  ),
};
