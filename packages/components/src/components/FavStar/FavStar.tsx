import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type Ref,
  forwardRef,
} from 'react';
import styled from 'styled-components';

import { favStarTokens } from './FavStar.tokens';
import { useControllableState } from '../../hooks/useControllableState';
import { HiddenInput, focusInputfield } from '../helpers';
import { Icon } from '../Icon';
import { StarFilledIcon, StarIcon } from '../Icon/icons';

export interface FavStarProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'children' | 'ref' | 'onChange' | 'value' | 'defaultValue'
  > {
  onChange?: (checked: boolean) => void;
}

const Button = styled.span`
  cursor: pointer;
  transition:
    150ms ease-in-out background-color,
    150ms ease-in-out color;

  color: ${favStarTokens().color};
  background-color: ${favStarTokens().backgroundColor};
  border-radius: ${favStarTokens().borderRadius};

  :hover {
    color: ${favStarTokens('hover').color};
    background-color: ${favStarTokens('hover').backgroundColor};
    border-radius: ${favStarTokens('hover').borderRadius};
  }

  ${HiddenInput}:focus + & {
    ${focusInputfield}
  }

  ${HiddenInput}:checked + & {
    color: ${favStarTokens('checked').color};
    background-color: ${favStarTokens('checked').backgroundColor};
    border-radius: ${favStarTokens('checked').borderRadius};
    :hover {
      color: ${favStarTokens('checkedHover').color};
      background-color: ${favStarTokens('checkedHover').backgroundColor};
      border-radius: ${favStarTokens('checkedHover').borderRadius};
    }
  }
`;

function _FavStar(
  {
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
  const [checked, setChecked] = useControllableState({
    value: checkedProp,
    defaultValue: defaultChecked ?? false,
    onChange,
  });
  return (
    <div onClick={() => setChecked(prev => !prev)}>
      <HiddenInput
        {...props}
        checked={checked}
        ref={ref}
        type="checkbox"
        aria-label={ariaLabel}
      />
      <Button className={className} style={style}>
        <Icon iconSize="medium" icon={checked ? StarFilledIcon : StarIcon} />
      </Button>
    </div>
  );
}

export const FavStar = forwardRef(_FavStar);

FavStar.displayName = 'FavStar';
