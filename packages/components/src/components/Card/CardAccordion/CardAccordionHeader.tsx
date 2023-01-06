import { forwardRef, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  cardAccordionTokens as tokens,
  typographyTypes,
} from './CardAccordion.tokens';
import { AnimatedChevronUpDown } from '../../../helpers';
import { normalizeButton, removeButtonStyling } from '../../../helpers/styling';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { getFontStyling } from '../../Typography/Typography.utils';

const { header, chevronWrapper } = tokens;

const ContentWrapper = styled.div`
  text-align: left;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  padding: ${header.padding};
  ${getFontStyling(typographyTypes.header)}
`;

const HeaderWrapper = styled.button`
  ${normalizeButton}
  user-select: text;
  position: relative;
  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  ${removeButtonStyling}
  display: block;
  width: 100%;
  &:hover {
    box-shadow: ${header.hover.boxShadow};
  }

  &:focus-visible,
  &.focus-visible {
    outline: none;
    box-shadow: ${header.focus.boxShadow};
  }
`;

const ChevronWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${chevronWrapper.width};
  height: ${chevronWrapper.height};
  margin-left: ${chevronWrapper.marginLeft};
`;

export type CardAccordionHeaderProps = BaseComponentPropsWithChildren<
  HTMLButtonElement,
  {
    /** **OBS!** denne propen blir satt automatisk av forelder. Forteller body er utvidet.  */
    isExpanded?: boolean;
    /** **OBS!** denne propen blir satt automatisk av forelder. Callback for å styre utvidelse og sammentrukking.  */
    toggleExpanded?: () => void;
    /** **OBS!** denne propen blir satt automatisk av forelder. Forteller `id` til `<CardAccordionBody />`.  */
    bodyId?: string;
  },
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export const CardAccordionHeader = forwardRef<
  HTMLButtonElement,
  CardAccordionHeaderProps
>((props, ref) => {
  const {
    children,
    isExpanded = false,
    toggleExpanded,
    bodyId,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const handleClick = () => {
    if (toggleExpanded) {
      toggleExpanded();
    }
  };

  const headerWrapperProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    'aria-expanded': isExpanded,
    'aria-controls': bodyId,
    ref,
    onClick: handleClick,
  };

  const chevronProps = {
    isUp: isExpanded,
    width: tokens.chevron.width,
    height: tokens.chevron.height,
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
