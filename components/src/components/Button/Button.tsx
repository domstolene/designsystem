import React, { ButtonHTMLAttributes, ElementType, forwardRef } from 'react';
import { buttonTokens as tokens } from './Button.tokens';
import styled, { css } from 'styled-components';
import { IconWrapper } from '../../helpers/IconWrapper';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Spinner } from '../Spinner';
import { typographyTokens } from '../Typography/Typography.tokens';

const buttonContentStyle = (
  purpose: ButtonPurpose,
  appearance: ButtonAppearance,
  label?: string,
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>
) => css`
  ${tokens.base}
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${appearance &&
  css`
    ${tokens.appearance[appearance].base}
  `}
  ${appearance &&
  purpose &&
  css`
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

const ButtonContent = styled.span<ButtonContentProps>`
  display: flex;
  align-items: center;
  position: relative;
  transition: background-color 0.2s, text-decoration-color 0.2s, box-shadow 0.2s,
    border-color 0.2s, color 0.2s;
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

const IconWithTextWrapper = styled(IconWrapper)<{
  iconPosition: IconPosition;
  size: ButtonSize;
}>`
  ${({ size, iconPosition }) =>
    iconPosition === 'left'
      ? css`
          margin-inline-end: ${tokens.sizes[size].iconWithTextMargin};
        `
      : iconPosition === 'right'
      ? css`
          margin-inline-start: ${tokens.sizes[size].iconWithTextMargin};
        `
      : ''}
`;

const ButtonWrapper = styled.button<{ fullWidth?: boolean }>`
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

const JustIconWrapper = styled.span<{ size: ButtonSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) =>
    size &&
    css`
      ${tokens.sizes[size].justIconWrapper.base}
    `}
`;

const Label = styled.span``;

export type ButtonPurpose = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonAppearance = 'filled' | 'ghost' | 'rounded' | 'borderless';
export type IconPosition = 'left' | 'right';

export type ButtonProps = {
  size?: ButtonSize;
  label?: string;
  purpose?: ButtonPurpose;
  iconPosition?: IconPosition;
  appearance?: ButtonAppearance;
  href?: string;
  target?: string;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      disabled,
      purpose = 'primary',
      size = 'medium',
      iconPosition = 'left',
      appearance = 'filled',
      href,
      target,
      loading,
      fullWidth,
      className,
      style,
      Icon,
      ...rest
    },
    ref
  ) => {
    const as: ElementType = href ? 'a' : 'button';

    const wrapperProps = {
      href,
      label,
      as,
      rel: href ? 'noreferrer noopener' : undefined,
      target: href && target ? target : undefined,
      ref,
      fullWidth,
      disabled,
      ...rest
    };

    const contentProps = {
      iconPosition,
      appearance,
      purpose,
      label,
      size,
      Icon,
      fullWidth,
      loading,
      tabIndex: -1,
      className,
      style
    };

    const iconElement = Icon && iconPosition && size && (
      <IconWithTextWrapper
        Icon={Icon}
        iconPosition={iconPosition}
        iconSize="inline"
        size={size}
      />
    );

    return (
      <ButtonWrapper {...wrapperProps}>
        <ButtonContent {...contentProps}>
          {loading ? (
            <JustIconWrapper size={size}>
              <Spinner
                color={tokens.appearance[appearance][purpose].base.color}
                size={tokens.sizes[size].justIcon.base.fontSize as string}
              />
            </JustIconWrapper>
          ) : !label && Icon ? (
            <JustIconWrapper size={size}>
              <IconWrapper Icon={Icon} iconSize="inline" />
            </JustIconWrapper>
          ) : label ? (
            <>
              {iconPosition === 'left' && iconElement}
              <Label>{label}</Label>
              {iconPosition === 'right' && iconElement}
            </>
          ) : (
            ''
          )}
        </ButtonContent>
      </ButtonWrapper>
    );
  }
);
