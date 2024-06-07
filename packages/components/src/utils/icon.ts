import { type InputSize } from '../components/helpers';
import { type IconSize } from '../components/Icon';

export const getFormInputIconSize = (componentSize: InputSize): IconSize => {
  switch (componentSize) {
    case 'medium':
      return 'medium';
    case 'small':
      return 'medium';
    case 'tiny':
      return 'small';
  }
};
