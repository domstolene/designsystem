import { forwardRef, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { cardAccordionHeaderTokens as tokens } from './CardAccordionHeader.tokens';
import { AnimatedChevronUpDown } from '../../../helpers/Chevron';
import { removeButtonStyling } from '../../../helpers/styling';

const ContentWrapper = styled.div`
  text-align: left;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.2s;
  ${tokens.base}
`;

const HeaderWrapper = styled.button`
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.2s;
  ${removeButtonStyling}
  display: block;
  width: 100%;
  &:hover {
    ${tokens.hover.base}
  }

  &:focus-visible,
  &.focus-visible {
    outline: none;
    ${tokens.focus.base}
  }
`;

const ChevronWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${tokens.chevronWrapper.base}
`;

export type CardAccordionHeaderProps = {
  /** **OBS!** denne propen blir satt automatisk av forelder. Forteller body er utvidet.  */
  isExpanded?: boolean;
  /** **OBS!** denne propen blir satt automatisk av forelder. Callback for å styre utvidelse og sammentrukking.  */
  toggleExpanded?: () => void;
  /** **OBS!** denne propen blir satt automatisk av forelder. Forteller `id` til `<CardAccordionBody />`.  */
  bodyId?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CardAccordionHeader = forwardRef<
  HTMLButtonElement,
  CardAccordionHeaderProps
>(({ children, isExpanded = false, toggleExpanded, bodyId, ...rest }, ref) => {
  const handleClick = () => {
    if (toggleExpanded) {
      toggleExpanded();
    }
  };

  const headerWrapperProps = {
    'aria-expanded': isExpanded,
    'aria-controls': bodyId,
    ref,
    onClick: handleClick,
    ...rest
  };

  const chevronProps = {
    isUp: isExpanded,
    width: tokens.chevron.width,
    height: tokens.chevron.height
  };

  return (
    <HeaderWrapper {...headerWrapperProps}>
      <HeaderContainer>
        <ContentWrapper> {children} </ContentWrapper>
        <ChevronWrapper>
          <AnimatedChevronUpDown {...chevronProps} />
        </ChevronWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
});
