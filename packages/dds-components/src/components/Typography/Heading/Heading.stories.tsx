import preview from '#.storybook/preview';

import { ddsProviderDecorator } from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/storybook-utils';
import { blockTgCommonArgTypes } from '../storybook-utils/storyUtils';
import { TG_HEADING_TYPES } from '../Typography';

import { Heading } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Heading',
  component: Heading,
  argTypes: {
    ...blockTgCommonArgTypes,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Heading', level: 1 },
});

export const LevelDefaults = meta.story({
  args: { level: 1 },
  render: args => (
    <StoryVStack>
      <Heading {...args} level={1}>
        Heading 1
      </Heading>
      <Heading {...args} level={2}>
        Heading 2
      </Heading>
      <Heading {...args} level={3}>
        Heading 3
      </Heading>
      <Heading {...args} level={4}>
        Heading 4
      </Heading>
      <Heading {...args} level={5}>
        Heading 5
      </Heading>
      <Heading {...args} level={6}>
        Heading 6
      </Heading>
    </StoryVStack>
  ),
});

export const TypographyStyles = meta.story({
  args: { level: 1 },
  render: args => (
    <StoryVStack>
      {TG_HEADING_TYPES.map(tg => (
        <Heading key={tg} {...args} typographyType={tg}>
          {tg}
        </Heading>
      ))}
    </StoryVStack>
  ),
});

export const WithMargins = meta.story({
  args: { children: 'Heading with margins', level: 1 },
  render: args => (
    <div
      style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}
    >
      <Heading {...args} withMargins />
    </div>
  ),
});
