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
      <Paragraph {...args} typographyType="bodySans01">
        {args.children || 'bodySans01'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodySans02">
        {args.children || 'bodySans02'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodySans03">
        {args.children || 'bodySans03'}
      </Paragraph>
      <Paragraph {...args} typographyType="bodySans04">
        {args.children || 'bodySans04'}
      </Paragraph>
      <Paragraph {...args} typographyType="leadSans01">
        {args.children || 'leadSans01'}
      </Paragraph>
      <Paragraph {...args} typographyType="leadSans02">
        {args.children || 'leadSans02'}
      </Paragraph>
      <Paragraph {...args} typographyType="leadSans03">
        {args.children || 'leadSans03'}
      </Paragraph>
      <Paragraph {...args} typographyType="leadSans04">
        {args.children || 'leadSans04'}
      </Paragraph>
      <Paragraph {...args} typographyType="leadSans05">
        {args.children || 'leadSans05'}
      </Paragraph>
    </StoryVStack>
  ),
};
