import { type HTMLAttributes, forwardRef } from 'react';

import styles from './Modal.module.css';
import { cn } from '../../utils';

export type ModalActionsProps = HTMLAttributes<HTMLDivElement>;

export const ModalActions = forwardRef<HTMLDivElement, ModalActionsProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest} className={cn(className, styles.actions)} />
    );
  },
);

ModalActions.displayName = 'ModalActions';
