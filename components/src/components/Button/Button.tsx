import { ElementType, forwardRef } from 'react';
import { buttonTokens as tokens } from './Button.tokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import { Spinner } from '../Spinner';
import { ButtonProps } from './Button.types';
import {
  ButtonContent,
  ButtonWrapper,
  IconWithTextWrapper,
  JustIconWrapper,
  Label
} from './Button.styles';

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
      className,
      style,
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
      tabIndex: -1
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
