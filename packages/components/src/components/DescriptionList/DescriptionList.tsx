import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { selection } from '../../helpers/styling';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { getFontStyling } from '../Typography/Typography.utils';
import {
  descriptionListTokens as tokens,
  termTypographyTypes,
} from './DescriptionList.tokens';

const { term, desc, list } = tokens;

type DListProps = Pick<DescriptionListProps, 'appearance' | 'direction'>;

const DList = styled.dl<DListProps>`
  margin: 0;
  *::selection {
    ${selection}
  }
  ${({ appearance }) =>
    appearance &&
    css`
      dt {
        color: ${term.appearance[appearance].color};
        ${getFontStyling(termTypographyTypes[appearance])}
        ${appearance === 'bold' &&
        css`
          font-weight: 600;
        `}
      }
    `}
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  flex-wrap: wrap;
  column-gap: ${list.rowDirection.columnGap};
  row-gap: 0;
  & > dt:first-of-type {
    margin-top: ${term.firstOfType.marginTop};
  }
  & > dd:last-child {
    margin-bottom: ${desc.lastChild.marginBottom};
  }
  dd + dt {
    margin-top: ${list.beforeNextTerm.marginTop};
  }
`;

export type DescriptionListAppearance = 'small' | 'bold';

export type DescriptionListProps = BaseComponentPropsWithChildren<
  HTMLDListElement,
  {
    /**Påvirker tekst styling. */
    appearance?: DescriptionListAppearance;
    /**Setter flex-direction.
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

  const dListProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    appearance,
    direction,
    ref,
  };

  return <DList {...dListProps}>{children}</DList>;
});
