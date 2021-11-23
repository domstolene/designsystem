import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { cardAccordionBodyTokens as tokens } from './CardAccordionBody.tokens';

const expandingAnimation = css`
  transition: visibility 0.3s, max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

type BodyProps = Pick<CardAccordionBodyProps, 'isExpanded'>;

const Body = styled.div<BodyProps>`
  ${expandingAnimation}
  ${tokens.base}
  ${({ isExpanded }) =>
    !isExpanded &&
    css`
      padding-bottom: 0;
    `}
`;

type WrapperProps = Pick<CardAccordionBodyProps, 'isExpanded'> & {
  maxHeight?: number;
};

const BodyWrapper = styled.div<WrapperProps>`
  ${expandingAnimation}
  overflow: hidden;
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 0)}px;
`;

export type CardAccordionBodyProps = {
  isExpanded?: boolean;
  headerId?: string;
} & HTMLAttributes<HTMLDivElement>;

export const CardAccordionBody = forwardRef<
  HTMLDivElement,
  CardAccordionBodyProps
>(({ children, isExpanded, headerId, ...rest }, ref) => {
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
    ref,
    isExpanded,
    role: 'region',
    ...rest
  };
  const bodyWrapperProps = {
    ref: bodyRef,
    maxHeight: maxHeight,
    isExpanded
  };

  return (
    <Body aria-labelledby={headerId} aria-hidden={!isExpanded} {...bodyProps}>
      <BodyWrapper {...bodyWrapperProps}> {children} </BodyWrapper>
    </Body>
  );
});
