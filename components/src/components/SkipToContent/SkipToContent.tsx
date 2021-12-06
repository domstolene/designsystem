import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { skipToContentTokens as tokens } from './SkipToContent.tokens';

const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  white-space: nowrap;
  ${tokens.wrapper.base}
  /* transform: translateY(-100%); */
  &:focus-within {
    /* transform: translateY(0); */
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
  href?: string;
} & HTMLAttributes<HTMLAnchorElement>;

export const SkipToContent = forwardRef<HTMLAnchorElement, SkipToContentProps>(
  ({ text = 'Til hovedinnhold', ...rest }, ref) => {
    return (
      <Wrapper>
        <Link ref={ref} {...rest}>
          {text}
        </Link>
      </Wrapper>
    );
  }
);
