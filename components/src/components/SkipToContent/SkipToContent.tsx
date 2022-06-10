import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { skipToContentTokens as tokens } from './SkipToContent.tokens';
import { Property } from 'csstype';
import { focusVisibleTransitionValue } from '../../helpers/styling';

type WrapperProps = {
  top: Property.Top<string | number>;
};

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  position: absolute;
  top: ${({ top }) => top};
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  white-space: nowrap;
  ${tokens.wrapper.base}

  &:focus-within {
    clip: auto;
    height: auto;
    overflow: auto;
    width: 100%;
    z-index: 200;
    opacity: 1;
  }
`;

const Link = styled.a`
  ${tokens.link.base}
  &:focus {
    ${tokens.link.focus.base}
    transition: ${focusVisibleTransitionValue};
  }
  &:hover {
    ${tokens.link.hover.base}
  }
`;

export type SkipToContentProps = {
  /** Teksten som vises i lenka. */
  text?: string;
  /**Spesifiserer hvor det skal hoppes til via `id`-attributtet til innholdet. */
  href: string;
  /**Avstand fra top i nærmeste posisjonert container. */
  top?: Property.Top<string | number>;
} & HTMLAttributes<HTMLAnchorElement>;

export const SkipToContent = forwardRef<HTMLAnchorElement, SkipToContentProps>(
  ({ text = 'Til hovedinnhold', top = 0, style, className, ...rest }, ref) => {
    const wrapperProps = {
      top,
      className,
      style
    };

    return (
      <Wrapper {...wrapperProps}>
        <Link ref={ref} {...rest}>
          {text}
        </Link>
      </Wrapper>
    );
  }
);
