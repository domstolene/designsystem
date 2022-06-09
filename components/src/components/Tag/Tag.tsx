import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { tagTokens as tokens } from './Tag.tokens';
import { Typography } from '../Typography';

type WrapperProps = {
  purpose: TagPurpose;
};

const Wrapper = styled(Typography)<WrapperProps>`
  ${tokens.wrapper.base}
  ${({ purpose }) => css`
    ${tokens.wrapper.type[purpose].base}
  `}
`;

const Inner = styled.span`
  ${tokens.inner.base}
`;

export type TagPurpose = 'success' | 'info' | 'danger' | 'warning' | 'default';

export type TagProps = {
  /**Tekst som vises i `<Tag />.` */
  text?: string;
  /**Formål med status eller kategorisering. Påvirker styling. */
  purpose?: TagPurpose;
} & HTMLAttributes<HTMLSpanElement>;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ text, purpose = 'default', ...rest }, ref) => {
    return (
      <Wrapper
        forwardedAs="span"
        typographyType="bodySans01"
        ref={ref}
        purpose={purpose}
        {...rest}
      >
        <Inner>{text}</Inner>
      </Wrapper>
    );
  }
);
