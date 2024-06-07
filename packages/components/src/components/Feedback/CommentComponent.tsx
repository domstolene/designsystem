import styles from './Feedback.module.css';
import { type Rating } from './Feedback.types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ThumbDownFilledIcon, ThumbUpFilledIcon } from '../Icon/icons';
import { VStack } from '../Stack';
import { TextArea } from '../TextArea';
import { Paragraph } from '../Typography';

interface CommentComponentType {
  rating: Rating | null;
  feedbackText: string | undefined;
  positiveFeedbackLabel: string;
  negativeFeedbackLabel: string;
  ratingSubmittedTitle: string;
  textAreaTip: string;
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
  textAreaTip,
  loading,
  handleSubmit,
  handleFeedbackTextChange,
}: CommentComponentType) => {
  return (
    <VStack gap="x1" align="flex-start">
      <span className={styles['rating-submitted-title']}>
        <Icon
          icon={rating === 'positive' ? ThumbUpFilledIcon : ThumbDownFilledIcon}
          color="iconActionResting"
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
        tip={textAreaTip}
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
