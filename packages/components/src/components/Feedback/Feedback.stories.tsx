import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Feedback, FeedbackProps } from '.';

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
      control: {
        type: 'radio',
        options: {
          null: null,
          positive: 'positive',
          negative: 'negative',
        },
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
    controls: {
      exclude: ['style', 'className'],
    },
  },
};

export const Default = (args: FeedbackProps) => {
  return (
    <StoryTemplate title="Feedback - Default">
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
      />
    </StoryTemplate>
  );
};

export const HorizontalLayout = (args: FeedbackProps) => {
  return (
    <StoryTemplate title="Feedback - Horizontal Layout">
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        layout="horizontal"
      />
    </StoryTemplate>
  );
};

export const WithoutTextArea = (args: FeedbackProps) => {
  return (
    <StoryTemplate title="Feedback - Without Text Area">
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        feedbackTextAreaExcluded
      />
    </StoryTemplate>
  );
};

export const CustomLabels = (args: FeedbackProps) => {
  return (
    <StoryTemplate title="Feedback - Custom Labels">
      <Feedback
        {...args}
        ratingLabel={'Min egne label'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
      />
      <hr style={{ width: '100%' }} />
      <Feedback
        {...args}
        ratingLabel={'Min egne label'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        positiveFeedbackLabel={'Min egne positive label'}
        ratingValue="positive"
      />
      <hr style={{ width: '100%' }} />
      <Feedback
        {...args}
        ratingLabel={'Min egne label'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        negativeFeedbackLabel={'Min egne negative label'}
        ratingValue="negative"
      />
    </StoryTemplate>
  );
};

export const CustomButtonTooltips = (args: FeedbackProps) => {
  return (
    <StoryTemplate title="Feedback - Custom Button Tooltips">
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        thumbUpTooltip={'Liker'}
        thumbDownTooltip={'Liker ikke'}
      />
    </StoryTemplate>
  );
};

export const LoadingState = (args: FeedbackProps) => {
  return (
    <StoryTemplate title="Feedback - Loading">
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        loading
      />
      <hr style={{ width: '100%' }} />
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        ratingValue="positive"
        loading
      />
    </StoryTemplate>
  );
};

export const ControlledComponent = (args: FeedbackProps) => {
  return (
    <StoryTemplate title="Feedback - Controlled Component">
      Komponenten kan også brukes som en "controlled component", altså at
      verdiene styres helt fra utsiden av komponenten.
      <hr style={{ width: '100%' }} />
      Kontrollert rating:
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        ratingValue={null}
      />
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        ratingValue="positive"
      />
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        ratingValue="negative"
      />
      <hr style={{ width: '100%' }} />
      Kontrollert tekstfelt:
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        ratingValue="positive"
        feedbackTextValue="Dette var ekstremt bra; Tommel opp!"
      />
      <hr style={{ width: '100%' }} />
      Kontrollert at tilbakemelding er sendt inn:
      <Feedback
        {...args}
        ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'}
        onSubmit={undefined}
        onRating={undefined}
        onFeedbackTextChange={undefined}
        isSubmitted
      />
    </StoryTemplate>
  );
};
