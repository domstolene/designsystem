import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
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
  & > dt:first-child, dd + dt {
    margin-top: ${descriptionListTermTokens.unwrappedTopSpace};
  }
`;

export type DescriptionListAppearance = 'small' | 'bold';

export type DescriptionListProps = {
  appearance?: DescriptionListAppearance;
} & HTMLAttributes<HTMLDListElement>;

export const DescriptionList = forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(({ appearance = 'bold', children, ...rest }, ref) => {
  const dListProps = {
    appearance,
    ref,
    ...rest
  };

  return <DList {...dListProps}>{children}</DList>;
});
