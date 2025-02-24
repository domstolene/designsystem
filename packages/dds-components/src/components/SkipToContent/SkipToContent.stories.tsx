import { type Meta, type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../storybook/helpers';
import { Heading } from '../Typography';

import { SkipToContent } from '.';

export default {
  title: 'dds-components/SkipToContent',
  component: SkipToContent,
  argTypes: {
    top: { control: 'text' },
    htmlProps: htmlPropsArgType,
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
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
};

export const Overview: Story = {
  args: { href: '#innhold' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      <SkipToContent {...args} top={'30px'} text="Alternativ tekst" />
      'Tab' når du er i frame for å se varianter av komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
};

export const Example: Story = {
  args: { href: '#innhold' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten; 'Enter' for å åpne i ny side
      og teste
      <Heading level={2} typographyType="headingXxlarge" withMargins>
        Placeholder
      </Heading>
      <div
        style={{
          height: '1000px',
          backgroundColor: 'var(--dds-color-brand-primary-subtle)',
        }}
      >
        Placeholder
      </div>
      <main id="innhold">Innhold</main>
    </div>
  ),
};
