import { Icon } from '../Icon';
import { type Layout, type ThumbIconProps } from './Feedback.types';
import {
  ThumbDownFilledIcon,
  ThumbDownIcon,
  ThumbUpFilledIcon,
  ThumbUpIcon,
} from '../Icon/icons';

const getIconSize = (layout: Layout) =>
  layout === 'vertical' ? 'large' : 'medium';

export const ThumbIcon = ({ rating, layout, type }: ThumbIconProps) =>
  type === 'comment' ? (
    <Icon
      icon={rating === 'positive' ? ThumbUpFilledIcon : ThumbDownFilledIcon}
      color="iconActionResting"
      iconSize={getIconSize(layout)}
    />
  ) : (
    <Icon
      icon={rating === 'positive' ? ThumbUpIcon : ThumbDownIcon}
      color="iconMedium"
      iconSize={getIconSize(layout)}
    />
  );
