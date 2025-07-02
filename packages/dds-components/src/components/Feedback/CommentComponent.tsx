import styles from './Feedback.module.css';
import { type Layout, type Rating } from './Feedback.types';
import { createTexts, useTranslation } from '../../i18n';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ThumbDownFilledIcon, ThumbUpFilledIcon } from '../Icon/icons';
import { VStack } from '../layout';
import { TextArea } from '../TextArea';
import { Paragraph } from '../Typography';
import { getIconSize } from './utils';

interface CommentComponentType {
  layout: Layout;
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
  layout,
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
  const { t } = useTranslation();
  return (
    <VStack gap="x1">
      <span className={styles['rating-submitted-title']}>
        <Icon
          icon={rating === 'positive' ? ThumbUpFilledIcon : ThumbDownFilledIcon}
          color="iconActionResting"
          iconSize={getIconSize(layout)}
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
        {t(texts.send)}
      </Button>
    </VStack>
  );
};

const texts = createTexts({
  send: {
    nb: 'Send inn',
    no: 'Send inn',
    nn: 'Send inn',
    en: 'Send',
  },
});
