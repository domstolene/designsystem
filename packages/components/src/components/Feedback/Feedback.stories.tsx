import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

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
      options: [null, 'positive', 'negative'],
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
    ratingSubmittedTitle: {
      control: 'text',
    },
    submittedTitle: {
      control: 'text',
    },
    textAreaTip: {
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
} satisfies Meta<typeof Feedback>;

type Story = StoryObj<typeof Feedback>;

export const Default: Story = {
  args: { ratingLabel: 'Hva syns du om tjenesten?' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const HorizontalLayout: Story = {
  args: { ratingLabel: 'Hva syns du om tjenesten?', layout: 'horizontal' },
  decorators: Story => (
    <StoryTemplate>
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
    <StoryTemplate>
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
    <StoryTemplate>
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
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const LoadingState: Story = {
  args: {
    ratingLabel: 'Hva synes du om tjenesten?',
  },
  decorators: Story => (
    <StoryTemplate>
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
