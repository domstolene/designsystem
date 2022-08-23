import { forwardRef } from 'react';
import styled from 'styled-components';
import { skipToContentTokens as tokens } from './SkipToContent.tokens';
import { Property } from 'csstype';
import { focusVisibleTransitionValue } from '../../helpers/styling';
import {
  BaseComponentProps,
  getBaseHTMLProps,
  joinClassNames,
} from '../../types';

type WrapperProps = {
  top: Property.Top<string | number>;
};

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  position: absolute;
  top: ${({ top }) => top};
  text-align: center;
  opacity: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s;
  }
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
    @media (prefers-reduced-motion: no-preference) {
      transition: ${focusVisibleTransitionValue};
    }
  }
  &:hover {
    ${tokens.link.hover.base}
  }
`;

export type SkipToContentProps = BaseComponentProps<
  HTMLAnchorElement,
  {
    /** Teksten som vises i lenka. */
    text?: string;
    /**Spesifiserer hvor det skal hoppes til via `id`-attributtet til innholdet. */
    href: string;
    /**Avstand fra top i nærmeste posisjonert container. */
    top?: Property.Top<string | number>;
  }
>;

export const SkipToContent = forwardRef<HTMLAnchorElement, SkipToContentProps>(
  (props, ref) => {
    const {
      text = 'Til hovedinnhold',
      top = 0,
      id,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const {
      className: htmlPropsClassName,
      style,
      ...restHtmlProps
    } = htmlProps;

    const wrapperProps = {
      top,
      className: joinClassNames(className, htmlPropsClassName),
      style,
    };

    return (
      <Wrapper {...wrapperProps}>
        <Link {...getBaseHTMLProps(id, restHtmlProps, rest)} ref={ref}>
          {text}
        </Link>
      </Wrapper>
    );
  }
);
