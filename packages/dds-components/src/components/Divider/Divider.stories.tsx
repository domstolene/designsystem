import { type Meta, type StoryObj } from '@storybook/react-vite';

import { StoryLabel, commonArgTypes } from '../../storybook';
import { Contrast } from '../Contrast';

import { Divider } from '.';

export default {
  title: 'dds-components/Components/Divider',
  component: Divider,
  argTypes: {
    ...commonArgTypes,
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Preview: Story = {};

const contrastStyling = `
  .story-container {
    padding: 1px;
    }
    `;

export const Colors: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>{contrastStyling}</style>
      </>
    ),
  ],
  render: args => (
    <>
      <StoryLabel>Default</StoryLabel>
      <Divider {...args} />
      <StoryLabel>Subtle</StoryLabel>
      <Divider {...args} color="subtle" />
      <StoryLabel>On-inverse</StoryLabel>
      <Contrast className="story-container">
        <Divider {...args} color="on-inverse" />
      </Contrast>
    </>
  ),
};
