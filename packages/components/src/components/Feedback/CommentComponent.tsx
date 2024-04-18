import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import styles from './Feedback.module.css';
import { type Rating } from './Feedback.types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ThumbdownFilled, ThumbupFilled } from '../Icon/icons';
import { VStack } from '../Stack';
import { TextArea } from '../TextArea';
import { Paragraph } from '../Typography';

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
    <VStack gap="x1" align="flex-start">
      <span className={styles['rating-submitted-title']}>
        <Icon
          icon={rating === 'positive' ? ThumbupFilled : ThumbdownFilled}
          color={ddsBaseTokens.colors.DdsColorInteractiveBase}
        />
        <Paragraph>{ratingSubmittedTitle} </Paragraph>
      </span>
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
