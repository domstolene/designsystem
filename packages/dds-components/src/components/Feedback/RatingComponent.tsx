import styles from './Feedback.module.css';
import { type Layout, type Rating } from './Feedback.types';
import { ThumbIcon } from './utils';
import { cn } from '../../utils';
import { StylelessButton } from '../helpers';
import { focusable } from '../helpers/styling/focus.module.css';
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
  const button = (rating: Rating, layout: Layout, tooltip: string) => (
    <StylelessButton
      aria-label={tooltip}
      onClick={() => handleRatingChange(rating)}
      className={cn(styles.button, styles[`button--${layout}`], focusable)}
    >
      {ThumbIcon({ rating, layout, type: 'rating' })}
    </StylelessButton>
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
        <Spinner tooltip="Laster opp tilbakemelding ..." />
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
