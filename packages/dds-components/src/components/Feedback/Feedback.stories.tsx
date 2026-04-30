import preview from '#.storybook/preview';

import { ddsProviderDecorator } from '../../storybook';
import { Divider } from '../Divider';

import { Feedback } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Feedback',
  component: Feedback,
  argTypes: {
    ratingValue: {
      options: [null, 'positive', 'negative'],
      control: {
        type: 'radio',
      },
    },
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story();

export const HorizontalLayout = meta.story({
  args: { layout: 'horizontal' },
});

export const WithoutTextArea = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    feedbackTextAreaExcluded: true,
  },
});

export const CustomLabels = meta.story({
  args: {
    ratingLabel: 'Min egen label',
    positiveFeedbackLabel: 'Min egen positive label',
    negativeFeedbackLabel: 'Min egen negative label',
  },

  render: args => (
    <>
      <Feedback {...args} />
      <Divider />
      <Feedback {...args} ratingValue="positive" />
      <Divider />
      <Feedback {...args} ratingValue="negative" />
    </>
  ),
});

export const CustomButtonTooltip = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    thumbUpTooltip: 'Liker',
    thumbDownTooltip: 'Liker ikke',
  },
});

export const LoadingState = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <>
      <Feedback {...args} loading />
      <Divider />
      <Feedback {...args} ratingValue="positive" loading />
    </>
  ),
});
