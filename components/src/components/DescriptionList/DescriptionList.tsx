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

type DListProps = Pick<DescriptionListProps, 'appearance'>;

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
  }
>;

export const DescriptionList = forwardRef<
  HTMLDListElement,
  DescriptionListProps
>((props, ref) => {
  const {
    appearance = 'bold',
    children,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const dListProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    appearance,
    ref,
  };

  return <DList {...dListProps}>{children}</DList>;
});
