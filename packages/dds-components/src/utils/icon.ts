import { type InputSize } from '../components/helpers/Input';
import { type IconSize } from '../components/Icon';

export const getFormInputIconSize = (componentSize: InputSize): IconSize => {
  switch (componentSize) {
    case 'medium':
      return 'medium';
    case 'small':
      return 'medium';
    case 'xsmall':
      return 'small';
  }
};
