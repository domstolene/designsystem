import { InputSize } from '../components/helpers';
import { IconSize } from '../components/Icon';

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
