import { Children, type HTMLAttributes, forwardRef } from 'react';

import styles from './Chip.module.css';
import { cn } from '../../utils/dom';
import utilStyles from '../helpers/styling/utilStyles.module.css';

export type ChipGroupProps = HTMLAttributes<HTMLUListElement>;

export const ChipGroup = forwardRef<HTMLUListElement, ChipGroupProps>(
  ({ children, className, ...rest }, ref) => {
    const childrenArray = Children.toArray(children);

    return (
      <ul
        {...rest}
        className={cn(
          className,
          styles.group,
          utilStyles['remove-list-styling'],
        )}
        ref={ref}
      >
        {childrenArray.map((item, index) => (
          <li key={`chip-${index}`}>{item}</li>
        ))}
      </ul>
    );
  },
);

ChipGroup.displayName = 'ChipGroup';
