import { type Properties } from 'csstype';
import { useState } from 'react';

import styles from './Chip.module.css';
import { Icon, type SvgIcon } from '../..';
import { createTexts, useTranslation } from '../../i18n';
import {
  type BaseComponentProps,
  type PolymorphicBaseComponentProps,
  createSizes,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils/dom';
import { Button } from '../Button';
import inputStyles from '../helpers/Input/Input.module.css';
import { CloseIcon } from '../Icon/icons';
import { Bleed, Paper } from '../layout';
import { Checkbox } from '../SelectionControl/Checkbox';
import { RadioButton } from '../SelectionControl/RadioButton';
import { TextOverflowEllipsisInner } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type ChipProps = BaseComponentProps<
  HTMLDivElement,
  {
    /** Teksten som vises i komponenten. */
    children?: string;
    /** Ekstra logikk når `<Chip>` lukkes. */
    onClose?: () => void;
  }
>;

export const CHIP_SIZES = createSizes('small', 'medium');

export type ChipSize = (typeof CHIP_SIZES)[number];

type ChipType = 'button' | 'span' | typeof RadioButton | typeof Checkbox;

type ChipCommonProps<T extends ChipType> = PolymorphicBaseComponentProps<
  T,
  {
    /** Størrelsen på chip-komponenten. */
    size?: ChipSize;
    /** Ikonet som vises. */
    icon?: SvgIcon;
  }
>;

type ChipBaseProps<T extends ChipType> = ChipCommonProps<T>;

export type ChipButtonProps = ChipCommonProps<'button'> & {};
export type ChipRemovableProps = ChipCommonProps<'span'> & {
  onClose?: () => void;
};
export type ChipCheckboxProps = ChipCommonProps<typeof Checkbox>;
export type ChipRadioProps = ChipCommonProps<typeof RadioButton>;

export const ChipBase = <T extends ChipType = 'span'>({
  htmlProps,
  size = 'medium',
  id,
  className,
  style,
  children,
  icon,
  ...rest
}: ChipBaseProps<T>) => {
  const hasIcon = !!icon;
  return (
    <Paper
      display="inline-flex"
      alignItems="center"
      maxWidth="100%"
      borderRadius="rounded"
      border="border-subtle"
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          typographyStyles[`body-short-${size}`],
          inputStyles[`compact--${size}`],
          hasIcon && inputStyles[`compact-with-icon--${size}`],
          styles.container,
        ),
        style,
        htmlProps,
        { ...rest, size },
      )}
    >
      {!!icon && <Icon icon={icon} iconSize="component" />}
      {children}
    </Paper>
  );
};

export const ChipButton = ({
  htmlProps,
  size = 'medium',
  id,
  className,
  style,
  ...rest
}: ChipButtonProps) => {
  return (
    <ChipBase
      as="button"
      size={size}
      {...getBaseHTMLProps(
        id,
        cn(className, styles.resting),
        style,
        htmlProps,
        rest,
      )}
    />
  );
};

const sizeMap = {
  small: 'sm',
  medium: 'md',
};

export const ChipCheckbox = ({
  htmlProps,
  size = 'medium',
  id,
  className,
  style,
  ...rest
}: ChipCheckboxProps) => {
  const styleVariables = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-spacing-chip-sl-left' as any]: `calc(var(--dds-spacing-compact-icon-left-${sizeMap[size]}) + var(--dds-spacing-compact-icon-text-gap-${sizeMap[size]}) + var(--dds-size-icon-component))`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-spacing-chip-sl-right' as any]: `var(--dds-spacing-compact-inline-${sizeMap[size]})`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-spacing-chip-sl-marker-left' as any]: `var(--dds-spacing-compact-icon-left-${sizeMap[size]})`,
  } satisfies Properties;

  console.log('size', size);

  return (
    <ChipBase
      as={Checkbox}
      size={size}
      {...getBaseHTMLProps(
        id,
        cn(className, styles['selection-control']),
        { ...style, ...styleVariables },
        htmlProps,
        rest,
      )}
    />
  );
};

export const ChipRadio = ({
  htmlProps,
  size = 'medium',
  id,
  className,
  style,
  ...rest
}: ChipRadioProps) => {
  const styleVariables = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-spacing-chip-sl-left' as any]: `calc(var(--dds-spacing-compact-icon-left-${sizeMap[size]}) + var(--dds-spacing-compact-icon-text-gap-${sizeMap[size]}) + var(--dds-size-icon-component))`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-spacing-chip-sl-right' as any]: `var(--dds-spacing-compact-inline-${sizeMap[size]})`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-spacing-chip-sl-marker-left' as any]: `var(--dds-spacing-compact-icon-left-${sizeMap[size]})`,
  } satisfies Properties;

  return (
    <ChipBase
      as={RadioButton}
      size={size}
      {...getBaseHTMLProps(
        id,
        cn(className, styles['selection-control']),
        { ...style, ...styleVariables },
        htmlProps,
        rest,
      )}
    />
  );
};

export const ChipRemovable = ({
  htmlProps = {},
  onClose,
  size = 'medium',
  id,
  className,
  style,
  children,
  ...rest
}: ChipRemovableProps) => {
  const { t } = useTranslation();
  const { 'aria-label': ariaLabel, ...restHTMLprops } = htmlProps;

  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(false);
    onClose?.();
  };

  return isOpen ? (
    <ChipBase
      size={size}
      {...getBaseHTMLProps(
        id,
        cn(className, styles.selected),
        style,
        restHTMLprops,
        rest,
      )}
    >
      <TextOverflowEllipsisInner>{children}</TextOverflowEllipsisInner>
      <Bleed
        as={Button}
        purpose="tertiary"
        size="xsmall"
        icon={CloseIcon}
        onClick={onClick}
        aria-label={
          ariaLabel ?? t(texts.removeChip) + (children ? ` ${children}` : '')
        }
        bleedMarginBlock="x0.25"
        bleedMarginInline="x0.125 x0.25"
        reflectivePadding
      />
    </ChipBase>
  ) : null;
};

ChipRemovable.displayName = 'ChipRemovable';

const texts = createTexts({
  removeChip: {
    nb: 'Fjern merkelapp',
    no: 'Fjern merkelapp',
    nn: 'Fjern merkelapp',
    en: 'Remove chip',
    se: 'Sihku lihppu',
  },
});
