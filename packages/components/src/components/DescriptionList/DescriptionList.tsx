import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  selection,
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { descriptionListTokens as tokens } from './DescriptionList.tokens';

const { term, desc, list } = tokens;

type DListProps = Pick<DescriptionListProps, 'appearance' | 'direction'>;

const DList = styled.dl.withConfig({
  shouldForwardProp: prop => prop !== 'appearance' && prop !== 'direction',
})<DListProps>`
  margin: 0;
  *::selection {
    ${selection}
  }
  ${({ appearance }) =>
    appearance &&
    css`
      dt {
        color: ${term.appearance[appearance].color};
        ${appearance === 'bold' &&
        css`
          font-weight: 600;
        `}
      }
    `}
  display: flex;
  flex-direction: column;
  &:not(:has(> dt):has(> dd)) {
    flex-direction: ${({ direction = 'column' }) => direction};
  }
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

  const dListProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    appearance,
    direction,
    ref,
  };

  return <DList {...dListProps}>{children}</DList>;
});

DescriptionList.displayName = 'DescriptionList';
