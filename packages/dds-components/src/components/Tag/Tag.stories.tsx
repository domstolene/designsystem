import preview from '#.storybook/preview';

import { TAG_APPEARANCES, TAG_PURPOSES, TAG_SIZES, icons } from './Tag';
import { commonArgTypes, labelText } from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';

import { Tag } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
    ...commonArgTypes,
  },
});

export default meta;

export const Preview = meta.story({
  args: { children: 'default' },
});

export const Purposes = meta.story({
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
    </StoryHStack>
  ),
});

export const Appearances = meta.story({
  render: args => (
    <StoryVStack>
      {TAG_APPEARANCES.map(a => (
        <Tag {...args} key={`a-${a}`} appearance={a}>
          {labelText(a)}
        </Tag>
      ))}
    </StoryVStack>
  ),
});

export const Sizes = meta.story({
  args: { children: 'default' },
  render: args => (
    <StoryVStack>
      {TAG_SIZES.map(s => (
        <Tag {...args} key={`s-${s}`} size={s}>
          {labelText(s)}
        </Tag>
      ))}
    </StoryVStack>
  ),
});

export const CustomColors = meta.story({});
