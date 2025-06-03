import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '..';
import { categoryHtml, htmlPropsArgType } from '../../../storybook/helpers';
import { StoryVStack } from '../../layout/Stack/utils';
import { storyTypographyHtmlAttrs } from '../storyUtils';

export default {
  title: 'dds-components/Components/Typography/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'text' },
    href: { control: 'text', table: categoryHtml },
    target: { control: false, table: categoryHtml },
    as: { control: 'text' },
    ...storyTypographyHtmlAttrs,
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: { children: 'Typography' },
};

export const OverviewBody: Story = {
  render: args => (
    <StoryVStack>
      <Typography {...args} typographyType="bodyXsmall">
        bodyXsmall - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography {...args} typographyType="bodySmall">
        bodySmall - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography {...args} typographyType="bodyMedium">
        bodyMedium - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography {...args} typographyType="bodyLarge">
        bodyLarge - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
    </StoryVStack>
  ),
};

export const OverviewHeadings: Story = {
  render: args => (
    <StoryVStack>
      <Typography {...args} typographyType="headingXxlarge">
        headingXxlarge
      </Typography>
      <Typography {...args} typographyType="headingXlarge">
        headingXlarge
      </Typography>
      <Typography {...args} typographyType="headingLarge">
        HeadingLarge
      </Typography>
      <Typography {...args} typographyType="headingMedium">
        HeadingMedium
      </Typography>
      <Typography {...args} typographyType="headingSmall">
        HeadingSmall
      </Typography>
      <Typography {...args} typographyType="headingXsmall">
        HeadingXsmall
      </Typography>
      <Typography {...args} typographyType="headingXxsmall">
        HeadingXxsmall
      </Typography>
    </StoryVStack>
  ),
};

export const OverviewLeads: Story = {
  render: args => (
    <StoryVStack>
      <Typography {...args} typographyType="leadMedium">
        leadMedium
      </Typography>
    </StoryVStack>
  ),
};

export const OverviewLink: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <StoryVStack>
      <Typography {...args} typographyType="a" href="https://www.domstol.no">
        Link
      </Typography>
      <Typography
        {...args}
        typographyType="a"
        href="https://www.domstol.no"
        externalLink
      >
        Link
      </Typography>
    </StoryVStack>
  ),
};

export const CustomColor: Story = {
  args: { children: 'Typography', color: 'text-action-resting' },
};
