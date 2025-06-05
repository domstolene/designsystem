import { type Meta, type StoryObj } from '@storybook/react-vite';

import { htmlPropsArgType } from '../../../storybook/helpers';
import { StoryVStack } from '../../layout/Stack/utils';
import { storyTypographyHtmlAttrs } from '../storyUtils';
import { Typography } from '../Typography';

import { Paragraph } from '.';

export default {
  title: 'dds-components/Components/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    color: { control: 'text' },
    htmlProps: htmlPropsArgType,
    ...storyTypographyHtmlAttrs,
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
