import styles from './DescriptionList.module.css';
import {
  type BaseComponentPropsWithChildren,
  type Direction,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { VStack } from '../layout';

export type DescriptionListAppearance = 'default' | 'subtle';

export type DescriptionListProps = BaseComponentPropsWithChildren<
  HTMLDListElement,
  {
    /**Påvirker tekst styling. */
    appearance?: DescriptionListAppearance;
    /**Setter flex-direction. NB! Fungerer kun ved bruk av `DescriptionListGroup` som barn av `DescriptionList`.
     *  @default "column"
     */
    direction?: Direction;
  }
>;

export const DescriptionList = ({
  appearance = 'default',
  direction = 'column',
  children,
  id,
  className,
  style,
  htmlProps,
  ...rest
}: DescriptionListProps) => (
  <VStack
    as="dl"
    margin="x0"
    flexWrap="wrap"
    rowGap="x0"
    columnGap="x2"
    {...getBaseHTMLProps(
      id,
      cn(
        className,
        styles.list,
        styles[`list--${appearance}`],
        styles[`list--${direction}`],
      ),
      style,
      htmlProps,
      rest,
    )}
  >
    {children}
  </VStack>
);

DescriptionList.displayName = 'DescriptionList';
