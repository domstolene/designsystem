import { DetailListContext } from './DetailList.context';
import styles from './DetailList.module.css';
import {
  type BaseComponentPropsWithChildren,
  type Size,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { type Breakpoint } from '../layout';
import tgStyles from '../Typography/typographyStyles.module.css';

export type DetailListSize = Extract<Size, 'large' | 'medium' | 'small'>;

export type DetailListProps = BaseComponentPropsWithChildren<
  HTMLDListElement,
  {
    /**
     * Størrelse på tabellen. Påvirker tetthet i cellene og font.
     * @default "medium"
     */
    size?: DetailListSize;
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
    /**Brekkpunkt og nedover versjonen for små skjermer skal vises; den gjør om rader til kolonner. */
    smallScreenBreakpoint?: Breakpoint;
  }
>;

export const DetailList = ({
  id,
  className,
  htmlProps,
  withDividers = true,
  striped = true,
  size = 'medium',
  smallScreenBreakpoint,
  ...rest
}: DetailListProps) => (
  <DetailListContext value={{ smallScreenBreakpoint }}>
    <dl
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          tgStyles[`body-short-${size}`],
          styles.list,
          styles[`list--${size}`],
          withDividers && styles['list--with-dividers'],
          striped && !smallScreenBreakpoint && styles['list--striped'],
          striped && smallScreenBreakpoint && styles['list--striped-with-bp'],
        ),
        htmlProps,
        rest,
      )}
    />
  </DetailListContext>
);

DetailList.displayName = 'DetailList';
