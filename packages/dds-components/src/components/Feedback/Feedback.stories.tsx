import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ddsProviderDecorator } from '../../storybook';
import { Divider } from '../Divider';

import { Feedback } from '.';

export default {
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
} satisfies Meta<typeof Feedback>;

type Story = StoryObj<typeof Feedback>;

export const Preview: Story = {};

export const HorizontalLayout: Story = {
  args: { layout: 'horizontal' },
};

export const WithoutTextArea: Story = {
  args: {
    feedbackTextAreaExcluded: true,
  },
};

export const CustomLabels: Story = {
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
};

export const CustomButtonTooltip: Story = {
  args: {
    thumbUpTooltip: 'Liker',
    thumbDownTooltip: 'Liker ikke',
  },
};

export const LoadingState: Story = {
  render: args => (
    <>
      <Feedback {...args} loading />
      <Divider />
      <Feedback {...args} ratingValue="positive" loading />
    </>
  ),
};
