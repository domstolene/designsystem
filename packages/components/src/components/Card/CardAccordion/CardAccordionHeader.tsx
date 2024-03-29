import { type Property } from 'csstype';
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import {
  cardAccordionTokens as tokens,
  typographyTypes,
} from './CardAccordion.tokens';
import { useCardAccordionContext } from './CardAccordionContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  AnimatedChevronUpDown,
  focusVisible,
  normalizeButton,
  removeButtonStyling,
} from '../../helpers';
import { type StaticTypographyType, getFontStyling } from '../../Typography';

const { header, chevronWrapper } = tokens;

const ContentWrapper = styled.div`
  text-align: left;
`;

function getTypographyType(props: HeaderProps): StaticTypographyType {
  const { typographyType } = props;

  return typographyType ?? typographyTypes.header;
}

interface HeaderProps {
  padding?: Property.Padding<string>;
  typographyType?: StaticTypographyType;
  bold?: boolean;
}

const HeaderContainer = styled.div.withConfig({
  shouldForwardProp: prop =>
    prop !== 'padding' && prop !== 'typographyType' && prop !== 'bold',
})<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  padding: ${({ padding }) => padding ?? header.padding};
  ${props => getFontStyling(getTypographyType(props))}
  ${props =>
    props.bold &&
    css`
      font-weight: 600;
    `}
`;

const HeaderWrapperButton = styled.button`
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
    ${focusVisible}
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

export type CardAccordionHeaderProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLButtonElement,
    {
      /**Overskriver default padding. */
      padding?: Property.Padding<string>;
      /**Overskriver default teksttype. */
      typographyType?: StaticTypographyType;
      /**Angir om teksten skal være i "bold"-format. */
      bold?: boolean;
    },
    ButtonHTMLAttributes<HTMLButtonElement>
  >,
  'id'
>;

export const CardAccordionHeader = forwardRef<
  HTMLButtonElement,
  CardAccordionHeaderProps
>((props, ref) => {
  const {
    children,
    className,
    htmlProps,
    padding,
    typographyType,
    bold,
    ...rest
  } = props;

  const {
    headerId: id,
    bodyId,
    toggleExpanded,
    isExpanded,
  } = useCardAccordionContext();

  const headerWrapperProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    'aria-expanded': isExpanded,
    'aria-controls': bodyId,
    ref,
    onClick: toggleExpanded,
  };

  const chevronProps = {
    isUp: isExpanded,
    width: tokens.chevron.width,
    height: tokens.chevron.height,
  };

  return (
    <HeaderWrapperButton {...headerWrapperProps} type="button">
      <HeaderContainer
        typographyType={typographyType}
        padding={padding}
        bold={bold}
      >
        <ContentWrapper>{children}</ContentWrapper>
        <ChevronWrapper>
          <AnimatedChevronUpDown {...chevronProps} />
        </ChevronWrapper>
      </HeaderContainer>
    </HeaderWrapperButton>
  );
});

CardAccordionHeader.displayName = 'CardAccordionHeader';
