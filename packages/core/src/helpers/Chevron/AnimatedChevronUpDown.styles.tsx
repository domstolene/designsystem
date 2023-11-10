import styled from 'styled-components';

export interface StyledSvgChevronProps {
  isUp?: boolean;
}

export const SvgChevron = styled.svg<StyledSvgChevronProps>`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  text-align: center;
  vertical-align: middle;
`;

export const SvgChevronlGroup = styled.g<StyledSvgChevronProps>`
  transition: transform 0.2s linear;
  transform: ${({ isUp }) => (isUp ? 'translateY(3px)' : 'translateY(0)')};
`;

export const SvgChevronlLeft = styled.path<StyledSvgChevronProps>`
  transition: transform 0.2s linear;
  transform-origin: 1px 1px;
  transform: ${({ isUp }) =>
    isUp ? 'rotate(-90deg) translateY(0)' : 'rotate(0) translateY(0)'};
`;

export const SvgChevronlRight = styled.path<StyledSvgChevronProps>`
  transition: transform 0.2s linear;
  transform-origin: 7px 1px;
  transform: ${({ isUp }) =>
    isUp ? 'rotate(90deg) translateY(0)' : 'rotate(0) translateY(0)'};
`;
