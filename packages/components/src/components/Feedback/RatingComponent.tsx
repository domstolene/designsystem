import styles from './Feedback.module.css';
import { type Layout, type Rating } from './Feedback.types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Thumbdown, Thumbup } from '../Icon/icons';
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
          <Tooltip text={thumbUpTooltip}>
            <Button
              htmlProps={{ 'aria-label': thumbUpTooltip }}
              icon={Thumbup}
              purpose="tertiary"
              onClick={() => handleRatingChange('positive')}
              size="large"
              className={styles.button}
            />
          </Tooltip>
          <Tooltip text={thumbDownTooltip}>
            <div>
              <Button
                htmlProps={{ 'aria-label': thumbDownTooltip }}
                icon={Thumbdown}
                purpose="tertiary"
                onClick={() => handleRatingChange('negative')}
                size="large"
                className={styles.button}
              />
            </div>
          </Tooltip>
        </HStack>
      )}
    </div>
  );
};
