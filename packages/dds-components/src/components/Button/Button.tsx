import {
  type ButtonHTMLAttributes,
  type FocusEventHandler,
  type HTMLAttributes,
  type MouseEventHandler,
  type RefObject,
} from 'react';

import styles from './Button.module.css';
import { type ButtonProps } from './Button.types';
import { createTexts, useTranslation } from '../../i18n';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { useButtonGroupContext } from '../ButtonGroup/ButtonGroup.context';
import { focusable } from '../helpers/styling/focus.module.css';
import { invisible } from '../helpers/styling/utilStyles.module.css';
import { Icon, type SvgIcon } from '../Icon';
import { Spinner } from '../Spinner';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const Button = <I extends SvgIcon>({
  children,
  purpose = 'primary',
  size = 'medium',
  iconPosition = 'left',
  href,
  target,
  loading,
  loadingTooltip,
  fullWidth = false,
  icon,
  iconState,
  onClick,
  onFocus,
  onBlur,
  id,
  ref,
  className,
  style,
  htmlProps = {},
  ...props
}: ButtonProps<I>) => {
  const { purpose: groupPurpose, size: groupSize } = useButtonGroupContext();
  const { t } = useTranslation();
  const spinnerTooltip = loadingTooltip ?? t(texts.saving);

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
    typographyStyles[`body-short-${size}`],
    focusable,
  );

  const iconElement = hasIcon && (
    <Icon
      icon={icon}
      iconSize="component"
      className={cn(loading && invisible)}
      iconState={iconState}
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
            size="var(--dds-size-icon-component)"
            color={
              purpose === 'primary' || purpose === 'danger'
                ? 'icon-on-action'
                : 'icon-default'
            }
            tooltip={spinnerTooltip}
          />
        </span>
      )}
    </>
  );

  const rest = props as ButtonHTMLAttributes<HTMLButtonElement>;
  const { disabled: restDisabled, ...restFinal } = rest;

  const htmlDisabled = htmlProps.disabled;
  const isDisabled = (restDisabled ?? htmlDisabled ?? loading) === true;

  if (!href)
    return (
      <button
        ref={ref}
        {...getBaseHTMLProps(id, buttonCn, style, htmlProps, restFinal)}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={isDisabled}
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
          style,
          //TODO: fikse types ordentlig
          htmlProps as HTMLAttributes<HTMLAnchorElement>,
          props,
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

const texts = createTexts({
  saving: {
    no: 'Lagring pågår',
    nb: 'Lagring pågår',
    nn: 'Lagring pågår',
    en: 'Saving',
    se: 'Vurkemin',
  },
});
