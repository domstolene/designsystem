import {
  forwardRef,
  HTMLAttributes,
  KeyboardEventHandler,
  KeyboardEvent
} from 'react';
import styled, { css } from 'styled-components';
import { cardAccordionHeaderTokens as tokens } from './CardAccordionHeader.tokens';

const ContentWrapper = styled.div``;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tokens.base}
  &:focus {
    outline: none;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${tokens.hover.base}
  }
  &:focus > ${HeaderContainer} {
    outline: none;
    ${tokens.focus.base}
  }
  &:focus {
    outline: none;
  }
`;

const chevronPseudoElementStyling = css`
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: currentColor;
  transition: transform 0.2s;
`;

type ChevronProps = Pick<CardAccordionHeaderProps, 'isExpanded'>;

const Chevron = styled.span<ChevronProps>`
  display: inline-block;
  flex-shrink: 0;
  height: 2px;
  line-height: 2px;
  width: 17px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  &::before {
    ${chevronPseudoElementStyling}
    left: 2px;
    transform: translateX(2px)
      ${({ isExpanded }) => (isExpanded ? 'rotate(-45deg)' : 'rotate(45deg)')};
  }
  &::after {
    ${chevronPseudoElementStyling}
    right: 2px;
    transform: translateX(2px)
      ${({ isExpanded }) => (isExpanded ? 'rotate(45deg)' : 'rotate(-45deg)')};
  }
`;

export type CardAccordionHeaderProps = {
  isExpanded?: boolean;
  toggleExpanded?: () => void;
  bodyId?: string;
} & HTMLAttributes<HTMLDivElement>;

export const CardAccordionHeader = forwardRef<
  HTMLDivElement,
  CardAccordionHeaderProps
>(({ children, isExpanded, toggleExpanded, bodyId, ...rest }, ref) => {
  const handleClick = () => {
    if (toggleExpanded) {
      toggleExpanded();
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    const { key } = event;
    if (key === 'Enter' || key === ' ') {
      if (toggleExpanded) {
        toggleExpanded();
      }
      event.preventDefault();
    }
  };

  const headerProps = {
    tabIndex: 0,
    ref,
    role: 'button',
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ...rest
  };

  const headerContainerProps = {
    tabIndex: -1
  };

  const chevronProps = {
    isExpanded
  };

  return (
    <HeaderWrapper
      aria-controls={bodyId}
      aria-expanded={isExpanded}
      {...headerProps}
    >
      <HeaderContainer {...headerContainerProps}>
        <ContentWrapper> {children} </ContentWrapper>
        <Chevron {...chevronProps} />
      </HeaderContainer>
    </HeaderWrapper>
  );
});
