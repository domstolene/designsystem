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

export const BADGE_SIZES = createSizes('xsmall', 'small', 'medium');

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
     * @default 99
     */
    max?: number;
  }
>;

export const Badge = ({
  id,
  className,
  style,
  htmlProps,
  purpose = 'notification',
  size = 'medium',
  children,
  max = 99,
  ...rest
}: BadgeProps) => {
  const hasChildren = children !== undefined && children !== null;
  const heightVariant = hasChildren ? 'withChildren' : 'noChildren';

  const height: Record<typeof heightVariant, Record<BadgeSize, string>> = {
    withChildren: {
      xsmall: '18px',
      small: '21px',
      medium: '24px',
    },
    noChildren: {
      xsmall: 'x0.25',
      small: 'x0.5',
      medium: 'x0.75',
    },
  };

  const color: Record<BadgePurpose, TextColor> = {
    notification: 'text-on-notification',
    action: 'text-on-action',
    neutral: 'text-on-inverse',
    subtle: 'text-default',
  };

  const displayValue = children && max && children > max ? `${max}+` : children;

  return (
    <Box
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
