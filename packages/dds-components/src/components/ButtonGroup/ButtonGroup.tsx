import {
  type AriaRole,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  Children as ReactChildren,
  type ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';

import styles from './ButtonGroup.module.css';
import {
  type BaseComponentPropsWithChildren,
  type Direction,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { type ButtonSize } from '../Button/Button.types';

type PickedHTMLAttributes = Pick<
  HTMLAttributes<HTMLDivElement>,
  'role' | 'aria-label' | 'aria-labelledby'
>;

export type ButtonGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Retning for gruppen.
     * @default "row"
     */
    direction?: Direction;
    /**Størrelse på knappene.
     * @default "medium"
     */
    buttonSize?: ButtonSize;
    /**Nativ `aria-label` ved behov. */
    'aria-label'?: string;
    /**Nativ `aria-labelledby` ved behov. */
    'aria-labelledby'?: string;
    /**Nativ `role` ved behov.
     * @default "group"
     */
    role?: AriaRole;
  } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof PickedHTMLAttributes>
>;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const {
      children,
      id,
      className,
      htmlProps,
      direction = 'row',
      buttonSize = 'medium',
      role = 'group',
      ...rest
    } = props;

    const Children = ReactChildren.map(children, child => {
      return (
        isValidElement(child) &&
        cloneElement(child as ReactElement, {
          purpose: 'secondary',
          size: buttonSize,
        })
      );
    });

    return (
      <div
        ref={ref}
        role={role}
        {...getBaseHTMLProps(
          id,
          cn(className, styles.group, styles[`group--${direction}`]),
          htmlProps,
          rest,
        )}
      >
        {Children}
      </div>
    );
  },
);
ButtonGroup.displayName = 'ButtonGroup';
