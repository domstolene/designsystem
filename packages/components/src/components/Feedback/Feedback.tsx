import React, { useEffect, useState } from 'react';
import { FeedbackProps, Rating } from './Feedback.types';
import { Paragraph } from '../Typography';
import { RatingComponent } from './RatingComponent';
import { CommentComponent } from './CommentComponent';

export const Feedback = ({
  layout = 'vertical',
  ratingLabel = 'Hva syns du om tjenesten?',
  positiveFeedbackLabel = 'Hva kan vi forbedre? (valgfritt)',
  negativeFeedbackLabel = 'Hva kan vi forbedre? (valgfritt)',
  ratingValue: ratingProp,
  feedbackTextValue: feedbackTextProp,
  thumbUpTooltip = 'Bra',
  thumbDownTooltip = 'Dårlig',
  feedbackTextAreaExcluded = false,
  loading = false,
  isSubmitted: isSubmittedProp,
  onRating,
  onFeedbackTextChange,
  onSubmit,
}: FeedbackProps) => {
  const [rating, setRating] = useState<Rating | null>(null);
  const [feedbackText, setFeedbackText] = useState<string>();
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] =
    useState<boolean>(false);

  useEffect(() => {
    ratingProp !== undefined && setRating(ratingProp);
  }, [ratingProp]);

  useEffect(() => {
    feedbackTextProp !== undefined && setFeedbackText(feedbackTextProp);
  }, [feedbackTextProp]);

  useEffect(() => {
    isSubmittedProp !== undefined && setIsFeedbackSubmitted(isSubmittedProp);
  }, [isSubmittedProp]);

  const handleRatingChange = (newRating: Rating) => {
    onRating && onRating(newRating);
    onSubmit && feedbackTextAreaExcluded && onSubmit(newRating, '');

    ratingProp === undefined && setRating(newRating);
  };

  const handleFeedbackTextChange = (newFeedbackText: string) => {
    onFeedbackTextChange && onFeedbackTextChange(newFeedbackText);
    feedbackTextProp === undefined && setFeedbackText(newFeedbackText);
  };

  const handleSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Ved submit er rating alltid satt
    onSubmit && onSubmit(rating!, feedbackText ?? '');
    isSubmittedProp === undefined && setIsFeedbackSubmitted(true);
  };

  if (rating === null && !isFeedbackSubmitted) {
    return (
      <RatingComponent
        layout={layout}
        ratingLabel={ratingLabel}
        loading={loading}
        thumbUpTooltip={thumbUpTooltip}
        thumbDownTooltip={thumbDownTooltip}
        handleRatingChange={handleRatingChange}
      />
    );
  }

  if (!feedbackTextAreaExcluded && !isFeedbackSubmitted) {
    return (
      <CommentComponent
        rating={rating}
        feedbackText={feedbackText}
        positiveFeedbackLabel={positiveFeedbackLabel}
        negativeFeedbackLabel={negativeFeedbackLabel}
        loading={loading}
        handleSubmit={handleSubmit}
        handleFeedbackTextChange={handleFeedbackTextChange}
      />
    );
  }

  return (
    <Paragraph>
      Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen
    </Paragraph>
  );
};
