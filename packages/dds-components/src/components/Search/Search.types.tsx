import { type ComponentPropsWithRef } from 'react';

import { type ExtractStrict } from '../../types';
import { type ButtonProps, type ButtonPurpose } from '../Button';
import { type SEARCH_SIZES } from './Search.utils';

export type SearchSize = (typeof SEARCH_SIZES)[number];

export type SearchButtonProps = {
  label?: string;
  purpose?: ExtractStrict<ButtonPurpose, 'primary' | 'secondary'>;
} & Pick<ButtonProps, 'loading' | 'loadingTooltip'> &
  ComponentPropsWithRef<'button'>;
