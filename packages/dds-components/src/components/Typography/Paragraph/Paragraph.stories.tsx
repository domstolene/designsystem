import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ddsProviderDecorator } from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/utils';
import { storyTypographyHtmlAttrs } from '../storyUtils';
import { Typography } from '../Typography';

import { Paragraph } from '.';

export default {
  title: 'dds-components/Components/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

export const Preview: Story = {
  args: { children: 'Paragraph' },
};

export const Overview: Story = {
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
};

export const CustomColor: Story = {
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
};
