import preview from '#.storybook/preview';

import { TG_PARAGRAPH_TYPES } from './Paragraph';
import { ddsProviderDecorator } from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/storybook-utils';
import { blockTgCommonArgTypes } from '../storybook-utils/storyUtils';
import { Typography } from '../Typography';

import { Paragraph } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    ...blockTgCommonArgTypes,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Paragraph' },
});

export const Overview = meta.story({
  render: args => (
    <StoryVStack>
      {TG_PARAGRAPH_TYPES.map(type => (
        <Paragraph key={type} {...args} typographyType={type}>
          {args.children || type}
        </Paragraph>
      ))}
    </StoryVStack>
  ),
});

export const CustomColor = meta.story({
  render: args => (
    <Paragraph {...args} color="text-subtle">
      {' '}
      Obligatoriske felter er merket med{' '}
      <Typography as="span" color="text-requiredfield">
        *
      </Typography>
      .
    </Paragraph>
  ),
});
