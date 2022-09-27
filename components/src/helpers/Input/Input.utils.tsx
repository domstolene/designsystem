import { IconSize } from '../../components/Icon';
import { InputSize } from './Input.types';

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
