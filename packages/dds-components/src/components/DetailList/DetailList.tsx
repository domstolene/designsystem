import { forwardRef } from 'react';

import styles from './DetailList.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { type Density, getDensityCn } from '../../types/Density';
import { cn } from '../../utils';

export type DetailListProps = BaseComponentPropsWithChildren<
  HTMLDListElement,
  {
    /**
     * Spesifiserer hvor romslige celler skal være.
     * @default "normal"
     */
    density?: Density;
    /**
     * Om rader skal ha skillelinje.
     * @default true
     */
    withDividers?: boolean;
    /**
     * Om rader skal ha sebrastriper.
     * @default true
     */
    striped?: boolean;
  }
>;

export const DetailList = forwardRef<HTMLDListElement, DetailListProps>(
  (props, ref) => {
    const {
      id,
      className,
      htmlProps,
      withDividers = true,
      striped = true,
      density = 'normal',
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
            styles[`list--${getDensityCn(density)}`],
            withDividers && styles['list--with-dividers'],
            striped && styles['list--striped'],
          ),
          htmlProps,
          rest,
        )}
      />
    );
  },
);

DetailList.displayName = 'DetailList';
