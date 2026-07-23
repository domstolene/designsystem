import { DetailListContext } from './DetailList.context';
import styles from './DetailList.module.css';
import {
  type BaseComponentPropsWithChildren,
  createSizes,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { type Breakpoint } from '../layout';
import tableStyles from '../Table/normal/Table.module.css';
import tgStyles from '../Typography/typographyStyles.module.css';

export const DETAIL_LIST_SIZES = createSizes('small', 'medium', 'large');

export type DetailListSize = (typeof DETAIL_LIST_SIZES)[number];

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
    /**Brekkpunkt for små skjermer; den gjør om rader til kolonner. */
    smallScreenBreakpoint?: Breakpoint;
  }
>;

export const DetailList = ({
  id,
  className,
  style,
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
          tableStyles.table,
          styles.list,
          styles[`list--${size}`],
          withDividers && tableStyles['table--with-dividers'],
          striped && !smallScreenBreakpoint && tableStyles['table--striped'],
          striped && smallScreenBreakpoint && styles['list--striped-with-bp'],
        ),
        style,
        htmlProps,
        rest,
      )}
    />
  </DetailListContext>
);

DetailList.displayName = 'DetailList';
