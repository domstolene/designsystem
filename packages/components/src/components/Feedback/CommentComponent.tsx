import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { Button } from '../Button';
import { Rating } from './Feedback.types';
import { TextArea } from '../TextArea';
import { VStack } from '../Stack';
import { Icon } from '../Icon';
import { ThumbupFilled, ThumbdownFilled } from '../Icon/icons';
import { Paragraph } from '../Typography';

const IconLabelSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingX05};
`;

interface CommentComponentType {
  rating: Rating | null;
  feedbackText: string | undefined;
  positiveFeedbackLabel: string;
  negativeFeedbackLabel: string;
  ratingSubmittedTitle: string;
  loading: boolean;
  handleSubmit: () => void;
  handleFeedbackTextChange: (newText: string) => void;
}

export const CommentComponent = ({
  rating,
  feedbackText,
  positiveFeedbackLabel,
  negativeFeedbackLabel,
  ratingSubmittedTitle,
  loading,
  handleSubmit,
  handleFeedbackTextChange,
}: CommentComponentType) => {
  return (
    <VStack gap="x1">
      <IconLabelSpan>
        <Icon
          icon={rating === 'positive' ? ThumbupFilled : ThumbdownFilled}
          color={ddsBaseTokens.colors.DdsColorInteractiveBase}
        />
        <Paragraph>{ratingSubmittedTitle} </Paragraph>
      </IconLabelSpan>
      <TextArea
        value={feedbackText}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleFeedbackTextChange(e.target.value)
        }
        label={
          rating === 'positive' ? positiveFeedbackLabel : negativeFeedbackLabel
        }
        tip="Ikke send inn personopplysninger eller annen sensitiv informasjon"
      />

      <Button
        purpose="secondary"
        size="small"
        onClick={handleSubmit}
        loading={loading}
      >
        Send inn
      </Button>
    </VStack>
  );
};
