import { type Ref, forwardRef, useId } from 'react';
import styled, { css } from 'styled-components';

import { favStarTokens } from './FavStar.tokens';
import { useControllableState } from '../../hooks/useControllableState';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import {
  HiddenInput,
  focusVisible,
  focusVisibleTransitionValue,
} from '../helpers';
import { Icon } from '../Icon';
import { StarFilledIcon, StarIcon } from '../Icon/icons';

type ComponentSize = 'medium' | 'large';

export interface FavStarProps
  extends BaseComponentPropsWithChildren<HTMLElement> {
  /**
   * Status på favorisering. `true` betyr at den er favorisert.
   */
  checked?: boolean;
  /**
   * Hvis du skal bruke `<FavStar>` uncontrolled så kan denne brukes til å sette den initielle "favortitt"-statusen.
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * Callback som blir kalt når brukeren endrer status på favorisering.
   */
  onChange?: (checked: boolean) => void;
  /**
   * Størrelse på `<FavStar>`. `'medium'` er den mest vanlige størrelsen.
   * @default 'medium'
   */
  size?: ComponentSize;
}

const TRANSITION_SPEED = '0.2s';

const StyledIcon = styled(Icon)<{ $opacity?: number }>`
  color: currentColor;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ $opacity = 1 }) => $opacity};
  @media (prefers-reduced-motion: no-preference) {
    transition:
      opacity ${TRANSITION_SPEED},
      transform ${TRANSITION_SPEED};
  }
`;

const Container = styled.label<{ size: ComponentSize }>`
  position: relative;
  cursor: pointer;
  width: ${({ size }) => favStarTokens(size).size};
  height: ${({ size }) => favStarTokens(size).size};

  &:has(${HiddenInput}:focus-visible) {
    ${focusVisible}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${TRANSITION_SPEED} color,
      ${TRANSITION_SPEED} background-color,
      ${TRANSITION_SPEED} transform,
      ${focusVisibleTransitionValue};
  }

  ${({ size }) => getVariantStyle(size)}

  &:hover {
    ${({ size }) => getVariantStyle(size, 'hover')}
  }

  &:has(${HiddenInput}:checked) {
    ${({ size }) => getVariantStyle(size, 'checked')}
    &:hover {
      ${({ size }) => getVariantStyle(size, 'checkedHover')}
    }
  }

  &:active {
    ${StyledIcon} {
      transform: scale(0.75);
    }
  }
`;

function getVariantStyle(
  size: ComponentSize,
  variant?: Parameters<typeof favStarTokens>[1],
) {
  return css`
    color: ${favStarTokens(size, variant).color};
    background-color: ${favStarTokens(size, variant).backgroundColor};
    border-radius: ${favStarTokens(size, variant).borderRadius};
  `;
}

export const FavStar = forwardRef(
  (
    {
      id,
      className,
      onChange,
      checked: checkedProp,
      defaultChecked,
      size = 'medium',
      htmlProps,
      ...rest
    }: FavStarProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const { style, ...props } = getBaseHTMLProps(
      id,
      className,
      htmlProps,
      rest,
    );
    const generatedId = useId();
    const [checked, setChecked] = useControllableState({
      value: checkedProp,
      defaultValue: defaultChecked ?? false,
      onChange,
    });
    return (
      <Container
        size={size}
        className={className}
        style={style}
        htmlFor={id ?? generatedId}
      >
        <HiddenInput
          {...props}
          id={id ?? generatedId}
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          ref={ref}
          type="checkbox"
          aria-label={props['aria-label'] ?? 'Favoriser'}
        />
        <StyledIcon iconSize={size} icon={StarIcon} />
        <StyledIcon
          iconSize={size}
          icon={StarFilledIcon}
          $opacity={checked ? 1 : 0}
        />
      </Container>
    );
  },
);

FavStar.displayName = 'FavStar';
