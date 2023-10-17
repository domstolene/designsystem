import { ElementType, forwardRef, MouseEvent } from 'react';
import { Icon } from '@norges-domstoler/dds-icons';
import { getBaseHTMLProps } from '@norges-domstoler/dds-core';

import { buttonTokens as tokens } from './Button.tokens';
import { Spinner } from '../Spinner';
import { ButtonProps } from './Button.types';
import { ButtonWrapper, StyledIconWrapperSpan, Label } from './Button.styles';

const {
  button: { sizes, appearances },
} = tokens;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      label,
      children,
      purpose = 'primary',
      size = 'medium',
      iconPosition = 'left',
      appearance = 'filled',
      href,
      target,
      loading = false,
      loadingTooltip = 'Lagring pågår',
      fullWidth = false,
      icon,
      onClick,
      onFocus,
      onBlur,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const as: ElementType = href ? 'a' : 'button';

    const hasLabel = !!children || !!label;
    const hasIcon = !!icon;

    const wrapperProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      href,
      as,
      rel: href ? 'noreferrer noopener' : undefined,
      target: href && target ? target : undefined,
      ref,
      appearance,
      purpose,
      iconPosition,
      fullWidth,
      hasLabel: hasLabel,
      hasIcon: hasIcon,
      isLoading: loading,
      size,
      onClick: (
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      ) => {
        if (!loading && onClick) {
          onClick(event);
        }
      },
      onFocus,
      onBlur,
    };

    const isIconButton = !hasLabel && hasIcon;

    const iconElement = icon && (
      <StyledIconWrapperSpan
        size={size}
        isHidden={hasIcon && loading}
        justIcon={isIconButton}
      >
        <Icon icon={icon} iconSize="inherit" />
      </StyledIconWrapperSpan>
    );

    return (
      <ButtonWrapper {...wrapperProps} aria-disabled={loading}>
        {!isIconButton && (
          <>
            {iconPosition === 'left' && iconElement}
            <Label isHidden={loading} aria-hidden={loading}>
              {children ?? label}
            </Label>
            {iconPosition === 'right' && iconElement}
          </>
        )}
        {isIconButton && iconElement}
        {loading && (
          <StyledIconWrapperSpan
            size={size}
            absolutePosition={hasIcon || hasLabel}
          >
            <Spinner
              color={appearances[appearance].purpose[purpose].base.color}
              size={sizes[size].justIcon.icon.fontSize}
              tooltip={loadingTooltip}
            />
          </StyledIconWrapperSpan>
        )}
      </ButtonWrapper>
    );
  }
);

Button.displayName = 'Button';
