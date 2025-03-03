import { type ComponentPropsWithRef } from 'react';

import styles from './Modal.module.css';
import { cn } from '../../utils';

export type ModalActionsProps = ComponentPropsWithRef<'div'>;

export const ModalActions = ({ className, ...rest }: ModalActionsProps) => (
  <div {...rest} className={cn(className, styles.actions)} />
);

ModalActions.displayName = 'ModalActions';
