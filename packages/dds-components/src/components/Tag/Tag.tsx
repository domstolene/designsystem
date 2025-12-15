import styles from './Tag.module.css';
import {
  type BaseComponentProps,
  createPurposes,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
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

export type TagPurpose = (typeof TAG_PURPOSES)[number];
export type TagAppearance = 'default' | 'strong';

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
     * @default "default"
     */
    appearance?: TagAppearance;
    /**
     * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="default"` har aldri ikon.
     * @default false
     */
    withIcon?: boolean;
  }
>;

export const Tag = ({
  purpose = 'default',
  appearance = 'default',
  id,
  className,
  style,
  children,
  htmlProps,
  withIcon,
  ...rest
}: TagProps) => {
  const icon = icons[purpose];

  return (
    <TextOverflowEllipsisWrapper
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          typographyStyles['body-small'],
          styles.container,
          withIcon && icon && styles['container--with-icon'],
          styles[`container--${purpose}--${appearance}`],
        ),
        style,
        htmlProps,
        rest,
      )}
    >
      {withIcon && icon && <Icon icon={icon} iconSize="small" />}
      <TextOverflowEllipsisInner>{children}</TextOverflowEllipsisInner>
    </TextOverflowEllipsisWrapper>
  );
};

Tag.displayName = 'Tag';
