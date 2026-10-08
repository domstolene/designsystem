import { type Properties } from 'csstype';
import { useState } from 'react';

import styles from './Chip.module.css';
import {
  Badge,
  type BadgeInComponentProps,
  Icon,
  InlineButton,
  type SvgIcon,
} from '../..';
import { createTexts, useTranslation } from '../../i18n';
import {
  type ExtractStrict,
  type PolymorphicBaseComponentProps,
  createSizes,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils/dom';
import inputStyles from '../helpers/Input/Input.module.css';
import commonStyles from '../helpers/styling/common.module.css';
import focusStyles, { focusable } from '../helpers/styling/focus.module.css';
import { CloseIcon } from '../Icon/icons';
import { Paper } from '../layout';
import { Checkbox } from '../SelectionControl/Checkbox';
import { RadioButton } from '../SelectionControl/RadioButton';
import { TextOverflowEllipsisInner } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const CHIP_SIZES = createSizes('small', 'medium');

export type ChipSize = (typeof CHIP_SIZES)[number];

type ChipType = 'button' | 'span' | typeof RadioButton | typeof Checkbox;

type ChipBaseProps<T extends ChipType> = PolymorphicBaseComponentProps<
  T,
  {
    /** Størrelse.
     * @default 'medium'
     */
    size?: ChipSize;
    /** Ikon. Plasseres foran barn. Erstatter markør for valgkontroller i `<ChipCheckbox>` og `<ChipRadio>`. */
    icon?: SvgIcon;
  }
>;

type ChipCommonProps<T extends ChipType> = Omit<ChipBaseProps<T>, 'as'>;

export type ChipButtonProps = ChipCommonProps<'button'> & {
  /**Props for `<Badge>` som vises på knappen. */
  badgeProps?: BadgeInComponentProps;
};
export type ChipRemovableProps = ChipCommonProps<'span'> & {
  /** Ekstra logikk når `<ChipRemovable>` lukkes. */
  onClose?: () => void;
};

type ChipSelectionControlProps<
  T extends ExtractStrict<ChipType, typeof RadioButton | typeof Checkbox>,
> = Omit<
  ChipCommonProps<T>,
  'indeterminate' | 'label' | 'error' | 'readOnly'
> & {
  /** Om valgkontrollen skal vises.
   * @default true
   */
  showSelectionControlIndicator?: boolean;
};

type ChipSelectionControlInternalProps =
  | (ChipCheckboxProps & { as: typeof Checkbox })
  | (ChipRadioProps & { as: typeof RadioButton });

export type ChipCheckboxProps = ChipSelectionControlProps<typeof Checkbox>;
export type ChipRadioProps = ChipSelectionControlProps<typeof RadioButton>;

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
          focusable,
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
  children,
  badgeProps,
  ...rest
}: ChipButtonProps) => {
  return (
    <ChipBase
      as="button"
      size={size}
      {...getBaseHTMLProps(
        id,
        cn(className, commonStyles.button),
        style,
        htmlProps,
        rest,
      )}
    >
      {children}
      {badgeProps && (
        <Badge
          {...badgeProps}
          size={size}
          className={cn(commonStyles['badge--on-corner'], badgeProps.className)}
        />
      )}
    </ChipBase>
  );
};

const ChipSelectionControl = ({
  as,
  htmlProps,
  size = 'medium',
  showSelectionControlIndicator = true,
  id,
  className,
  style,
  ...rest
}: ChipSelectionControlInternalProps) => {
  const sizeMap = {
    small: 'sm',
    medium: 'md',
  };
  const sizeKey = sizeMap[size];

  const showIndicator = showSelectionControlIndicator && !rest.icon;

  const styleVariables = showIndicator
    ? ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--dds-spacing-chip-sl-left' as any]: `calc(var(--dds-spacing-compact-icon-left-${sizeKey}) + var(--dds-spacing-compact-icon-text-gap-${sizeKey}) + var(--dds-size-icon-component))`,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--dds-spacing-chip-sl-right' as any]: `var(--dds-spacing-compact-inline-${sizeKey})`,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--dds-spacing-chip-sl-marker-left' as any]: `var(--dds-spacing-compact-icon-left-${sizeKey})`,
      } satisfies Properties)
    : {};

  return (
    <ChipBase
      as={as}
      size={size}
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles['selection-control'],
          showIndicator
            ? styles['selection-control-spacing']
            : cn(
                styles['selection-control--no-indicator'],
                focusStyles['has-focusable-input'],
              ),
        ),
        { ...style, ...styleVariables },
        htmlProps,
        rest,
      )}
    />
  );
};

export const ChipCheckbox = (props: ChipCheckboxProps) => (
  <ChipSelectionControl {...props} as={Checkbox} />
);

export const ChipRadio = (props: ChipRadioProps) => (
  <ChipSelectionControl {...props} as={RadioButton} />
);

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
        cn(className, styles.removable),
        style,
        restHTMLprops,
        rest,
      )}
    >
      <TextOverflowEllipsisInner>{children}</TextOverflowEllipsisInner>
      <InlineButton
        icon={CloseIcon}
        color="icon-default"
        onClick={onClick}
        aria-label={
          ariaLabel ?? t(texts.removeChip) + (children ? ` ${children}` : '')
        }
      ></InlineButton>
    </ChipBase>
  ) : null;
};

ChipRemovable.displayName = 'ChipRemovable';
ChipRadio.displayName = 'ChipRadio';
ChipCheckbox.displayName = 'ChipCheckbox';
ChipButton.displayName = 'ChipButton';

const texts = createTexts({
  removeChip: {
    nb: 'Fjern merkelapp',
    no: 'Fjern merkelapp',
    nn: 'Fjern merkelapp',
    en: 'Remove chip',
    se: 'Sihku lihppu',
  },
});
