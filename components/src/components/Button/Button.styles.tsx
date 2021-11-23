import { ButtonAppearance, ButtonPurpose, ButtonProps } from './Button.types';
import { buttonTokens as tokens } from './Button.tokens';
import styled, { css } from 'styled-components';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { IconWrapper } from '../../helpers/IconWrapper';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { typographyTokens } from '../Typography/Typography.tokens';

export const buttonContentStyle = (
  purpose: ButtonPurpose,
  appearance: ButtonAppearance,
  label?: string,
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>
) => css`
  display: flex;
  align-items: center;
  position: relative;
  transition: background-color 0.2s, text-decoration-color 0.2s, box-shadow 0.2s,
    border-color 0.2s, color 0.2s;
  ${tokens.base}
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${appearance &&
  purpose &&
  css`
    ${tokens.appearance[appearance].base}
    ${tokens.appearance[appearance][purpose].base}
    &:hover {
      ${tokens.appearance[appearance][purpose].hover.base}
    }
    &:active {
      ${tokens.appearance[appearance][purpose].active.base}
    }
  `}

  ${Icon &&
  !label &&
  appearance === 'borderless' &&
  css`
    &:hover {
      ${tokens.appearance[appearance][purpose].justIcon.hover.base}
    }
    &:active {
      ${tokens.appearance[appearance][purpose].justIcon.active.base}
    }
  `}
`;

type ButtonContentProps = Pick<
  ButtonProps,
  | 'purpose'
  | 'appearance'
  | 'size'
  | 'label'
  | 'Icon'
  | 'iconPosition'
  | 'fullWidth'
  | 'loading'
>;

export const ButtonContent = styled.span<ButtonContentProps>`
  ${({ label, purpose, appearance, Icon }) =>
    purpose &&
    appearance &&
    buttonContentStyle(purpose, appearance, label, Icon)}
  &:focus {
    outline: none;
  }

  ${({ fullWidth, Icon, label, loading }) =>
    fullWidth &&
    (!Icon || !label || loading
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: space-between;
        `)}
  ${({ size, label }) =>
    size &&
    (label
      ? css`
          ${tokens.sizes[size].text.base}
        `
      : css`
          ${tokens.sizes[size].justIcon.base}
        `)}
`;

type ButtonWrapperProps = Pick<ButtonProps, 'fullWidth'>;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-block;
  border: none;
  cursor: pointer;
  box-shadow: none;
  padding: 0;
  background-color: transparent;
  text-decoration: none;
  ${({ fullWidth }) =>
    !fullWidth &&
    css`
      width: fit-content;
    `}

  &:focus > ${ButtonContent} {
    outline: ${tokens.focusOutline.width} solid ${tokens.focusOutline.color};
    outline-offset: 2px;
  }
  &:focus {
    outline: none;
  }
`;

type IconWithTextWrapperProps = Pick<ButtonProps, 'iconPosition' | 'size'>;

export const IconWithTextWrapper = styled(
  IconWrapper
)<IconWithTextWrapperProps>`
  ${({ size, iconPosition }) =>
    size &&
    (iconPosition === 'left'
      ? css`
          margin-inline-end: ${tokens.sizes[size].iconWithTextMargin};
        `
      : iconPosition === 'right'
      ? css`
          margin-inline-start: ${tokens.sizes[size].iconWithTextMargin};
        `
      : '')}
`;

type JustIconWrapperProps = Pick<ButtonProps, 'size'>;

export const JustIconWrapper = styled.span<JustIconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) =>
    size &&
    css`
      ${tokens.sizes[size].justIconWrapper.base}
    `}
`;

export const Label = styled.span``;
