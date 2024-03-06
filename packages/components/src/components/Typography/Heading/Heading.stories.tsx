import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'dds-components/Typography/Heading',
  component: Heading,
  argTypes: {
    withMargins: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: { children: 'Heading', level: 1 },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
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
    </>
  ),
};

export const OverviewStyles: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Heading {...args} level={1} typographyType="headingSans08">
        headingSans08
      </Heading>
      <Heading {...args} level={1} typographyType="headingSans07">
        headingSans07
      </Heading>
      <Heading {...args} level={1} typographyType="headingSans06">
        headingSans06
      </Heading>
      <Heading {...args} level={1} typographyType="headingSans05">
        headingSans05
      </Heading>
      <Heading {...args} level={1} typographyType="headingSans04">
        headingSans04
      </Heading>
      <Heading {...args} level={1} typographyType="headingSans03">
        headingSans03
      </Heading>
      <Heading {...args} level={1} typographyType="headingSans02">
        headingSans02
      </Heading>
      <Heading {...args} level={1} typographyType="headingSans01">
        headingSans01
      </Heading>
    </>
  ),
};

export const WithMargins: Story = {
  args: { children: 'Heading', level: 1 },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <div
      style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}
    >
      <Heading {...args} withMargins>
        Heading with margins
      </Heading>
    </div>
  ),
};
