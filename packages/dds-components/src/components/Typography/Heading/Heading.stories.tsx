import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ddsProviderDecorator } from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/utils';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Heading } from '.';

export default {
  title: 'dds-components/Components/Typography/Heading',
  component: Heading,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Preview: Story = {
  args: { children: 'Heading', level: 1 },
};

export const LevelDefaults: Story = {
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

export const TypographyStyles: Story = {
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
