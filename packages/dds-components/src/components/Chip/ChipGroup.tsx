import { Children, type ComponentPropsWithRef } from 'react';

import styles from './Chip.module.css';
import { cn } from '../../utils/dom';
import { StylelessList } from '../helpers';

export type ChipGroupProps = ComponentPropsWithRef<'ul'>;

export const ChipGroup = ({ children, className, ...rest }: ChipGroupProps) => {
  const childrenArray = Children.toArray(children);

  return (
    <StylelessList {...rest} className={cn(className, styles.group)}>
      {childrenArray.map((item, index) => (
        <li key={`chip-${index}`}>{item}</li>
      ))}
    </StylelessList>
  );
};

ChipGroup.displayName = 'ChipGroup';
