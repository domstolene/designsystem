import { type Meta, type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../../storybook/helpers';
import { StoryVStack } from '../../layout/Stack/utils';

import { Heading } from '.';

export default {
  title: 'dds-components/Components/Typography/Heading',
  component: Heading,
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: { children: 'Heading', level: 1 },
};

export const Overview: Story = {
  render: args => (
    <StoryVStack>
      <Heading {...args} level={1}>
        Heading 1
      </Heading>
      <Heading {...args} level={2}>
        Heading 2
      </Heading>
      <Heading {...args} level={3}>
        Heading 3
      </Heading>
      <Heading {...args} level={4}>
        Heading 4
      </Heading>
      <Heading {...args} level={5}>
        Heading 5
      </Heading>
      <Heading {...args} level={6}>
        Heading 6
      </Heading>
    </StoryVStack>
  ),
};

export const OverviewStyles: Story = {
  render: args => (
    <StoryVStack>
      <Heading {...args} level={1} typographyType="headingXxlarge">
        headingXxlarge
      </Heading>
      <Heading {...args} level={1} typographyType="headingXlarge">
        headingXlarge
      </Heading>
      <Heading {...args} level={1} typographyType="headingLarge">
        headingLarge
      </Heading>
      <Heading {...args} level={1} typographyType="headingMedium">
        headingMedium
      </Heading>
      <Heading {...args} level={1} typographyType="headingSmall">
        headingSmall
      </Heading>
      <Heading {...args} level={1} typographyType="headingXsmall">
        headingXsmall
      </Heading>
      <Heading {...args} level={1} typographyType="headingXxsmall">
        headingXxsmall
      </Heading>
    </StoryVStack>
  ),
};

export const WithMargins: Story = {
  args: { children: 'Heading with margins', level: 1 },
  render: args => (
    <div
      style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}
    >
      <Heading {...args} withMargins />
    </div>
  ),
};
