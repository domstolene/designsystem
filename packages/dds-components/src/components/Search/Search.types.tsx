import { type ComponentPropsWithRef } from 'react';

import { type ExtractStrict } from '../../types';
import { type ButtonProps, type ButtonPurpose } from '../Button';

export type SearchSize = 'small' | 'medium' | 'large';

export type SearchButtonProps = {
  label?: string;
  purpose?: ExtractStrict<ButtonPurpose, 'primary' | 'secondary'>;
} & Pick<ButtonProps, 'loading' | 'loadingTooltip'> &
  ComponentPropsWithRef<'button'>;
