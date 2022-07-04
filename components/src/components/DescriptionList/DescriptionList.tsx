import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { typographyTokens } from '../Typography/Typography.tokens';
import { descriptionListTermTokens } from './DescriptionListTerm.tokens';

type DListProps = Pick<DescriptionListProps, 'appearance'>;

const DList = styled.dl<DListProps>`
  margin: 0;
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${({ appearance }) =>
    appearance &&
    css`
      dt {
        ${descriptionListTermTokens.appearance[appearance].base}
      }
    `}
  & > dt:first-of-type {
    margin-top: ${descriptionListTermTokens.unwrappedTopAndBottomSpace};
  }
  & > dd:last-child {
    margin-bottom: ${descriptionListTermTokens.unwrappedTopAndBottomSpace};
  }
  dd + dt {
    margin-top: ${descriptionListTermTokens.unwrappedBetweenSpace};
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
    ref
  };

  return <DList {...dListProps}>{children}</DList>;
});
