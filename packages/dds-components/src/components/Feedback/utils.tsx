import { type Layout } from './Feedback.types';

export const getIconSize = (layout: Layout) =>
  layout === 'vertical' ? 'large' : 'medium';
