import styles from './Feedback.module.css';
import { type Layout, type Rating } from './Feedback.types';
import { getButtonSize } from './utils';
import { createTexts, useTranslation } from '../../i18n';
import { cn } from '../../utils';
import { Button } from '../Button';
import { ThumbDownIcon, ThumbUpIcon } from '../Icon/icons';
import { HStack } from '../layout';
import { Spinner } from '../Spinner';
import { Tooltip } from '../Tooltip';
import typographyStyles from '../Typography/typographyStyles.module.css';

interface RatingComponentType {
  layout: Layout;
  ratingLabel: string;
  loading: boolean;
  thumbUpTooltip: string;
  thumbDownTooltip: string;
  handleRatingChange: (rating: Rating) => void;
}

export const RatingComponent = ({
  layout,
  ratingLabel,
  loading,
  thumbUpTooltip,
  thumbDownTooltip,
  handleRatingChange,
}: RatingComponentType) => {
  const { t } = useTranslation();
  const buttonSize = getButtonSize(layout);

  return (
    <div
      className={cn(
        styles['rating-container'],
        styles[`rating-container--${layout}`],
      )}
    >
      <h2 className={typographyStyles['label-medium']}>{ratingLabel}</h2>
      {loading ? (
        <Spinner tooltip={t(texts.uploadingFeedback)} />
      ) : (
        <HStack gap="x1">
          <Tooltip text={thumbUpTooltip}>
            <Button
              purpose="secondary"
              aria-label={thumbUpTooltip}
              onClick={() => handleRatingChange('positive')}
              size={buttonSize}
              icon={ThumbUpIcon}
            ></Button>
          </Tooltip>
          <Tooltip text={thumbDownTooltip}>
            <Button
              purpose="secondary"
              aria-label={thumbDownTooltip}
              onClick={() => handleRatingChange('negative')}
              size={buttonSize}
              icon={ThumbDownIcon}
            ></Button>
          </Tooltip>
        </HStack>
      )}
    </div>
  );
};

const texts = createTexts({
  uploadingFeedback: {
    nb: 'Laster opp tilbakemelding...',
    no: 'Laster opp tilbakemelding...',
    nn: 'Lastar opp tilbakemelding...',
    en: 'Uploading feedback...',
    se: 'Viežžamin ruovttoluottadieđuid...',
  },
});
