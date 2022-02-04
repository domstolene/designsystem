import {
  forwardRef,
  HTMLAttributes,
  KeyboardEventHandler,
  KeyboardEvent
} from 'react';
import styled from 'styled-components';
import { cardAccordionHeaderTokens as tokens } from './CardAccordionHeader.tokens';
import { AnimatedChevronUpDown } from '../../../helpers/Chevron';

const ContentWrapper = styled.div``;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.2s;
  ${tokens.base}
  &:focus {
    outline: none;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.2s;
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

export type CardAccordionHeaderProps = {
  isExpanded?: boolean;
  toggleExpanded?: () => void;
  bodyId?: string;
} & HTMLAttributes<HTMLDivElement>;

export const CardAccordionHeader = forwardRef<
  HTMLDivElement,
  CardAccordionHeaderProps
>(({ children, isExpanded = false, toggleExpanded, bodyId, ...rest }, ref) => {
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
    isUp: isExpanded
  };

  return (
    <HeaderWrapper
      aria-controls={bodyId}
      aria-expanded={isExpanded}
      {...headerProps}
    >
      <HeaderContainer {...headerContainerProps}>
        <ContentWrapper> {children} </ContentWrapper>
        <AnimatedChevronUpDown {...chevronProps} />
      </HeaderContainer>
    </HeaderWrapper>
  );
});
