import {
  type FocusEventHandler,
  type ForwardedRef,
  type HTMLAttributes,
  type MouseEventHandler,
  forwardRef,
} from 'react';

import styles from './Button.module.css';
import { type ButtonProps, type ButtonSize } from './Button.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { useButtonGroupContext } from '../ButtonGroup/ButtonGroup.context';
import { focusable } from '../helpers/styling/focus.module.css';
import { invisible } from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { type StaticTypographyType, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

const typographyTypes: Record<ButtonSize, StaticTypographyType> = {
  large: 'bodyLarge',
  medium: 'bodyMedium',
  small: 'bodySmall',
  xsmall: 'bodyXsmall',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      purpose = 'primary',
      size = 'medium',
      iconPosition = 'left',
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
      htmlProps = {},
      ...rest
    } = props;

    const { purpose: groupPurpose, size: groupSize } = useButtonGroupContext();

    const hasLabel = !!children;
    const hasIcon = !!icon;
    const hasLabelAndIcon = hasIcon && hasLabel;
    const isIconButton = !hasLabel && hasIcon;
    const isTextButton = hasLabel && !hasIcon;
    const noContent = !hasLabel && !hasIcon;

    const buttonCn = cn(
      className,
      styles.button,
      styles[`button--${groupPurpose ? groupPurpose : purpose}`],
      styles[`button--${groupSize ? groupSize : size}`],
      isTextButton && styles['just-text'],
      ...(hasLabelAndIcon
        ? [styles['with-text-and-icon'], styles[`with-icon-${iconPosition}`]]
        : []),
      isIconButton && styles['just-icon'],
      noContent && styles['no-content'],
      fullWidth && styles['button--full-width'],
      loading && styles['button--is-loading'],
      typographyStyles[getTypographyCn(typographyTypes[size])],
      focusable,
    );

    const iconElement = hasIcon && (
      <Icon
        icon={icon}
        iconSize="inherit"
        className={cn(styles.icon, loading && invisible)}
      />
    );

    const content = (
      <>
        {hasLabel && (
          <>
            {iconPosition === 'left' && iconElement}
            <span aria-hidden={loading} className={cn(loading && invisible)}>
              {children}
            </span>
            {iconPosition === 'right' && iconElement}
          </>
        )}
        {isIconButton && iconElement}
        {loading && (
          <span
            className={cn(!noContent && styles['spinner-wrapper--absolute'])}
          >
            <Spinner
              /*TODO: bytte til icon size token for button når den er på plass*/
              size="calc(var(--dds-font-lineheight-x1) * 1em)"
              color={
                purpose === 'primary' || purpose === 'danger'
                  ? 'iconOnAction'
                  : 'iconDefault'
              }
              tooltip={loadingTooltip}
              className={styles.icon}
            />
          </span>
        )}
      </>
    );

    if (!href)
      return (
        <button
          ref={ref}
          {...getBaseHTMLProps(id, buttonCn, htmlProps, rest)}
          onClick={loading ? undefined : onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-disabled={loading}
        >
          {content}
        </button>
      );
    else if (href)
      return (
        <a
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...getBaseHTMLProps(
            id,
            buttonCn,
            //TODO: fikse types ordentlig
            htmlProps as HTMLAttributes<HTMLAnchorElement>,
            rest,
          )}
          onClick={
            loading
              ? undefined
              : //TODO: fikse types ordentlig
                (onClick as unknown as MouseEventHandler<HTMLAnchorElement>)
          }
          //TODO: fikse types ordentlig
          onFocus={onFocus as unknown as FocusEventHandler<HTMLAnchorElement>}
          onBlur={onBlur as unknown as FocusEventHandler<HTMLAnchorElement>}
          href={href}
          rel="noreferrer noopener"
          target={target}
        >
          {content}
        </a>
      );
  },
);

Button.displayName = 'Button';
