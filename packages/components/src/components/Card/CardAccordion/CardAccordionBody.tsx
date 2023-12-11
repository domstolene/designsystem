import { Property } from 'csstype';
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import {
  useIsMounted,
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
  Nullable,
} from '@norges-domstoler/dds-core';
import { getFontStyling } from '@norges-domstoler/dds-typography';

import {
  cardAccordionTokens as tokens,
  typographyTypes,
} from './CardAccordion.tokens';
import { useElementHeight } from './useElementHeight';
import { useCardAccordionContext } from './CardAccordionContext';

const expandingAnimation = css`
  @media (prefers-reduced-motion: no-preference) {
    transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

function getPadding(props: BodyContainerProps): string {
  const { padding } = props;

  return padding ?? tokens.body.padding;
}

interface BodyProps {
  isExpanded?: boolean;
  animate: boolean;
  height: number;
}

const Body = styled.div.withConfig({
  shouldForwardProp: prop => {
    return prop !== 'animate' && prop !== 'height' && prop !== 'isExpanded';
  },
})<BodyProps>`
  @media (prefers-reduced-motion: no-preference) {
    ${({ animate }) => animate && expandingAnimation}
  }
  ${getFontStyling(typographyTypes.body)}
  height: ${({ height, isExpanded }) => (isExpanded ? height : 0)}px;
  overflow: hidden;
`;

interface BodyContainerProps {
  isExpanded?: boolean;
  maxHeight?: number;
  animate: boolean;
  paddingTop?: Property.PaddingTop<string>;
  padding?: Property.Padding<string>;
}

const BodyContainer = styled.div.withConfig({
  shouldForwardProp: prop => {
    const styleOnlyProps: (keyof BodyContainerProps)[] = [
      'isExpanded',
      'maxHeight',
      'animate',
      'paddingTop',
      'padding',
    ];

    return !styleOnlyProps.some(styleProp => styleProp === prop);
  },
})<BodyContainerProps>`
  padding: ${getPadding};

  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `}
`;

export type CardAccordionBodyProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Overskriver default padding på toppen. Brukes når barn har spacing på toppen, f.eks. en overskrift. */
      paddingTop?: Property.PaddingTop<string>;
      /**Overskriver default padding. */
      padding?: Property.Padding<string>;
    }
  >,
  'id'
>;

export const CardAccordionBody = forwardRef<
  HTMLDivElement,
  CardAccordionBodyProps
>((props, ref) => {
  const { children, className, htmlProps, padding, paddingTop, ...rest } =
    props;

  const { headerId, isExpanded, bodyId: id } = useCardAccordionContext();

  const bodyRef = useRef<HTMLDivElement>(null);

  const [animate, setAnimate] = useState(false);

  const isMounted = useIsMounted();
  const height = useElementHeight(bodyRef.current);

  const [initialExpandedHeight, setIntialExpandedHeight] =
    useState<Nullable<number>>(null);

  useLayoutEffect(() => {
    // For å unngå initiell animasjon dersom Accordion er satt til å være åpen som default.
    if (bodyRef.current && isExpanded) {
      setIntialExpandedHeight(bodyRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isMounted()) {
      setAnimate(true);
    }
  }, [isMounted]);

  return (
    <Body
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ref={ref}
      isExpanded={isExpanded}
      role="region"
      height={height ?? initialExpandedHeight ?? 0}
      animate={animate}
      aria-labelledby={headerId}
      aria-hidden={!isExpanded}
    >
      <BodyContainer
        ref={bodyRef}
        isExpanded={isExpanded}
        padding={padding}
        paddingTop={paddingTop}
        animate={animate}
      >
        {children}
      </BodyContainer>
    </Body>
  );
});

CardAccordionBody.displayName = 'CardAccordionBody';
