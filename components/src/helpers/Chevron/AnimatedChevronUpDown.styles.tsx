import styled from 'styled-components';

export type SvgChevronProps = {
  isExpanded?: boolean;
};

export const SvgChevron = styled.svg<SvgChevronProps>`
  display: inline-block;
  flex-shrink: 0;
  height: 8px;
  width: 12px;
  position: relative;
  text-align: center;
  vertical-align: middle;
`;

export const SvgChevronlGroup = styled.g<SvgChevronProps>`
  transition: transform 0.2s linear;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'translateY(3px)' : 'translateY(0)'};
`;

export const SvgChevronlLeft = styled.path<SvgChevronProps>`
  transition: transform 0.2s linear;
  transform-origin: 1px 1px;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(-90deg) translateY(0)' : 'rotate(0) translateY(0)'};
`;

export const SvgChevronlRight = styled.path<SvgChevronProps>`
  transition: transform 0.2s linear;
  transform-origin: 7px 1px;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(90deg) translateY(0)' : 'rotate(0) translateY(0)'};
`;
