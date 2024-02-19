import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Paragraph } from '.';

export default {
  title: 'dds-components/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    withMargins: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};

type Story = StoryObj<typeof Paragraph>;

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate title="Paragraph - default">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
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
    </>
  ),
};

export const Default: Story = {
  args: { children: 'Paragraph' },
  decorators: Story => (
    <StoryTemplate title="Paragraph - overview">
      <Story />
    </StoryTemplate>
  ),
};
