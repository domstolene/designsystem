import { InputSize } from '@norges-domstoler/dds-form';
import { IconSize } from '@norges-domstoler/dds-icons';

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
