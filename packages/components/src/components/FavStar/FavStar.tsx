import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type Ref,
  forwardRef,
  useId,
} from 'react';
import styled, { css } from 'styled-components';

import { favStarTokens } from './FavStar.tokens';
import { useControllableState } from '../../hooks/useControllableState';
import {
  HiddenInput,
  focusVisible,
  focusVisibleTransitionValue,
} from '../helpers';
import { Icon } from '../Icon';
import { StarFilledIcon, StarIcon } from '../Icon/icons';

export interface FavStarProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'children' | 'ref' | 'onChange' | 'value' | 'defaultValue'
  > {
  onChange?: (checked: boolean) => void;
}

const TRANSITION_SPEED = '0.1s';

const Container = styled.label`
  position: relative;
  cursor: pointer;
  width: ${favStarTokens().size};
  height: ${favStarTokens().size};

  &:has(${HiddenInput}:focus-visible) {
    ${focusVisible}
    @media (prefers-reduced-motion: no-preference) {
      transition: ${focusVisibleTransitionValue};
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${TRANSITION_SPEED} color,
      ${TRANSITION_SPEED} background-color,
      ${TRANSITION_SPEED} transform;
  }

  ${getVariantStyle()}

  &:hover {
    ${getVariantStyle('hover')}
  }

  &:has(${HiddenInput}:checked) {
    ${getVariantStyle('checked')}
    &:hover {
      ${getVariantStyle('checkedHover')}
    }
  }

  &:active {
    transform: scale(0.75);
  }
`;

function getVariantStyle(variant?: Parameters<typeof favStarTokens>[0]) {
  return css`
    color: ${favStarTokens(variant).color};
    background-color: ${favStarTokens(variant).backgroundColor};
    border-radius: ${favStarTokens(variant).borderRadius};
  `;
}

const StyledIcon = styled(Icon)<{ $opacity?: number }>`
  color: currentColor;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: ${TRANSITION_SPEED} opacity;
  opacity: ${({ $opacity = 1 }) => $opacity};
`;

function _FavStar(
  {
    id,
    className,
    style,
    onChange,
    checked: checkedProp,
    defaultChecked,
    'aria-label': ariaLabel = 'Favoritt',
    ...props
  }: FavStarProps,
  ref: Ref<HTMLInputElement>,
) {
  const generatedId = useId();
  const [checked, setChecked] = useControllableState({
    value: checkedProp,
    defaultValue: defaultChecked ?? false,
    onChange,
  });
  return (
    <Container className={className} style={style} htmlFor={id ?? generatedId}>
      <HiddenInput
        {...props}
        id={id ?? generatedId}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        ref={ref}
        type="checkbox"
        aria-label={ariaLabel}
      />
      <StyledIcon iconSize="medium" icon={StarIcon} />
      <StyledIcon
        iconSize="medium"
        icon={StarFilledIcon}
        $opacity={checked ? 1 : 0}
      />
    </Container>
  );
}

export const FavStar = forwardRef(_FavStar);

FavStar.displayName = 'FavStar';
