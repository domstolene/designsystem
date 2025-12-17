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
      <Paragraph {...args} typographyType="bodyXsmall">
        {args.children || 'bodyXsmall'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodySmall">
        {args.children || 'bodySmall'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyMedium">
        {args.children || 'bodyMedium'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodyLarge">
        {args.children || 'bodyLarge'}
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
