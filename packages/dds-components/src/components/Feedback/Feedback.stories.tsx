import { type Meta, type StoryObj } from '@storybook/react-vite';

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
} satisfies Meta<typeof Feedback>;

type Story = StoryObj<typeof Feedback>;

export const Preview: Story = {
  args: { ratingLabel: 'Hva syns du om tjenesten?' },
};

export const HorizontalLayout: Story = {
  args: { ratingLabel: 'Hva syns du om tjenesten?', layout: 'horizontal' },
};

export const WithoutTextArea: Story = {
  args: {
    ratingLabel: 'Hva syns du om tjenesten?',
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
    ratingLabel: 'Hva syns du om tjenesten?',
    thumbUpTooltip: 'Liker',
    thumbDownTooltip: 'Liker ikke',
  },
};

export const LoadingState: Story = {
  args: {
    ratingLabel: 'Hva synes du om tjenesten?',
  },
  render: args => (
    <>
      <Feedback {...args} loading />
      <Divider />
      <Feedback {...args} ratingValue="positive" loading />
    </>
  ),
};
