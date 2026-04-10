import preview from '#.storybook/preview';

import { TAG_PURPOSES, icons } from './Tag';
import { commonArgTypes, labelText } from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Tag } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
    ...commonArgTypes,
  },
});

export const Preview = meta.story({
  args: { children: 'default' },
});

export const Variants = meta.story({
  args: { children: 'default' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {TAG_PURPOSES.map(p => (
          <Tag {...args} key={`p-${p}`} purpose={p}>
            {labelText(p)}
          </Tag>
        ))}
      </StoryVStack>
      <StoryVStack>
        {TAG_PURPOSES.map(p =>
          icons[p] ? (
            <Tag {...args} withIcon key={`p-${p}`} purpose={p}>
              {labelText(p)}
            </Tag>
          ) : (
            ''
          ),
        )}
      </StoryVStack>
      <StoryVStack>
        {TAG_PURPOSES.map(p => (
          <Tag {...args} key={`p-${p}`} purpose={p} appearance="strong">
            {labelText(p)}
          </Tag>
        ))}
      </StoryVStack>
      <StoryVStack>
        {TAG_PURPOSES.map(p =>
          icons[p] ? (
            <Tag
              {...args}
              withIcon
              key={`p-${p}`}
              purpose={p}
              appearance="strong"
            >
              {labelText(p)}
            </Tag>
          ) : (
            ''
          ),
        )}
      </StoryVStack>
    </StoryHStack>
  ),
});
