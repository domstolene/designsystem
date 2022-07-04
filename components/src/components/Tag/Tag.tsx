import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { tagTokens as tokens } from './Tag.tokens';
import { Typography } from '../Typography';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

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

export type TagProps = BaseComponentProps<
  HTMLSpanElement,
  {
    /**Tekst som vises i `<Tag />.` */
    text?: string;
    /**Formål med status eller kategorisering. Påvirker styling. */
    purpose?: TagPurpose;
  }
>;

export const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    text,
    purpose = 'default',
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  return (
    <Wrapper
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      forwardedAs="span"
      typographyType="bodySans01"
      ref={ref}
      purpose={purpose}
    >
      <Inner>{text}</Inner>
    </Wrapper>
  );
});
