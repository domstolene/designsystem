import preview from '#.storybook/preview';

import { ddsProviderDecorator } from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/utils';
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
      <Paragraph {...args} typographyType="bodyShortXsmall">
        {args.children || 'bodyShortXsmall'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyShortSmall">
        {args.children || 'bodyShortSmall'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyShortMedium">
        {args.children || 'bodyShortMedium'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyShortLarge">
        {args.children || 'bodyShortLarge'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyLongXsmall">
        {args.children || 'bodyLongXsmall'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyLongSmall">
        {args.children || 'bodyLongSmall'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyLongMedium">
        {args.children || 'bodyLongMedium'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyLongLarge">
        {args.children || 'bodyLongLarge'}
      </Paragraph>
      <Paragraph {...args} typographyType="leadMedium">
        {args.children || 'leadMedium'}
      </Paragraph>
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
