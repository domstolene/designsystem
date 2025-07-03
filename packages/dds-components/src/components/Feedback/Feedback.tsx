import { useEffect, useState } from 'react';

import { CommentComponent } from './CommentComponent';
import { type FeedbackProps, type Rating } from './Feedback.types';
import { RatingComponent } from './RatingComponent';
import { createTexts, useTranslation } from '../../i18n';
import { Paragraph } from '../Typography';

export const Feedback = ({
  layout = 'vertical',
  ratingLabel,
  positiveFeedbackLabel,
  negativeFeedbackLabel,
  ratingSubmittedTitle,
  submittedTitle,
  textAreaTip,
  ratingValue: ratingProp,
  feedbackTextValue: feedbackTextProp,
  thumbUpTooltip,
  thumbDownTooltip,
  feedbackTextAreaExcluded = false,
  loading = false,
  isSubmitted: isSubmittedProp,
  onRating,
  onFeedbackTextChange,
  onSubmit,
}: FeedbackProps) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState<Rating | null>(null);
  const [feedbackText, setFeedbackText] = useState<string>();
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] =
    useState<boolean>(false);
  const tRatingLabel = ratingLabel ?? t(texts.ratingQuestion);
  const tPositiveFeedbackLabel =
    positiveFeedbackLabel ?? t(texts.improvalQuestion);
  const tNegativeFeedbackLabel =
    negativeFeedbackLabel ?? t(texts.improvalQuestion);
  const tRatingSubmittedTitle = ratingSubmittedTitle ?? t(texts.thanks);
  const tSubmittedTitle = submittedTitle ?? t(texts.thanks);
  const tTextAreaTip = textAreaTip ?? t(texts.sensitiveInfo);
  const tThumbUpTooltip = thumbUpTooltip ?? t(texts.good);
  const tThumbDownTooltip = thumbDownTooltip ?? t(texts.bad);

  useEffect(() => {
    if (ratingProp !== undefined) setRating(ratingProp);
  }, [ratingProp]);

  useEffect(() => {
    if (feedbackTextProp !== undefined) setFeedbackText(feedbackTextProp);
  }, [feedbackTextProp]);

  useEffect(() => {
    if (isSubmittedProp !== undefined) setIsFeedbackSubmitted(isSubmittedProp);
  }, [isSubmittedProp]);

  const handleRatingChange = (newRating: Rating) => {
    onRating?.(newRating);
    if (onSubmit && feedbackTextAreaExcluded) onSubmit(newRating, '');

    if (ratingProp === undefined) setRating(newRating);
  };

  const handleFeedbackTextChange = (newFeedbackText: string) => {
    onFeedbackTextChange?.(newFeedbackText);
    if (feedbackTextProp === undefined) setFeedbackText(newFeedbackText);
  };

  const handleSubmit = () => {
    onSubmit?.(rating!, feedbackText ?? '');
    if (isSubmittedProp === undefined) setIsFeedbackSubmitted(true);
  };

  if (rating === null && !isFeedbackSubmitted) {
    return (
      <RatingComponent
        layout={layout}
        ratingLabel={tRatingLabel}
        loading={loading}
        thumbUpTooltip={tThumbUpTooltip}
        thumbDownTooltip={tThumbDownTooltip}
        handleRatingChange={handleRatingChange}
      />
    );
  }

  if (!feedbackTextAreaExcluded && !isFeedbackSubmitted) {
    return (
      <CommentComponent
        layout={layout}
        rating={rating}
        feedbackText={feedbackText}
        positiveFeedbackLabel={tPositiveFeedbackLabel}
        negativeFeedbackLabel={tNegativeFeedbackLabel}
        ratingSubmittedTitle={tRatingSubmittedTitle}
        textAreaTip={tTextAreaTip}
        loading={loading}
        handleSubmit={handleSubmit}
        handleFeedbackTextChange={handleFeedbackTextChange}
      />
    );
  }

  return <Paragraph>{tSubmittedTitle}</Paragraph>;
};

const texts = createTexts({
  ratingQuestion: {
    nb: 'Hva syns du om tjenesten?',
    no: 'Hva syns du om tjenesten?',
    nn: 'Kva synest du om tenesta?',
    en: 'What do you think about the service?',
  },
  improvalQuestion: {
    nb: 'Hva kan vi forbedre? (valgfritt)',
    no: 'Hva kan vi forbedre? (valgfritt)',
    nn: 'Kva kan vi forbetre? (valfritt)',
    en: 'What can we improve? (optional)',
  },
  thanks: {
    nb: 'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
    no: 'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
    nn: 'Tusen takk! Tilbakemeldinga di hjelper oss å forbetre løysinga',
    en: 'Thank you! Your feedback helps us improve the service',
  },
  sensitiveInfo: {
    nb: 'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    no: 'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    nn: 'Ikkje send inn personopplysningar eller annan sensitiv informasjon',
    en: 'Do not submit personal data or other sensitive information',
  },
  good: {
    nb: 'Bra',
    no: 'Bra',
    nn: 'Bra',
    en: 'Good',
  },
  bad: {
    nb: 'Dårlig',
    no: 'Dårlig',
    nn: 'Dårleg',
    en: 'Bad',
  },
});
