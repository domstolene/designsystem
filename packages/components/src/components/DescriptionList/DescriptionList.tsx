import { forwardRef } from 'react';

import styles from './DescriptionList.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';

export type DescriptionListAppearance = 'small' | 'bold';

export type DescriptionListProps = BaseComponentPropsWithChildren<
  HTMLDListElement,
  {
    /**Påvirker tekst styling. */
    appearance?: DescriptionListAppearance;
    /**Setter flex-direction. NB! Fungerer kun ved bruk av `DescriptionListGroup` som barn av `DescriptionList`.
     *  @default "column"
     */
    direction?: 'row' | 'column';
  }
>;

export const DescriptionList = forwardRef<
  HTMLDListElement,
  DescriptionListProps
>((props, ref) => {
  const {
    appearance = 'bold',
    direction = 'column',
    children,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  return (
    <dl
      ref={ref}
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.list,
          styles[`list--${appearance}`],
          styles[`list--${direction}`],
        ),
        htmlProps,
        rest,
      )}
    >
      {children}
    </dl>
  );
});

DescriptionList.displayName = 'DescriptionList';
