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
      color="icon-action-resting"
      iconSize={getIconSize(layout)}
    />
  ) : (
    <Icon
      icon={rating === 'positive' ? ThumbUpIcon : ThumbDownIcon}
      color="icon-medium"
      iconSize={getIconSize(layout)}
    />
  );
