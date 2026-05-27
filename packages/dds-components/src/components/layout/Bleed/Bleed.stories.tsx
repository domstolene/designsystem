import preview from '#.storybook/preview';

import { Bleed, type BleedProps } from './Bleed';
import { commonArgTypes, responsivePropsArgTypes } from '../../../storybook';
import { Paper } from '../Paper';
import { StoryVStack } from '../Stack/utils';

const meta = preview.meta({
  title: 'dds-components/Layout Primitives/Bleed',
  component: Bleed,
  argTypes: {
    ...commonArgTypes,
    ...responsivePropsArgTypes,
  },
});

export default meta;

export const Preview = meta.story({
  render: args => {
    return ex({ bleedMarginInline: 'x1', ...args }, 'marginInline bleed');
  },
});

const ex = (props: Omit<BleedProps, 'as'>, text: string) => (
  <Paper
    border="border-default"
    padding="x1"
    background="brand-tertiary-default"
  >
    <Bleed
      {...props}
      style={{ background: 'var(--dds-color-brand-primary-subtle)' }}
    >
      {text}
    </Bleed>
  </Paper>
);

export const Overview = meta.story({
  render: args => {
    return (
      <StoryVStack>
        {ex({ bleedMarginInline: 'x1', ...args }, 'marginInline bleed')}
        {ex({ bleedMarginBlock: 'x1 0', ...args }, 'marginInlineStart bleed')}
        {ex({ bleedMarginBlock: '0 x1', ...args }, 'marginInlineEnd bleed')}
      </StoryVStack>
    );
  },
});

export const ReflectivePadding = meta.story({
  render: args => {
    return (
      <StoryVStack>
        {ex(
          { bleedMarginInline: 'x1', reflectivePadding: true, ...args },
          'marginInline bleed',
        )}
        {ex(
          { bleedMarginInline: 'x1 0', reflectivePadding: true, ...args },
          'marginInlineStart bleed',
        )}
        {ex(
          { bleedMarginInline: '0 x1', reflectivePadding: true, ...args },
          'marginInlineEnd bleed',
        )}
        {ex(
          { bleedMarginBlock: 'x1', reflectivePadding: true, ...args },
          'marginBlock bleed',
        )}
        {ex(
          { bleedMarginBlock: 'x1 0', reflectivePadding: true, ...args },
          'marginBlockStart bleed',
        )}
        {ex(
          { bleedMarginBlock: '0 x1', reflectivePadding: true, ...args },
          'marginInlineEnd bleed',
        )}
      </StoryVStack>
    );
  },
});
