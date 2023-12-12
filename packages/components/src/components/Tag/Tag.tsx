import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { tagTokens as tokens, typographyType } from './Tag.tokens';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import {
  TextOverflowEllipsisWrapper,
  getFontStyling,
  TextOverflowEllipsisInner,
} from '../Typography';

const { wrapper } = tokens;

interface WrapperProps {
  $purpose: TagPurpose;
}

const Wrapper = styled(TextOverflowEllipsisWrapper)<WrapperProps>`
  display: inline-flex;
  align-items: center;
  border: ${wrapper.border};
  border-radius: ${wrapper.borderRadius};
  padding: ${wrapper.padding};
  ${getFontStyling(typographyType)}
  ${({ $purpose }) => css`
    background-color: ${wrapper.purpose[$purpose].backgroundColor};
    border-color: ${wrapper.purpose[$purpose].borderColor};
  `}
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
      ref={ref}
      $purpose={purpose}
    >
      <TextOverflowEllipsisInner>{text}</TextOverflowEllipsisInner>
    </Wrapper>
  );
});

Tag.displayName = 'Tag';
