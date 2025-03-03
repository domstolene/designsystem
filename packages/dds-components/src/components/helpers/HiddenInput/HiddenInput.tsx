import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../styling/utilStyles.module.css';

export const HiddenInput = ({
  className,
  ...rest
}: ComponentPropsWithRef<'input'>) => (
  <input className={cn(className, utilStyles['hide-input'])} {...rest} />
);
