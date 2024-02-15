import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Divider } from '../Divider';

import { Feedback } from '.';

export default {
  title: 'dds-components/Feedback',
  component: Feedback,
  argTypes: {
    layout: {
      control: {
        type: 'radio',
        options: {
          vertical: 'vertical',
          horizontal: 'horizontal',
        },
      },
    },
    ratingLabel: {
      control: 'text',
    },
    ratingValue: {
      options: {
        null: null,
        positive: 'positive',
        negative: 'negative',
      },
      control: {
        type: 'radio',
      },
    },
    positiveFeedbackLabel: {
      control: 'text',
    },
    negativeFeedbackLabel: {
      control: 'text',
    },
    feedbackTextValue: {
      control: 'text',
    },
    thumbUpTooltip: {
      control: 'text',
    },
    thumbDownTooltip: {
      control: 'text',
    },
    feedbackTextAreaExcluded: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    isSubmitted: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof Feedback>;

export const Default: Story = {
  args: { ratingLabel: 'Hva syns du om tjenesten?' },
  decorators: Story => (
    <StoryTemplate title="Feedback - default">
      <Story />
    </StoryTemplate>
  ),
};

export const HorizontalLayout: Story = {
  args: { ratingLabel: 'Hva syns du om tjenesten?', layout: 'horizontal' },
  decorators: Story => (
    <StoryTemplate title="Feedback - horizontal layout">
      <Story />
    </StoryTemplate>
  ),
};

export const WithoutTextArea: Story = {
  args: {
    ratingLabel: 'Hva syns du om tjenesten?',
    feedbackTextAreaExcluded: true,
  },
  decorators: Story => (
    <StoryTemplate title="Feedback - without text area">
      <Story />
    </StoryTemplate>
  ),
};

export const CustomLabels: Story = {
  args: {
    ratingLabel: 'Min egen label',
    positiveFeedbackLabel: 'Min egen positive label',
    negativeFeedbackLabel: 'Min egen negative label',
  },
  decorators: Story => (
    <StoryTemplate title="Feedback - custom labels">
      <Story />
    </StoryTemplate>
  ),
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
  decorators: Story => (
    <StoryTemplate title="Feedback - custom button tooltip">
      <Story />
    </StoryTemplate>
  ),
};

export const LoadingState: Story = {
  args: {
    ratingLabel: 'Hva synes du om tjenesten?',
  },
  decorators: Story => (
    <StoryTemplate title="Feedback - loading">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Feedback {...args} loading />
      <Divider />
      <Feedback {...args} ratingValue="positive" loading />
    </>
  ),
};
