import React, { ButtonHTMLAttributes, ElementType, forwardRef } from 'react';
import { buttonTokens as tokens } from './buttonTokens';
import styled, { css } from 'styled-components';
import { IconWrapper } from '../../helpers/IconWrapper';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import Spinner from '../../helpers/Spinner';
import { typographyTokens } from '../Typography/typographyTokens';

const buttonContentStyle = (
  purpose: ButtonPurpose,
  appearance: Appearance,
  label?: string,
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
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

type ButtonContentProps = {
  purpose: ButtonPurpose;
  appearance: Appearance;
  size: Size;
  label?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  iconPosition?: IconPosition;
  fullWidth?: boolean;
};

const ButtonContent = styled.span<ButtonContentProps>`
  display: flex;
  align-items: center;
  position: relative;
  transition: background-color 0.2s, text-decoration-color 0.2s, box-shadow 0.2s,
    border-color 0.2s, color 0.2s;
  ${({ label, purpose, appearance, Icon }) =>
    buttonContentStyle(purpose, appearance, label, Icon)}
  &:focus {
    outline: none;
  }

  ${({ fullWidth, Icon, label }) =>
    fullWidth &&
    (!Icon || !label
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
  size: Size;
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

const JustIconWrapper = styled.span<{ size: Size }>`
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
type Size = 'small' | 'medium' | 'large';
type Appearance = 'filled' | 'ghost' | 'rounded' | 'borderless';
type IconPosition = 'left' | 'right';

export type ButtonProps = {
  size?: Size;
  label?: string;
  purpose?: ButtonPurpose;
  iconPosition?: IconPosition;
  appearance?: Appearance;
  href?: string;
  target?: string;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
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
          {/* { loading && <Spinner inline width={1} unit='em' /> } */}
          {loading ? (
            <Spinner inline width={1} unit="em" />
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
