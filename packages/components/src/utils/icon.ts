import { type InputSize } from '../components/helpers';
import { type IconSize } from '../components/Icon';

export const getFormInputIconSize = (componentSize: InputSize): IconSize => {
  switch (componentSize) {
    case 'medium':
      return 'medium';
    case 'small':
      return 'small';
    case 'tiny':
      return 'small';
  }
};
