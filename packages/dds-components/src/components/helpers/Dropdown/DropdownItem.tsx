import { type ComponentPropsWithRef, type MouseEventHandler } from 'react';

import { cn } from '../../../utils';
import { Badge, type BadgeInComponentProps } from '../../Badge';
import { type ButtonProps } from '../../Button';
import { Icon, type SvgIcon } from '../../Icon';
import { Grid, GridChild } from '../../layout';
import { type ResponsiveGridProps } from '../../layout/common/Responsive.types';
import { Spinner } from '../../Spinner';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import {
  type StylelessButton,
  type StylelessButtonProps,
} from '../StylelessButton';
import focusStyles from '../styling/focus.module.css';
import utilStyles from '../styling/utilStyles.module.css';
import styles from './DropdownItem.module.css';

type DropdownItemT = 'span' | 'a' | typeof StylelessButton | 'div';

export type DropdownItemButtonProps = {
  /**Asynkron `onClick` event; håndterer loading status, slik at menyen ikke lukker seg under loading. */
  onClickAsync?: MouseEventHandler<HTMLButtonElement>;
  /**Egen styring av når menyen skal lukkes ved klikk på knapp i menyen. Bruker intern logikk som default. Støtter i tillegg egen funksjon og ingen lukking (`false`).
   * @default true
   */
  closeMenuOnClickAsync?: boolean | ((close: () => void) => void);
} & Pick<ButtonProps, 'loading' | 'loadingTooltip'>;

export interface DropdownItemCustomProps<T extends DropdownItemT = 'span'> {
  as?: T;
  /**Ikon som vises ved teksten. **OBS!** Settes i tillegg til `children` for riktig layout. */
  icon?: SvgIcon;
  /**Bestemmer farger basert på formål.
   * @default "default"
   */
  purpose?: 'default' | 'danger';
  /**
   * Props for `<Badge>` komponenten som vises ved menyelementet.
   */
  badgeProps?: BadgeInComponentProps;
  /**
   * Tekst som vises under hovedteksten.
   */
  subtitle?: string;
}

export type DropdownItemProps<T extends DropdownItemT = 'span'> =
  DropdownItemCustomProps<T> &
    DropdownItemButtonProps &
    (T extends typeof StylelessButton
      ? StylelessButtonProps
      : ComponentPropsWithRef<T>);

export const DropdownItem = <T extends DropdownItemT = 'span'>({
  icon,
  className,
  children: propChildren,
  purpose = 'default',
  loading,
  loadingTooltip,
  badgeProps,
  subtitle,
  ...rest
}: DropdownItemProps<T>) => {
  const itemCns = [
    styles.item,
    styles[purpose],
    typographyStyles['body-short-medium'],
  ];

  const interactiveItemCns = [
    ...itemCns,
    focusStyles['focusable--inset'],
    styles['item--interactive'],
  ];

  const children = loading ? (
    <span className={cn(loading && utilStyles.invisible)}>{propChildren}</span>
  ) : (
    propChildren
  );
  const layoutKey = `${icon ? 'icon-' : ''}text${subtitle ? '-sub' : ''}${badgeProps ? '-badge' : ''}`;
  const layout: Record<string, Partial<ResponsiveGridProps>> = {
    text: {
      gridTemplateAreas: `"text"`,
      gridTemplateColumns: '1fr',
    },
    'icon-text': {
      gridTemplateAreas: `"icon text"`,
      gridTemplateColumns: 'min-content 1fr',
    },
    'icon-text-sub': {
      gridTemplateAreas: `"icon text" "sub sub"`,
      gridTemplateColumns: 'min-content 1fr',
    },
    'text-sub': {
      gridTemplateAreas: `"text" "sub"`,
      gridTemplateColumns: '1fr',
    },
  };
  layout['icon-text-sub-badge'] = {
    gridTemplateAreas: `"icon text badge" "sub sub sub"`,
    gridTemplateColumns: 'min-content 1fr min-content',
  };
  layout['text-sub-badge'] = {
    gridTemplateAreas: `"text badge" "sub sub"`,
    gridTemplateColumns: '1fr min-content',
  };
  layout['icon-text-badge'] = {
    gridTemplateAreas: `"icon text badge" `,
    gridTemplateColumns: 'min-content 1fr min-content',
  };
  layout['text-badge'] = {
    gridTemplateAreas: `"text badge" `,
    gridTemplateColumns: '1fr min-content',
  };

  const cns = rest.as === 'span' ? itemCns : interactiveItemCns;
  return (
    <Grid
      padding="x0.75"
      gap="x0.25"
      width="100%"
      defaultPageLayout={false}
      {...layout[layoutKey]}
      className={cn(className, ...cns, loading && styles['item--loading'])}
      aria-disabled={loading ? true : undefined}
      {...rest}
    >
      {loading && (
        <span className={cn(utilStyles['center-absolute'])}>
          <Spinner
            size="var(--dds-size-icon-component)"
            tooltip={loadingTooltip}
          />
        </span>
      )}
      {icon && (
        <GridChild
          as={Icon}
          gridArea="icon"
          iconSize="component"
          icon={icon}
          className={cn(loading && utilStyles.invisible)}
        />
      )}
      <GridChild gridArea="text">{children}</GridChild>
      {subtitle && (
        <GridChild
          gridArea="sub"
          className={cn(
            typographyStyles['body-short-small'],
            typographyStyles['text-color--subtle'],
          )}
        >
          {subtitle}
        </GridChild>
      )}
      {badgeProps && (
        <GridChild
          as={Badge}
          gridArea="badge"
          {...badgeProps}
          size="small"
          marginInline="x0.25 0"
        />
      )}
    </Grid>
  );
};
