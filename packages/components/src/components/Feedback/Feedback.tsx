import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { FeedbackProps, Layout, Rating } from './Feedback.types';
import {
  TextArea,
  Thumbdown,
  Thumbup,
  ThumbupFilled,
  ThumbdownFilled,
  Spinner,
} from '@norges-domstoler/dds-components';
import { Label } from '@norges-domstoler/dds-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { Paragraph } from '../Typography';
import styled, { css } from 'styled-components';

type RatingContainerProps = {
  layout: Layout;
};

type FlexContainerProps = {
  flexDirection: string;
};

const RatingContainer = styled.div<RatingContainerProps>`
  display: flex;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};
  ${({ layout }) => css`
    flex-direction: ${layout === 'horizontal' ? 'row' : 'column'};
    align-items: ${layout === 'horizontal' ? 'center' : 'start'};
  `}
`;

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${({ flexDirection }) => css`
    flex-direction: ${flexDirection};
    gap: ${flexDirection === 'row'
      ? ddsBaseTokens.spacing.SizesDdsSpacingLocalX05
      : ddsBaseTokens.spacing.SizesDdsSpacingLocalX1};
  `};
`;

const IconLabelSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};
`;

export const Feedback = ({
  layout = 'vertical',
  ratingLabel,
  positiveFeedbackLabel = 'Hva kan vi forbedre? (valgfritt)',
  negativeFeedbackLabel = 'Hva kan vi forbedre? (valgfritt)',
  ratingValue,
  feedbackTextValue,
  thumbUpTooltip = 'Bra',
  thumbDownTooltip = 'Dårlig',
  feedbackTextAreaExcluded = false,
  loading = false,
  isSubmitted = false,
  onRating,
  onFeedbackTextChange,
  onSubmit,
}: FeedbackProps) => {
  const [rating, setRating] = useState<Rating | null>(null);
  const [feedbackText, setFeedbackText] = useState<string>();
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] =
    useState<boolean>(false);

  useEffect(() => {
    ratingValue !== undefined && setRating(ratingValue);
  }, [ratingValue, setRating]);

  useEffect(() => {
    setFeedbackText(feedbackTextValue);
  }, [feedbackTextValue, setFeedbackText]);

  useEffect(() => {
    isSubmitted !== undefined && setIsFeedbackSubmitted(isSubmitted);
  }, [isSubmitted, setFeedbackText]);

  const handleRatingChange = (newRating: Rating) => {
    onRating && onRating(newRating);
    onSubmit && feedbackTextAreaExcluded && onSubmit(newRating, '');

    ratingValue === undefined && setRating(newRating);
  };

  const handleFeedbackTextChange = (newFeedbackText: string) => {
    onFeedbackTextChange && onFeedbackTextChange(newFeedbackText);
    feedbackTextValue === undefined && setFeedbackText(newFeedbackText);
  };

  const handleSubmit = () => {
    onSubmit && onSubmit(rating!, feedbackText ?? '');
    onSubmit === undefined && setIsFeedbackSubmitted(true);
  };

  return (
    <>
      {rating === null && !isFeedbackSubmitted ? (
        <RatingContainer layout={layout}>
          <Label>{ratingLabel}</Label>
          {loading ? (
            <Spinner tooltip="Laster opp tilbakemelding ..." />
          ) : (
            <FlexContainer flexDirection="row">
              <Tooltip text={thumbUpTooltip}>
                <Button
                  htmlProps={{
                    style: {
                      padding: '0px',
                      color: ddsBaseTokens.colors.DdsColorNeutralsGray7,
                    },
                    'aria-label': thumbUpTooltip,
                  }}
                  icon={Thumbup}
                  appearance="borderless"
                  onClick={() => handleRatingChange('positive')}
                />
              </Tooltip>
              <Tooltip text={thumbDownTooltip}>
                <div>
                  <Button
                    htmlProps={{
                      style: {
                        padding: '0px',
                        color: ddsBaseTokens.colors.DdsColorNeutralsGray7,
                      },
                      'aria-label': thumbDownTooltip,
                    }}
                    icon={Thumbdown}
                    appearance="borderless"
                    onClick={() => handleRatingChange('negative')}
                  />
                </div>
              </Tooltip>
            </FlexContainer>
          )}
        </RatingContainer>
      ) : !feedbackTextAreaExcluded && !isFeedbackSubmitted ? (
        <FlexContainer flexDirection="column">
          <IconLabelSpan>
            <Icon
              icon={rating === 'positive' ? ThumbupFilled : ThumbdownFilled}
              color={ddsBaseTokens.colors.DdsColorInteractiveBase}
            />
            <Paragraph>Takk for tilbakemeldingen!</Paragraph>
          </IconLabelSpan>
          <TextArea
            value={feedbackText}
            onChange={e => handleFeedbackTextChange(e.target.value)}
            label={
              rating === 'positive'
                ? positiveFeedbackLabel
                : negativeFeedbackLabel
            }
            tip="Ikke send inn sensitive eller personlige opplysninger"
          />

          <Button
            label="Send inn"
            purpose="secondary"
            size="small"
            onClick={handleSubmit}
            loading={loading}
          />
        </FlexContainer>
      ) : (
        <div>
          <Paragraph>Takk for tilbakemeldingen!</Paragraph>
        </div>
      )}
    </>
  );
};
