import styles from './Badge.module.css';
import { Box, Typography } from '../..';
import {
  type BaseComponentProps,
  createSizes,
  getBaseHTMLProps,
} from '../../types';
import { type TextColor, cn } from '../../utils';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const BADGE_PURPOSES = [
  'notification',
  'action',
  'neutral',
  'subtle',
] as const;

export const BADGE_SIZES = createSizes('xsmall', 'small', 'medium', 'large');

export type BadgePurpose = (typeof BADGE_PURPOSES)[number];

export type BadgeSize = (typeof BADGE_SIZES)[number];

export type BadgeProps = BaseComponentProps<
  HTMLElement,
  {
    /**
     * Formål med komponenten. Påvirker styling.
     * @default 'notification'
     */
    purpose?: BadgePurpose;
    /**
     * Størrelse.
     * @default 'medium'
     */
    size?: BadgeSize;
    /**
     * Barn. Støtter kun tall.
     */
    children?: number;
    /**
     * Maksimalt tall som kan vises. legger på `'+'` dersom tallet overstiger maksverdien. Kan bli deaktivert.
     * @default 9
     */
    max?: number;
    /**
     * Om komponenten skal vise tallet selv om det er 0.
     * @default false
     */
    showZero?: boolean;
    /**
     * HTML `aria-label` attributt.
     */
    'aria-label'?: string;
  }
>;

export type BadgeInComponentProps = Omit<BadgeProps, 'size'>;

export const Badge = ({
  id,
  className,
  style,
  htmlProps,
  purpose = 'notification',
  size = 'medium',
  children,
  max = 9,
  showZero = false,
  ...rest
}: BadgeProps) => {
  const hasChildren = !!children || (showZero && children === 0);
  const heightVariant = hasChildren ? 'withChildren' : 'noChildren';

  const height: Record<typeof heightVariant, Record<BadgeSize, string>> = {
    withChildren: {
      xsmall: '18px',
      small: '21px',
      medium: '24px',
      large: '27px',
    },
    noChildren: {
      xsmall: 'x0.5',
      small: 'x0.75',
      medium: 'x1',
      large: 'x1.5',
    },
  };

  const color: Record<BadgePurpose, TextColor> = {
    notification: 'text-on-notification',
    action: 'text-on-action',
    neutral: 'text-on-inverse',
    subtle: 'text-default',
  };

  const displayValue =
    hasChildren && max && children > max ? `${max}+` : children;

  const showComponent = !showZero && children === 0 ? false : true;

  if (!showComponent) {
    return null;
  }

  return (
    <Box
      as="span"
      paddingInline={hasChildren ? 'x0.25' : undefined}
      minWidth={height[heightVariant][size]}
      maxWidth="fit-content"
      height={height[heightVariant][size]}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.container,
          styles[purpose],
          typographyStyles[`body-short-${size}`],
        ),
        style,
        htmlProps,
        rest,
      )}
    >
      <Typography
        as="span"
        typographyType={`body-short-${size}`}
        color={color[purpose]}
      >
        {displayValue}
      </Typography>
    </Box>
  );
};

Badge.displayName = 'Badge';
