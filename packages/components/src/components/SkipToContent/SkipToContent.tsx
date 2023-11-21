import { forwardRef } from 'react';
import styled from 'styled-components';
import { Property } from 'csstype';
import {
  BaseComponentProps,
  getBaseHTMLProps,
  joinClassNames,
} from '@norges-domstoler/dds-core';
import {
  getFontStyling,
  defaultTypographyType,
} from '@norges-domstoler/dds-typography';
import {
  focusVisibleTransitionValue,
  focusVisibleOnDark,
} from '@norges-domstoler/dds-form';

import { skipToContentTokens as tokens } from './SkipToContent.tokens';

const { wrapper, link } = tokens;

const Wrapper = styled.div<{
  $top: Property.Top;
}>`
  box-sizing: border-box;
  position: absolute;
  top: ${({ $top: top }) => top};
  text-align: center;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  white-space: nowrap;
  background-color: ${wrapper.backgroundColor};
  padding: ${wrapper.padding};
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s;
  }

  &:focus-within {
    clip: auto;
    height: auto;
    overflow: auto;
    width: 100%;
    z-index: 250;
    opacity: 1;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${link.base.color};
  ${getFontStyling(defaultTypographyType)}

  @media (prefers-reduced-motion: no-preference) {
    transition: ${focusVisibleTransitionValue};
  }
  &:focus {
    ${focusVisibleOnDark}
  }
  &:hover {
    color: ${link.base.color};
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
    top?: Property.Top;
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

    return (
      <Wrapper
        $top={top}
        className={joinClassNames(className, htmlPropsClassName)}
        style={style}
      >
        <Link {...getBaseHTMLProps(id, restHtmlProps, rest)} ref={ref}>
          {text}
        </Link>
      </Wrapper>
    );
  },
);

SkipToContent.displayName = 'SkipToContent';
