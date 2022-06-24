import { forwardRef, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { cardAccordionBodyTokens as tokens } from './CardAccordionBody.tokens';
import { Property } from 'csstype';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps
} from '../../../types';

const expandingAnimation = css`
  transition: padding 0.2s, visibility 0.3s,
    max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

type BodyProps = {
  isExpanded?: boolean;
  paddingTop?: Property.PaddingTop<string>;
};

const Body = styled.div<BodyProps>`
  ${expandingAnimation}
  ${tokens.base}
  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `}
  ${({ isExpanded }) =>
    !isExpanded &&
    css`
      padding-top: 0;
      padding-bottom: 0;
    `}
`;

type BodyContainerProps = {
  isExpanded?: boolean;
  maxHeight?: number;
};

const BodyContainer = styled.div<BodyContainerProps>`
  ${expandingAnimation}
  overflow: hidden;
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 0)}px;
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
  }
>;

export const CardAccordionBody = forwardRef<
  HTMLDivElement,
  CardAccordionBodyProps
>((props, ref) => {
  const { children, isExpanded, headerId, id, htmlProps, ...rest } = props;

  const bodyRef = useRef<HTMLDivElement>(null);

  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!isExpanded) {
      setMaxHeight(0);
    } else if (bodyRef && bodyRef.current) {
      setMaxHeight(bodyRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const bodyProps = {
    ...getBaseHTMLProps(id, htmlProps, rest),
    ref,
    isExpanded,
    role: 'region'
  };
  const bodyContainerProps = {
    ref: bodyRef,
    maxHeight: maxHeight,
    isExpanded
  };

  return (
    <Body {...bodyProps} aria-labelledby={headerId} aria-hidden={!isExpanded}>
      <BodyContainer {...bodyContainerProps}> {children} </BodyContainer>
    </Body>
  );
});
