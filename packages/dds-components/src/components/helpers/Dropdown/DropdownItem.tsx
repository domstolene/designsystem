import { type ComponentPropsWithRef, type MouseEventHandler } from 'react';

import styles from './DropdownItem.module.css';
import { cn } from '../../../utils';
import { type ButtonProps } from '../../Button';
import { Icon, type SvgIcon } from '../../Icon';
import { Box } from '../../layout';
import { Spinner } from '../../Spinner';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import {
  type StylelessButton,
  type StylelessButtonProps,
} from '../StylelessButton';
import focusStyles from '../styling/focus.module.css';
import utilStyles from '../styling/utilStyles.module.css';

type DropdownItemT = 'span' | 'a' | typeof StylelessButton;

export type DropdownItemButtonProps = {
  /**Asynkron `onClick` event; håndterer loading status, slik at menyen ikke lukker seg under loading. */
  onClickAsync?: MouseEventHandler<HTMLButtonElement>;
} & Pick<ButtonProps, 'loading' | 'loadingTooltip'>;

export type DropdownItemProps<T extends DropdownItemT = 'span'> = {
  as?: T;
  /**Ikon som vises ved teksten. **OBS!** Settes i tillegg til `children` for riktig layout. */
  icon?: SvgIcon;
  /**Bestemmer farger basert på formål.
   * @default "default"
   */
  purpose?: 'default' | 'danger';
} & DropdownItemButtonProps &
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
  'aria-disabled': ariaDisabled,
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

  const cns = rest.as === 'span' ? itemCns : interactiveItemCns;
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="x0.75"
      gap="x0.25"
      className={cn(className, ...cns, loading && styles['item--loading'])}
      aria-disabled={loading ? true : ariaDisabled ? ariaDisabled : undefined}
      {...rest}
    >
      {loading && (
        <span className={cn(utilStyles['center-absolute'])}>
          <Spinner
            size="var(--dds-size-icon-medium)"
            tooltip={loadingTooltip}
          />
        </span>
      )}
      {icon && (
        <Icon
          iconSize="inherit"
          icon={icon}
          className={cn(loading && utilStyles.invisible)}
        />
      )}
      {children}
    </Box>
  );
};
