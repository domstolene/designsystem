import { ElementType, forwardRef } from 'react';
import { buttonTokens as tokens } from './Button.tokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import { Spinner } from '../Spinner';
import { ButtonProps } from './Button.types';
import { ButtonWrapper, StyledIconWrapperSpan, Label } from './Button.styles';

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
      loading = false,
      fullWidth = false,
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
      appearance,
      purpose,
      iconPosition,
      fullWidth,
      hasLabel: !!label,
      hasIcon: !!Icon,
      isLoading: loading,
      disabled,
      size,
      className,
      style,
      ...rest
    };

    const hasLabel = !!label;
    const isIconButton = !hasLabel && !!Icon;

    const iconElement = Icon && (
      <StyledIconWrapperSpan
        iconPosition={isIconButton ? undefined : iconPosition}
        size={size}
      >
        <IconWrapper Icon={Icon} iconSize="inline" />
      </StyledIconWrapperSpan>
    );

    return (
      <ButtonWrapper {...wrapperProps}>
        {loading && (
          <StyledIconWrapperSpan size={size}>
            <Spinner
              color={tokens.appearance[appearance][purpose].base.color}
              size={tokens.sizes[size].justIcon.base.fontSize as string}
            />
          </StyledIconWrapperSpan>
        )}

        {isIconButton && !loading && iconElement}

        {hasLabel && !loading && (
          <>
            {iconPosition === 'left' && iconElement}
            <Label>{label}</Label>
            {iconPosition === 'right' && iconElement}
          </>
        )}
      </ButtonWrapper>
    );
  }
);
