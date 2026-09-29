import { type Properties } from 'csstype';

import styles from './Tag.module.css';
import {
  type BaseComponentProps,
  createPurposes,
  createSizes,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import inputStyles from '../helpers/Input/Input.module.css';
import { Icon, type SvgIcon } from '../Icon';
import {
  CheckCircledIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from '../Icon/icons';
import {
  TextOverflowEllipsisInner,
  TextOverflowEllipsisWrapper,
} from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const icons: Record<TagPurpose, SvgIcon | undefined> = {
  info: InfoIcon,
  danger: ErrorIcon,
  warning: WarningIcon,
  success: CheckCircledIcon,
  neutral: undefined,
};

export const TAG_PURPOSES = createPurposes(
  'success',
  'info',
  'danger',
  'warning',
  'neutral',
);

export const TAG_SIZES = createSizes('small', 'medium');
export const TAG_COLORS = [
  'teal',
  'blue',
  'red',
  'green',
  'magenta',
  'olive',
  'gray',
  'brown',
  'deepblue',
] as const;

export const TAG_APPEARANCES = [
  'outline',
  'strong',
  'subtle',
  'accent-left',
] as const;

export type TagPurpose = (typeof TAG_PURPOSES)[number];
export type TagSize = (typeof TAG_SIZES)[number];
export type TagAppearance = (typeof TAG_APPEARANCES)[number];
export type TagColor = (typeof TAG_COLORS)[number];

export type TagProps = BaseComponentProps<
  HTMLSpanElement,
  {
    /**
     * Innholdet til `<Tag>.`
     */
    children?: string;
    /**
     * Det visuelle uttrykket til komponenten.
     * @default "outline"
     */
    appearance?: TagAppearance;
    /**
     * Størrelsen på `<Tag>`.
     * @default "medium"
     */
    size?: TagSize;
  } & (
    | {
        /**
         * Formål med status eller kategorisering. Påvirker styling. Hvis denne propen er satt kan ikke `color` prop settes.
         * @default "neutral"
         */
        purpose?: TagPurpose;
        /**
         * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="neutral"` har aldri ikon.
         * @default false
         */
        withIcon?: boolean;
        /**
         * Farge fra data-utvalget.
         * Hvis denne brukes bestemmer konsumenten selv formål eller kategorisering den brukes til.
         * Hvis denne propen er satt kan ikke `purpose` prop settes.
         */
        color?: never;
      }
    | {
        /**
         * Formål med status eller kategorisering. Påvirker styling. Hvis denne propen er satt kan ikke `color` prop settes.
         * @default "neutral"
         */
        purpose?: never;
        /**
         * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="neutral"` har aldri ikon.
         * @default false
         */
        withIcon?: never;
        /**
         * Farge fra data-utvalget.
         * Hvis denne brukes bestemmer konsumenten selv formål eller kategorisering den brukes til.
         * Hvis denne propen er satt kan ikke `purpose` prop settes.
         */
        color: TagColor;
      }
  )
>;

export const Tag = ({
  purpose,
  appearance = 'outline',
  id,
  className,
  style,
  children,
  htmlProps,
  withIcon,
  size = 'medium',
  color,
  ...rest
}: TagProps) => {
  const hasColor = color !== undefined;
  const resolvedPurpose = !hasColor ? (purpose ?? 'neutral') : undefined;
  const hasResolvedPurpose = resolvedPurpose !== undefined;
  const isDefaultPurpose = resolvedPurpose === 'neutral';
  const icon = hasResolvedPurpose ? icons[resolvedPurpose] : undefined;

  const purposeStyleVariables = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-background-default' as any]: `var(--dds-color-surface-${purpose}-default)`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-background-strong' as any]: `var(--dds-color-surface-${purpose}-strong)`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-border-outline' as any]: `var(--dds-color-border-${purpose})`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-text' as any]: 'var(--dds-color-text-on-status-default)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-icon' as any]: `var(--dds-color-icon-on-${purpose}-default)`,
  } satisfies Properties;

  const defaultPurposeStyleVariables = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-background-default' as any]:
      'var(--dds-color-surface-subtle)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-background-strong' as any]:
      'var(--dds-color-surface-inverse-default)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-border-outline' as any]: 'var(--dds-color-border-subtle)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-text' as any]: 'var(--dds-color-text-on-inverse)',
  } satisfies Properties;

  const colorStyleVariables = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-background-default' as any]: `var(--dds-color-data-${color}-100)`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-background-strong' as any]: `var(--dds-color-data-${color}-300)`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-border-outline' as any]: `var(--dds-color-data-${color}-300)`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-color-tag-text' as any]: `var(--dds-color-text-on-status-default)`,
  } satisfies Properties;

  let styleVariables: Properties = {};

  if (isDefaultPurpose) {
    styleVariables = defaultPurposeStyleVariables;
  } else if (hasResolvedPurpose) {
    styleVariables = purposeStyleVariables;
  } else if (hasColor) {
    styleVariables = colorStyleVariables;
  }

  return (
    <TextOverflowEllipsisWrapper
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          typographyStyles[`body-short-${size}`],
          styles.container,
          inputStyles[`compact--${size}`],
          withIcon && inputStyles[`compact-with-icon--${size}`],
          styles[`container--${appearance}`],
          styles[`container--${size}`],
        ),
        { ...style, ...styleVariables },
        htmlProps,
        rest,
      )}
    >
      {withIcon && icon && <Icon icon={icon} iconSize="component" />}
      <TextOverflowEllipsisInner>{children}</TextOverflowEllipsisInner>
    </TextOverflowEllipsisWrapper>
  );
};

Tag.displayName = 'Tag';
