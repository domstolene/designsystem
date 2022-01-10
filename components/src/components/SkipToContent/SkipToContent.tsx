import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { skipToContentTokens as tokens } from './SkipToContent.tokens';
import * as CSS from 'csstype';

type WrapperProps = {
  top: CSS.TopProperty<string | number>;
};

const Wrapper = styled.div<WrapperProps>`
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
    outline: ${tokens.link.focusOutline.width} solid
      ${tokens.link.focusOutline.color};
  }
`;

export type SkipToContentProps = {
  text?: string;
  href: string;
  top?: CSS.TopProperty<string | number>;
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
