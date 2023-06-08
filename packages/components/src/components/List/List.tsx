import { ElementType, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import bulletLvl1 from '../../assets/svg/bullets/jordskifterett_bullet1.svg';
import bulletLvl2 from '../../assets/svg/bullets/lagmannsrett_bullet2.svg';
import bulletLvl3 from '../../assets/svg/bullets/tingrett_bullet3.svg';
import { TypographyBodyType } from '../Typography';
import { listTokens as tokens } from './List.tokens';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { selection } from '../../helpers/styling';
import { getFontStyling } from '../Typography/Typography.utils';

const { list, listItem, bullet } = tokens;

type StyledListProps = {
  listType: ListType;
  typographyType: ListTypographyType;
};

const StyledList = styled.ul<StyledListProps>`
  margin: ${list.base.margin};
  color: ${list.base.color};
  ul,
  ol {
    margin: 0;
  }
  *::selection {
    ${selection}
  }

  ${({ typographyType }) =>
    typographyType === 'inherit'
      ? css`
          font: inherit;
        `
      : css`
          ${getFontStyling(typographyType)}
        `}

  ${({ listType }) =>
    listType === 'unordered'
      ? css`
          padding-left: ${list.ul.paddingLeft};
          list-style: none;
          li {
            position: relative;
            padding-left: ${listItem.ul.paddingLeft};
            &:before {
              content: '';
              display: inline-block;
              height: 1em;
              width: 1em;
              position: absolute;
              top: ${bullet.top};
              left: 0;
              background-size: contain;
              background-repeat: no-repeat;
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${bulletLvl1}")`};
            }
            ul > li:before {
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${bulletLvl2}")`};
            }
            ul > li > ul > li:before {
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${bulletLvl3}")`};
            }
          }
        `
      : css`
          padding-left: ${list.ol.paddingLeft};
          & > li > ol {
            list-style-type: lower-alpha;
          }
          & > li > ol > li > ol {
            list-style-type: lower-roman;
          }
        `}
`;

export type ListType = 'ordered' | 'unordered';
export type ListTypographyType = TypographyBodyType | 'inherit';

export type ListProps = BaseComponentPropsWithChildren<
  HTMLUListElement | HTMLOListElement,
  {
    /**Spesifiserer om komponenten skal returnere `<ul />` (punktliste) eller `<ol />` (nummerert liste). */
    listType?: ListType;
    /**Spesifiserer typografi for listen. Komponenten arver i utgangspunktet fra forelder, men hvis forelder stiller ikke med relevant styling  må det velges `TypographyBodyType` som brukes i `<body>` ellers på siden. */
    typographyType?: ListTypographyType;
  }
>;

export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  (props, ref) => {
    const {
      listType = 'unordered',
      typographyType = 'inherit',
      children,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const as: ElementType = listType === 'ordered' ? 'ol' : 'ul';

    const listProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      listType,
      typographyType,
      as,
      ref,
    };

    return <StyledList {...listProps}>{children}</StyledList>;
  }
);

List.displayName = 'List';
