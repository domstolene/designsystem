import { type ComponentProps, forwardRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../../helpers/styling/utilStyles.module.css';

type OverflowMenuListProps = ComponentProps<'ul'>;

export const OverflowMenuList = forwardRef<
  HTMLUListElement,
  OverflowMenuListProps
>((props, ref) => {
  return (
    <ul
      ref={ref}
      {...props}
      className={cn(props.className, utilStyles['remove-list-styling'])}
    />
  );
});
