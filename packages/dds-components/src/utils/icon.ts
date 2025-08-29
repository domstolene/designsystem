import { type InputSize } from '../components/helpers/Input';
import { createSizes } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const INPUT_ICON_SIZES = createSizes('large', 'medium', 'small');
type InputIconSize = (typeof INPUT_ICON_SIZES)[number];

export const getFormInputIconSize = (
  componentSize: InputSize,
): InputIconSize => {
  switch (componentSize) {
    case 'medium':
      return 'medium';
    case 'small':
      return 'medium';
    case 'xsmall':
      return 'small';
  }
};
