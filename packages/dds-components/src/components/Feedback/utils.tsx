import { type Layout } from './Feedback.types';

export const getButtonSize = (layout: Layout) =>
  layout === 'vertical' ? 'medium' : 'small';
