import preview from '#.storybook/preview';

import { categoryCss, commonArgTypes } from '../../storybook';

import { SkipToContent } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/SkipToContent',
  component: SkipToContent,
  argTypes: {
    top: { control: 'text', table: categoryCss },
    ...commonArgTypes,
  },
});

export default meta;

export const Preview = meta.story({
  args: { href: '#innhold' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
});

export const CustomTop = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { href: '#innhold', top: '30px' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
});

export const CustomText = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { href: '#innhold', text: 'Alternativ tekst' },
  render: args => (
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} />
      'Tab' når du er i frame for å se komponenten
      <main id="innhold">Innhold</main>
    </div>
  ),
});
