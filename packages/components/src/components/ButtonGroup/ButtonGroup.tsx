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
import styled, { css } from 'styled-components';

import {
  type BaseComponentPropsWithChildren,
  type Direction,
  getBaseHTMLProps,
} from '../../types';
import { type ButtonSize } from '../Button/Button.types';

interface StyledButtonGroupProps {
  $direction: Direction;
}

const StyledButtonGroup = styled.div<StyledButtonGroupProps>`
  button:focus-visible {
    position: relative;
    z-index: 1;
  }
  ${({ $direction }) =>
    $direction === 'column'
      ? css`
          display: flex;
          flex-direction: column;
          button {
            width: 100%;
          }
          button:first-child {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: transparent;
          }
          button:last-child {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          button:not(:first-child):not(:last-child) {
            border-radius: 0;
            border-bottom: transparent;
          }
        `
      : css`
          button:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: transparent;
          }
          button:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          button:not(:first-child):not(:last-child) {
            border-radius: 0;
            border-right: transparent;
          }
        `}
`;

type PickedHTMLAttributes = Pick<
  HTMLAttributes<HTMLDivElement>,
  'role' | 'aria-label' | 'aria-labelledby'
>;

export type ButtonGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Retning for gruppen. */
    direction?: Direction;
    /**Størrelse på knappene. */
    buttonSize?: ButtonSize;
    /**Nativ `aria-label` ved behov. */
    'aria-label'?: string;
    /**Nativ `aria-labelledby` ved behov. */
    'aria-labelledby'?: string;
    /**Nativ `role` ved behov. */
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
          appearance: 'filled',
          size: buttonSize,
        })
      );
    });
    return (
      <StyledButtonGroup
        ref={ref}
        role={role}
        $direction={direction}
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
      >
        {Children}
      </StyledButtonGroup>
    );
  },
);
ButtonGroup.displayName = 'ButtonGroup';
