import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '..';
import { StoryVStack } from '../../Stack/utils';

export default {
  title: 'dds-components/Typography/Typography',
  component: Typography,
  argTypes: {
    children: { control: { type: 'text' } },
    typographyType: { control: { type: 'select' } },
    bold: { control: { type: 'boolean' } },
    italic: { control: { type: 'boolean' } },
    withMargins: { control: { type: 'boolean' } },
    externalLink: { control: { type: 'boolean' } },
    color: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    as: { control: { type: 'text' } },
    htmlProps: { control: false },
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
      <Typography {...args} typographyType="bodySans01">
        bodySans01 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography {...args} typographyType="bodySans02">
        bodySans02 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography {...args} typographyType="bodySans03">
        bodySans03 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography {...args} typographyType="bodySans04">
        bodySans04 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
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
      <Typography {...args} typographyType="headingSans01">
        Heading-sans-01
      </Typography>
      <Typography {...args} typographyType="headingSans02">
        Heading-sans-02
      </Typography>
      <Typography {...args} typographyType="headingSans03">
        Heading-sans-03
      </Typography>
      <Typography {...args} typographyType="headingSans04">
        Heading-sans-04
      </Typography>
      <Typography {...args} typographyType="headingSans05">
        Heading-sans-05
      </Typography>
      <Typography {...args} typographyType="headingSans06">
        Heading-sans-06
      </Typography>
      <Typography {...args} typographyType="headingSans07">
        Heading-sans-07
      </Typography>
      <Typography {...args} typographyType="headingSans08">
        Heading-sans-08
      </Typography>
    </StoryVStack>
  ),
};

export const OverviewLeads: Story = {
  render: args => (
    <StoryVStack>
      <Typography {...args} typographyType="leadSans01">
        lead-sans-01
      </Typography>
      <Typography {...args} typographyType="leadSans02">
        lead-sans-02
      </Typography>
      <Typography {...args} typographyType="leadSans03">
        lead-sans-03
      </Typography>
      <Typography {...args} typographyType="leadSans04">
        lead-sans-04
      </Typography>
      <Typography {...args} typographyType="leadSans05">
        lead-sans-05
      </Typography>
    </StoryVStack>
  ),
};

export const OverviewSupportingStyles: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <StoryVStack>
      <Typography {...args} typographyType="supportingStyleLabel01">
        supportingStyleLabel01
      </Typography>
      <Typography {...args} typographyType="supportingStyleHelperText01">
        supportingStyleHelperText01
      </Typography>
      <Typography {...args} typographyType="supportingStylePlaceholderText01">
        supportingStylePlaceholderText01
      </Typography>
      <Typography {...args} typographyType="supportingStylePlaceholderText02">
        supportingStylePlaceholderText02
      </Typography>
      <Typography {...args} typographyType="supportingStylePlaceholderText03">
        supportingStylePlaceholderText03
      </Typography>
      <Typography {...args} typographyType="supportingStyleTiny01">
        supportingStyleTiny01
      </Typography>
      <Typography {...args} typographyType="supportingStyleTiny02">
        supportingStyleTiny02
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
  args: { children: 'Typography', color: 'textActionResting' },
};
