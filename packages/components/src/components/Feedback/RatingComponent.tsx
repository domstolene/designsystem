import styles from './Feedback.module.css';
import { type Layout, type Rating } from './Feedback.types';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { ThumbDownIcon, ThumbUpIcon } from '../Icon/icons';
import { Spinner } from '../Spinner';
import { HStack } from '../Stack';
import { Tooltip } from '../Tooltip';
import { Label } from '../Typography';

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
  const layoutCn = layout === 'vertical' ? 'column' : 'row';
  type Purpose = 'up' | 'down';

  const button = (purpose: Purpose, layout: Layout) => (
    <button
      aria-label={purpose === 'up' ? thumbUpTooltip : thumbDownTooltip}
      onClick={() =>
        handleRatingChange(purpose === 'up' ? 'positive' : 'negative')
      }
      className={cn(
        utilStyles['remove-button-styling'],
        styles.button,
        styles[`button--${layout}`],
        focusable,
      )}
    >
      <Icon
        icon={purpose === 'up' ? ThumbUpIcon : ThumbDownIcon}
        iconSize={layout === 'vertical' ? 'large' : 'medium'}
      />
    </button>
  );

  return (
    <div
      className={cn(
        styles['rating-container'],
        styles[`rating-container--${layoutCn}`],
      )}
    >
      <Label>{ratingLabel}</Label>
      {loading ? (
        <Spinner tooltip="Laster opp tilbakemelding ..." />
      ) : (
        <HStack gap="x1">
          <Tooltip text={thumbUpTooltip}>{button('up', layout)}</Tooltip>
          <Tooltip text={thumbDownTooltip}>
            <div>{button('down', layout)}</div>
          </Tooltip>
        </HStack>
      )}
    </div>
  );
};
