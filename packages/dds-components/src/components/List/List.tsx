import { type ElementType } from 'react';

import styles from './List.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { type TypographyBodyType, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type ListType = 'ordered' | 'unordered';
export type ListTypographyType = TypographyBodyType | 'inherit';

export type ListProps = BaseComponentPropsWithChildren<
  HTMLUListElement | HTMLOListElement,
  {
    /**Spesifiserer om komponenten skal returnere `<ul />` (punktliste) eller `<ol />` (nummerert liste).
     * @default "unordered"
     */
    listType?: ListType;
    /**Spesifiserer typografi for listen. Komponenten arver i utgangspunktet fra forelder, men hvis forelder stiller ikke med relevant styling  må det velges `TypographyBodyType` som brukes i `<body>` ellers på siden.
     *  @default "inherit"
     */
    typographyType?: ListTypographyType;
  }
>;

export const List = ({
  listType = 'unordered',
  typographyType = 'inherit',
  children,
  id,
  className,
  htmlProps,
  ...rest
}: ListProps) => {
  const List: ElementType = listType === 'ordered' ? 'ol' : 'ul';

  return (
    <List
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      className={cn(
        styles.list,
        styles[`list--${listType}`],
        typographyType === 'inherit'
          ? styles['list--inherit']
          : typographyStyles[getTypographyCn(typographyType)],
      )}
    >
      {children}
    </List>
  );
};

List.displayName = 'List';
