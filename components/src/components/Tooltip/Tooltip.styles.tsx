import styled from 'styled-components';
import { selection, visibilityTransition } from '../../helpers/styling';
import { tooltipTokens as tokens } from './Tooltip.tokens';

export const SvgArrow = styled.svg`
  width: 36px;
  height: 9px;
`;

export const ArrowWrapper = styled.div``;

export const Container = styled.div`
  width: fit-content;
`;

type WrapperProps = {
  open: boolean;
};

export const TooltipWrapper = styled.div<WrapperProps>`
  &::selection {
    ${selection}
  }
  ${({ open }) => visibilityTransition(open)}
  width: fit-content;
  position: absolute;
  z-index: 20;
  text-align: center;
  ${tokens.wrapper.base}
`;
