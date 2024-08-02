import { type ComponentProps, forwardRef } from 'react';

import { cn } from '../../../utils';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import styles from '../OverflowMenu.module.css';

type OverflowMenuListHeaderProps = ComponentProps<'h2'>;

export const OverflowMenuListHeader = forwardRef<
  HTMLHeadingElement,
  OverflowMenuListHeaderProps
>((props, ref) => {
  return (
    <h2
      ref={ref}
      {...props}
      className={cn(
        typographyStyles['supporting-style-helpertext-01'],
        typographyStyles['text-color--default'],
        styles['group-header'],
      )}
    />
  );
});

OverflowMenuListHeader.displayName = 'OverflowMenuListHeader';
