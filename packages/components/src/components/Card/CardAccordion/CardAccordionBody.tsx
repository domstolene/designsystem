import { Property } from 'csstype';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import useIsMounted from '../../../hooks/useIsMounted';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { getFontStyling } from '../../Typography/Typography.utils';
import {
  cardAccordionTokens as tokens,
  typographyTypes,
} from './CardAccordion.tokens';
import { useElementHeight } from './useElementHeight';

const expandingAnimation = css`
  @media (prefers-reduced-motion: no-preference) {
    transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

function getPadding(props: BodyContainerProps): string {
  const { padding } = props;

  return padding || tokens.body.padding;
}

type BodyProps = {
  isExpanded?: boolean;
  animate: boolean;
  height: number;
};

const Body = styled.div<BodyProps>`
  @media (prefers-reduced-motion: no-preference) {
    ${({ animate }) => animate && expandingAnimation}
  }
  ${getFontStyling(typographyTypes.body)}
  height: ${({ height, isExpanded }) => (isExpanded ? height : 0)}px;
  overflow: hidden;
`;

type BodyContainerProps = {
  isExpanded?: boolean;
  maxHeight?: number;
  animate: boolean;
  paddingTop?: Property.PaddingTop<string>;
  padding?: Property.Padding<string>;
};

const BodyContainer = styled.div<BodyContainerProps>`
  padding: ${getPadding};

  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `}
`;

export type CardAccordionBodyProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** **OBS!** denne propen blir satt automatisk av forelder. Forteller komponenten om den skal utvides.  */
    isExpanded?: boolean;
    /** **OBS!** denne propen blir satt automatisk av forelder. Forteller `id` til `<CardAccordionHeader />`.  */
    headerId?: string;
    /**Overskriver default padding på toppen. Brukes når barn har spacing på toppen, f.eks. en overskrift. */
    paddingTop?: Property.PaddingTop<string>;
    /**Overskriver default padding. */
    padding?: Property.Padding<string>;
  }
>;

export const CardAccordionBody = forwardRef<
  HTMLDivElement,
  CardAccordionBodyProps
>((props, ref) => {
  const { children, isExpanded, headerId, id, className, htmlProps, ...rest } =
    props;

  const bodyRef = useRef<HTMLDivElement>(null);

  const [animate, setAnimate] = useState(false);

  const isMounted = useIsMounted();
  const height = useElementHeight(bodyRef.current);

  useEffect(() => {
    if (isMounted()) {
      setAnimate(true);
    }
  }, [isMounted]);

  const bodyProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    ref,
    isExpanded,
    role: 'region',
    height,
  };
  const bodyContainerProps = {
    ref: bodyRef,
    isExpanded,
  };

  return (
    <Body
      {...bodyProps}
      animate={animate}
      aria-labelledby={headerId}
      aria-hidden={!isExpanded}
    >
      <BodyContainer {...bodyContainerProps} animate={animate}>
        {children}
      </BodyContainer>
    </Body>
  );
});
