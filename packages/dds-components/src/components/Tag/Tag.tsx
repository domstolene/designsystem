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

export const TAG_APPEARANCES = [
  'outline',
  'strong',
  'subtle',
  'accent-left',
] as const;

export type TagPurpose = (typeof TAG_PURPOSES)[number];
export type TagSize = (typeof TAG_SIZES)[number];
export type TagAppearance = (typeof TAG_APPEARANCES)[number];

export type TagProps = BaseComponentProps<
  HTMLSpanElement,
  {
    /**
     * Innholdet til `<Tag>.`
     */
    children?: string;
    /**
     * Formål med status eller kategorisering. Påvirker styling.
     * @default "default"
     */
    purpose?: TagPurpose;
    /**
     * Det visuelle uttrykket til komponenten.
     * @default "outline"
     */
    appearance?: TagAppearance;
    /**
     * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="default"` har aldri ikon.
     * @default false
     */
    withIcon?: boolean;
    /**
     * Størrelsen på `<Tag>`.
     * @default "medium"
     */
    size?: TagSize;
  }
>;

export const Tag = ({
  purpose = 'default',
  appearance = 'outline',
  id,
  className,
  style,
  children,
  htmlProps,
  withIcon,
  size = 'medium',
  ...rest
}: TagProps) => {
  const icon = icons[purpose];

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
          styles[`container--${purpose}--${appearance}`],
        ),
        style,
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
