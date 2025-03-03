import styles from './DetailList.module.css';
import {
  type BaseComponentPropsWithChildren,
  type Size,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';

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
  }
>;

export const DetailList = ({
  id,
  className,
  htmlProps,
  withDividers = true,
  striped = true,
  size = 'medium',
  ...rest
}: DetailListProps) => (
  <dl
    {...getBaseHTMLProps(
      id,
      cn(
        className,
        styles.list,
        styles[`list--${size}`],
        withDividers && styles['list--with-dividers'],
        striped && styles['list--striped'],
      ),
      htmlProps,
      rest,
    )}
  />
);

DetailList.displayName = 'DetailList';
