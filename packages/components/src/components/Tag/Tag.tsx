import { type ReactNode, forwardRef } from 'react';

import styles from './Tag.module.css';
import {
  type BaseComponentPropsWithChildren,
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

const purposeVariants: {
  [k in TagPurpose]: {
    icon: SvgIcon | undefined;
  };
} = {
  info: {
    icon: InfoIcon,
  },
  danger: {
    icon: ErrorIcon,
  },
  warning: {
    icon: WarningIcon,
  },
  success: {
    icon: CheckCircledIcon,
  },
  default: {
    icon: undefined,
  },
};

export type TagPurpose = 'success' | 'info' | 'danger' | 'warning' | 'default';

export type TagProps = BaseComponentPropsWithChildren<
  HTMLSpanElement,
  {
    /**
     * Innholdet til `<Tag>.` Kan brukes istedenfor `text`.
     */
    children?: ReactNode;
    /**
     * Samme oppførsel som `children`. Er `children` brukt vil denne ignoreres. Tekst som vises i `<Tag>`.
     */
    text?: string;
    /**
     * Formål med status eller kategorisering. Påvirker styling.
     * */
    purpose?: TagPurpose;
    /**
     * Variant med sterkere visuelt uttrykk. Hver `purpose` har en sterk variant.
     */
    strong?: boolean;
    /**
     * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="default"` har aldri ikon.
     * @default false
     */
    withIcon?: boolean;
  }
>;

export const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    text,
    purpose = 'default',
    strong,
    id,
    className,
    children,
    htmlProps,
    withIcon,
    ...rest
  } = props;

  const icon = purposeVariants[purpose].icon;

  return (
    <TextOverflowEllipsisWrapper
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          typographyStyles['body-sans-01'],
          styles.container,
          withIcon && icon && styles['container--with-icon'],
          styles[`container--${purpose}--${strong ? 'strong' : 'subtle'}`],
        ),
        htmlProps,
        rest,
      )}
      ref={ref}
    >
      {withIcon && icon && <Icon icon={icon} iconSize="small" />}
      <TextOverflowEllipsisInner>{children ?? text}</TextOverflowEllipsisInner>
    </TextOverflowEllipsisWrapper>
  );
});

Tag.displayName = 'Tag';
