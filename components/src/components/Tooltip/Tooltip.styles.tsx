import styled from 'styled-components';
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
  open?: boolean;
};

export const TooltipWrapper = styled.div<WrapperProps>`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.2s;
  width: fit-content;
  position: absolute;
  z-index: 20;
  text-align: center;
  ${tokens.wrapper.base}
  &[data-popper-placement^='top'] > ${ArrowWrapper} {
    bottom: ${tokens.arrowPlacementTemplate.bottom};
  }
  &[data-popper-placement^='bottom'] > ${ArrowWrapper} {
    top: ${tokens.arrowPlacementTemplate.top};
    ${SvgArrow} {
      transform: rotate(180deg);
    }
  }

  &[data-popper-placement^='right'] > ${ArrowWrapper} {
    left: ${tokens.arrowPlacementTemplate.left};
    ${SvgArrow} {
      transform: rotate(90deg);
    }
  }
}

&[data-popper-placement^='left'] > ${ArrowWrapper} {
  right: ${tokens.arrowPlacementTemplate.right};
  ${SvgArrow} {
    transform: rotate(270deg);
  }
`;
