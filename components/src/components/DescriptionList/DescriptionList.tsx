import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { selection } from '../../helpers/styling';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { descriptionListTokens as tokens } from './DescriptionList.tokens';

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
        ${term.appearance[appearance].font}
        color: ${term.appearance[appearance].color};
        line-height: ${term.appearance[appearance].lineHeight};
        font-size: ${term.appearance[appearance].fontSize};
        letter-spacing: ${term.appearance[appearance].letterSpacing};
        font-family: ${term.appearance[appearance].fontFamily};
        font-weight: ${term.appearance[appearance].fontWeight};
        font-style: ${term.appearance[appearance].fontStyle};
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
