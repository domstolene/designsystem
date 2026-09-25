import preview from '#.storybook/preview';

import { BADGE_PURPOSES, BADGE_SIZES, Badge } from './Badge';
import { commonArgTypes } from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';

const meta = preview.meta({
  title: 'dds-components/Components/Badge',
  component: Badge,
  argTypes: {
    ...commonArgTypes,
    children: {
      control: 'number',
    },
  },
});

export default meta;

export const Preview = meta.story({
  args: {
    children: 5,
  },
});

export const Purposes = meta.story({
  args: {
    children: 5,
  },
  render: args => (
    <StoryHStack>
      {BADGE_PURPOSES.map(purpose => (
        <Badge {...args} purpose={purpose} key={purpose} />
      ))}
    </StoryHStack>
  ),
});

export const Sizes = meta.story({
  render: args => (
    <StoryVStack>
      <StoryHStack>
        {BADGE_SIZES.map(size => (
          <Badge {...args} children={5} size={size} key={size} />
        ))}
      </StoryHStack>
      <StoryHStack>
        {BADGE_SIZES.map(size => (
          <Badge {...args} children={undefined} size={size} key={size} />
        ))}
      </StoryHStack>
    </StoryVStack>
  ),
});

export const OverMax = meta.story({
  args: {
    children: 100,
  },
});
