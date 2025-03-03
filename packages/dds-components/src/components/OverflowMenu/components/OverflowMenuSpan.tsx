import { cn } from '../../../utils';
import { Icon } from '../../Icon';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import styles from '../OverflowMenu.module.css';
import { type OverflowMenuSpanProps } from '../OverflowMenu.types';

export const OverflowMenuSpan = ({
  icon,
  children,
  className,
  purpose = 'default',
  ...rest
}: OverflowMenuSpanProps) => (
  <li>
    <span
      className={cn(
        className,
        styles.list__item,
        styles[purpose],
        typographyStyles['body-small'],
      )}
      {...rest}
    >
      {icon && <Icon iconSize="inherit" icon={icon} />}
      {children}
    </span>
  </li>
);

OverflowMenuSpan.displayName = 'OverflowMenuSpan';
