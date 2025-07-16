import {
  type FocusEventHandler,
  type HTMLAttributes,
  type MouseEventHandler,
  type RefObject,
} from 'react';

import styles from './Button.module.css';
import { type ButtonProps } from './Button.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { useButtonGroupContext } from '../ButtonGroup/ButtonGroup.context';
import { focusable } from '../helpers/styling/focus.module.css';
import { invisible } from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const Button = ({
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
  ref,
  className,
  htmlProps = {},
  ...rest
}: ButtonProps) => {
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
    typographyStyles[`body-${size}`],
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
        <span className={cn(!noContent && styles['spinner-wrapper--absolute'])}>
          <Spinner
            size="1em"
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
        ref={ref as RefObject<HTMLAnchorElement | null>}
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
};

Button.displayName = 'Button';
