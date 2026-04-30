import preview from '#.storybook/preview';

import { StoryLabel, commonArgTypes } from '../../storybook';
import { Contrast } from '../layout';

import { Divider } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Divider',
  component: Divider,
  argTypes: {
    ...commonArgTypes,
  },
});

export default meta;

export const Preview = meta.story();

const contrastStyling = `
  .story-container {
    padding: 1px;
    }
    `;

export const Colors = meta.story({
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
});
