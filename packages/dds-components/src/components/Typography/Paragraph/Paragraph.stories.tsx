import { type Meta, type StoryObj } from '@storybook/react';

import { StoryVStack } from '../../Stack/utils';

import { Paragraph } from '.';

export default {
  title: 'dds-components/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    withMargins: { control: { type: 'boolean' } },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
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