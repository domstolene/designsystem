import { type Meta, type StoryObj } from '@storybook/react-vite';

import { categoryCss, commonArgTypes } from '../../storybook';

import { SkipToContent } from '.';

export default {
  title: 'dds-components/Components/SkipToContent',
  component: SkipToContent,
  argTypes: {
    top: { control: 'text', table: categoryCss },
    ...commonArgTypes,
  },
} satisfies Meta<typeof SkipToContent>;

type Story = StoryObj<typeof SkipToContent>;

export const Preview: Story = {
  args: { href: '#innhold' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
};

export const CustomTop: Story = {
  args: { href: '#innhold', top: '30px' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
};

export const CustomText: Story = {
  args: { href: '#innhold', text: 'Alternativ tekst' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
};
