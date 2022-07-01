import { ElementType, forwardRef } from 'react';
import { buttonTokens as tokens } from './Button.tokens';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { ButtonProps } from './Button.types';
import { ButtonWrapper, StyledIconWrapperSpan, Label } from './Button.styles';
import { getBaseHTMLProps } from '../../types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      label,
      purpose = 'primary',
      size = 'medium',
      iconPosition = 'left',
      appearance = 'filled',
      href,
      target,
      loading = false,
      fullWidth = false,
      icon,
      onClick,
      onFocus,
      onBlur,
      id,
      htmlProps,
      ...rest
    } = props;

    const as: ElementType = href ? 'a' : 'button';

    const hasLabel = !!label;
    const hasIcon = !!icon;

    const wrapperProps = {
      ...getBaseHTMLProps(id, htmlProps, rest),
      href,
      label,
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
      onClick,
      onFocus,
      onBlur
    };

    const isIconButton = !hasLabel && hasIcon;

    const iconElement = icon && (
      <StyledIconWrapperSpan
        iconPosition={isIconButton ? undefined : iconPosition}
        size={size}
        isHidden={hasIcon && loading}
      >
        <Icon iconName={icon} iconSize="inherit" />
      </StyledIconWrapperSpan>
    );

    return (
      <ButtonWrapper {...wrapperProps}>
        {!isIconButton && (
          <>
            {iconPosition === 'left' && iconElement}
            <Label isHidden={loading} aria-hidden={loading}>
              {label}
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
              color={tokens.appearance[appearance][purpose].base.color}
              size={tokens.sizes[size].justIcon.base.fontSize as string}
            />
          </StyledIconWrapperSpan>
        )}
      </ButtonWrapper>
    );
  }
);
