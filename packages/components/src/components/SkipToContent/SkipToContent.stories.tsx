import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { SkipToContent, SkipToContentProps } from '.';
import { Typography } from '@norges-domstoler/dds-typography';

const { colors: Colors } = ddsBaseTokens;

export default {
  title: 'dds-components/SkipToContent',
  component: SkipToContent,
  argTypes: {
    text: { control: { type: 'text' } },
    top: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'href'],
    },
  },
};

export const Overview = () => (
  <StoryTemplate title="Skip to content - overview" display="block">
    <div style={{ position: 'relative' }}>
      <SkipToContent href="#innhold" />
      <SkipToContent href="#innhold" top={'30px'} text="Alternativ tekst" />
      'Tab' når du er i frame for å se varianter av komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>
);

export const Default = (args: SkipToContentProps) => (
  <StoryTemplate title="Skip to content - default" display="block">
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} href="#innhold" />
      'Tab' når du er i frame for å se komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>
);

export const Example = (args: SkipToContentProps) => (
  <StoryTemplate title="Skip to content - example" display="block">
    <div style={{ position: 'relative' }}>
      <SkipToContent {...args} href="#innhold" />
      'Tab' når du er i frame for å se komponenten; 'Enter' for å åpne i ny side
      og teste
      <Typography typographyType="headingSans08" withMargins>
        Placeholder
      </Typography>
      <div
        style={{
          height: '800px',
          backgroundColor: Colors.DdsColorPrimaryLightest,
        }}
      >
        Placeholder
      </div>
      <Typography id="innhold" withMargins>
        Innhold
      </Typography>
    </div>
  </StoryTemplate>
);
