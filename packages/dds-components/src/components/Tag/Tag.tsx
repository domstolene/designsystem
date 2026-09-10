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
  default: undefined,
};

export const TAG_PURPOSES = createPurposes(
  'success',
  'info',
  'danger',
  'warning',
  'default',
);

export const TAG_SIZES = createSizes('small', 'medium');
export const TAG_COLORS = ['teal'] as const;

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

export interface TagCommonProps {
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
}

export type TagProps = BaseComponentProps<
  HTMLSpanElement,
  TagCommonProps &
    (
      | {
          /**
           * Formål med status eller kategorisering. Påvirker styling.
           * @default "default"
           */
          purpose?: TagPurpose;
          /**
           * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="default"` har aldri ikon.
           * @default false
           */
          withIcon?: boolean;
          color?: never;
        }
      | {
          /**
           * Formål med status eller kategorisering. Påvirker styling.
           * @default "default"
           */
          purpose?: never;
          /**
           * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="default"` har aldri ikon.
           * @default false
           */
          withIcon?: never;
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
  const resolvedPurpose = !hasColor ? (purpose ?? 'default') : undefined;
  const icon = resolvedPurpose ? icons[resolvedPurpose] : undefined;

  const purposeVariables = {
    success: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-default' as any]:
        'var(--dds-color-surface-success-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-strong' as any]:
        'var(--dds-color-surface-success-strong)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-border-outline' as any]:
        'var(--dds-color-border-success)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-text' as any]:
        'var(--dds-color-text-on-status-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-icon' as any]:
        'var(--dds-color-icon-on-success-default)',
    },
    danger: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-default' as any]:
        'var(--dds-color-surface-danger-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-strong' as any]:
        'var(--dds-color-surface-danger-strong)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-border-outline' as any]:
        'var(--dds-color-border-danger)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-text' as any]:
        'var(--dds-color-text-on-status-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-icon' as any]:
        'var(--dds-color-icon-on-danger-default)',
    },
    warning: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-default' as any]:
        'var(--dds-color-surface-warning-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-strong' as any]:
        'var(--dds-color-surface-warning-strong)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-border-outline' as any]:
        'var(--dds-color-border-warning)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-text' as any]:
        'var(--dds-color-text-on-status-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-icon' as any]:
        'var(--dds-color-icon-on-warning-default)',
    },
    default: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-default' as any]:
        'var(--dds-color-surface-subtle)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-strong' as any]:
        'var(--dds-color-surface-inverse-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-border-outline' as any]:
        'var(--dds-color-border-subtle)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-text' as any]: 'var(--dds-color-text-on-inverse)',
    },
    info: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-default' as any]:
        'var(--dds-color-surface-info-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-strong' as any]:
        'var(--dds-color-surface-info-strong)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-border-outline' as any]: 'var(--dds-color-border-info)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-text' as any]:
        'var(--dds-color-text-on-status-default)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-icon' as any]: 'var(--dds-color-icon-on-info-default)',
    },
  } satisfies Record<TagPurpose, Properties>;

  const colorVariables = {
    teal: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-default' as any]:
        'var(--dds-color-data-teal-100)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-background-strong' as any]:
        'var(--dds-color-data-teal-400)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-border-outline' as any]:
        'var(--dds-color-data-teal-400)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-color-tag-text' as any]:
        'var(--dds-color-text-on-status-default)',
    },
  } satisfies Record<TagColor, Properties>;

  const styleVariables = resolvedPurpose
    ? purposeVariables[resolvedPurpose]
    : color
      ? colorVariables[color]
      : {};
  console.log('resolvedPurpose', resolvedPurpose);
  console.log('styleVariables', styleVariables);
  return (
    <TextOverflowEllipsisWrapper
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          typographyStyles[`body-short-${size}`],
          styles.container,
          inputStyles[`compact--${size}`],
          withIcon && icon && styles[`container--${size}-with-icon`],
          styles[`container--${appearance}`],
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
