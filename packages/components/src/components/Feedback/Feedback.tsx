import React, { useEffect, useState } from 'react';
import { FeedbackProps, Rating } from './Feedback.types';
import { Paragraph } from '../Typography';
import { RatingComponent } from './RatingComponent';
import { CommentComponent } from './CommentComponent';

export const Feedback = ({
  layout = 'vertical',
  ratingLabel,
  positiveFeedbackLabel = 'Hva kan vi forbedre? (valgfritt)',
  negativeFeedbackLabel = 'Hva kan vi forbedre? (valgfritt)',
  ratingValue: ratingProp,
  feedbackTextValue: feedbackTextProp,
  thumbUpTooltip = 'Bra',
  thumbDownTooltip = 'Dårlig',
  feedbackTextAreaExcluded = false,
  loading = false,
  isSubmitted,
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
    isSubmitted !== undefined && setIsFeedbackSubmitted(isSubmitted);
  }, [isSubmitted]);

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
    isSubmitted === undefined && setIsFeedbackSubmitted(true);
  };

  return (
    <>
      {rating === null && !isFeedbackSubmitted ? (
        <RatingComponent
          layout={layout}
          ratingLabel={ratingLabel}
          loading={loading}
          thumbUpTooltip={thumbUpTooltip}
          thumbDownTooltip={thumbDownTooltip}
          handleRatingChange={handleRatingChange}
        />
      ) : !feedbackTextAreaExcluded && !isFeedbackSubmitted ? (
        <CommentComponent
          rating={rating}
          feedbackText={feedbackText}
          positiveFeedbackLabel={positiveFeedbackLabel}
          negativeFeedbackLabel={negativeFeedbackLabel}
          loading={loading}
          handleSubmit={handleSubmit}
          handleFeedbackTextChange={handleFeedbackTextChange}
        />
      ) : (
        <div>
          <Paragraph>Takk for tilbakemeldingen!</Paragraph>
        </div>
      )}
    </>
  );
};
