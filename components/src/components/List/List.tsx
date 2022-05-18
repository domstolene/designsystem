import { ElementType, forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import bullet from '../../assets/svg/bullets/jordskifterett_bullet1.svg';
import bulletLvl2 from '../../assets/svg/bullets/lagmannsrett_bullet2.svg';
import bulletLvl3 from '../../assets/svg/bullets/tingrett_bullet3.svg';
import { TypographyBodyType } from '../Typography';
import { typographyTokens } from '../Typography/Typography.tokens';
import { listItemTokens } from './ListItem.tokens';
import { listTokens as tokens } from './List.tokens';

const liTextPadding = `1em + ${listItemTokens.bulletSpacing}`;
const ulPaddingLeft = `${tokens.spaceLeft} - (${liTextPadding})`;

type StyledListProps = Pick<ListProps, 'listType' | 'typographyType'>;

const StyledList = styled.ul<StyledListProps>`
  ${tokens.base}
  ul, ol {
    margin: 0;
  }
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${({ typographyType }) =>
    typographyType &&
    css`
      ${tokens.sizes[typographyType]}
      ul,
      ol {
        ${tokens.sizes[typographyType]}
      }
    `}
  ${({ listType }) =>
    listType === 'unordered'
      ? css`
          padding-left: ${`calc(${ulPaddingLeft})`};
          list-style: none;
          li {
            position: relative;
            padding-left: ${`calc(${liTextPadding})`};
            &:before {
              content: '';
              display: inline-block;
              height: 1em;
              width: 1em;
              position: absolute;
              top: ${`calc((${listItemTokens.base.lineHeight} / 2) - 0.5em )`};
              left: 0;
              background-size: contain;
              background-repeat: no-repeat;
              // disable eslint to ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              // eslint-disable-next-line
              // prettier-ignore
              background-image: url("${bullet}");
            }
            ul > li:before {
              // disable eslint to ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              // eslint-disable-next-line
              // prettier-ignore
              background-image: url("${bulletLvl2}");
            }
            ul > li > ul > li:before {
              // disable eslint to ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              // eslint-disable-next-line
              // prettier-ignore
              background-image: url("${bulletLvl3}");
            }
          }
        `
      : css`
          padding-left: ${tokens.spaceLeft};
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

export type ListProps = {
  /**Spesifiserer om komponenten skal returnere `<ul />` (punktliste) eller `<ol />` (nummerert liste). */
  listType?: ListType;
  /**Spesifiserer typografi for listen. Komponenten arver i utgangspunktet fra forelder, men hvis forelder stiller ikke med relevant styling  må det velges `TypographyBodyType` som brukes i `<body>` ellers på siden. */
  typographyType?: ListTypographyType;
} & HTMLAttributes<HTMLUListElement | HTMLOListElement>;

export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  (
    { listType = 'unordered', typographyType = 'inherit', children, ...rest },
    ref
  ) => {
    const as: ElementType = listType === 'ordered' ? 'ol' : 'ul';

    const listProps = {
      listType,
      typographyType,
      as,
      ref,
      ...rest
    };

    return <StyledList {...listProps}>{children}</StyledList>;
  }
);
