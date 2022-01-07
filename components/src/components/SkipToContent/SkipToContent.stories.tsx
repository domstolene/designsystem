import { StoryTemplate } from '../../storybook/StoryTemplate';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { SkipToContent, SkipToContentProps } from '.';
import { Typography } from '../Typography';

const { colors: Colors } = ddsBaseTokens;

export default {
  title: 'Design system/SkipToContent',
  component: SkipToContent,
  argTypes: {
    text: { control: { type: 'text' } },
    top: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'href']
    }
  }
};

export const Overview = () => (
  <StoryTemplate title="Skip to content - overview">
    <div style={{ position: 'relative' }}>
      <SkipToContent href="#innhold" />
      <SkipToContent href="#innhold" top={'30px'} text="Alternativ tekst" />
      'Tab' for å se komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>
);

export const Default = (args: SkipToContentProps) => (
  <StoryTemplate title="Skip to content - default">
    <div style={{ position: 'relative' }}>
      <SkipToContent href="#innhold" {...args} />
      'Tab' for å se komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>
);

export const Example = (args: SkipToContentProps) => (
  <StoryTemplate title="Skip to content - example">
    <div style={{ position: 'relative' }}>
      <SkipToContent href="#innhold" {...args} />
      'Tab' for å se komponenten
      <Typography typographyType="headingSans08" withMargins>
        Placeholder
      </Typography>
      <div
        style={{
          height: '800px',
          backgroundColor: Colors.DdsColorPrimaryLightest
        }}
      ></div>
      <Typography id="innhold" withMargins>
        Innhold
      </Typography>
    </div>
  </StoryTemplate>
);
