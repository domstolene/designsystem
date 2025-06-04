import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../styling/utilStyles.module.css';

export type StylelessButtonProps<TProps extends object = object> = TProps &
  ComponentPropsWithRef<'button'>;

export const StylelessButton = ({
  className,
  ...rest
}: StylelessButtonProps) => (
  <button
    {...rest}
    className={cn(
      className,
      utilStyles['remove-button-styling'],
      utilStyles['normalize-button'],
    )}
  />
);
