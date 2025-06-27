import styles from './Feedback.module.css';
import { type Layout, type Rating } from './Feedback.types';
import { getIconSize } from './utils';
import { createTexts, useTranslation } from '../../i18n';
import { cn } from '../../utils';
import { InlineIconButton } from '../helpers/InlineIconButton';
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

  const button = (rating: Rating, layout: Layout, tooltip: string) => (
    <InlineIconButton
      aria-label={tooltip}
      onClick={() => handleRatingChange(rating)}
      size={getIconSize(layout)}
      icon={rating === 'positive' ? ThumbUpIcon : ThumbDownIcon}
      color="icon-medium"
    ></InlineIconButton>
  );

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
            {button('positive', layout, thumbUpTooltip)}
          </Tooltip>
          <Tooltip text={thumbDownTooltip}>
            <div>{button('negative', layout, thumbDownTooltip)}</div>
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
  },
});
