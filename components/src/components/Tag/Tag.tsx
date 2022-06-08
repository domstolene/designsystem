import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { tagTokens as tokens } from './Tag.tokens';
import { Typography } from '../Typography';

type WrapperProps = {
  purpose: TagPurpose;
};

const Wrapper = styled(Typography)<WrapperProps>`
  ${tokens.base}
  ${({ purpose }) => css`
    ${tokens.type[purpose].base}
  `}
`;

export type TagPurpose = 'success' | 'info' | 'danger' | 'warning' | 'default';

export type TagProps = {
  /**Tekst som vises i `<Tag />.` */
  text?: string;
  /**Formål med komponenten. Påvirker styling. */
  purpose?: TagPurpose;
} & HTMLAttributes<HTMLDivElement>;

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ text, purpose = 'default', ...rest }, ref) => {
    return (
      <Wrapper
        forwardedAs="span"
        typographyType="bodySans01"
        ref={ref}
        purpose={purpose}
        {...rest}
      >
        {text}
      </Wrapper>
    );
  }
);
