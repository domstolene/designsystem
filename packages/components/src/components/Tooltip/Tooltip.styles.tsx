import styled from 'styled-components';
import { tooltipTokens as tokens } from './Tooltip.tokens';
import { PaperProps, Paper, visibilityTransition } from '../helpers';
import { getFontStyling, defaultTypographyType } from '../Typography';

const { wrapper } = tokens;

export const SvgArrow = styled.svg`
  width: 36px;
  height: 9px;
`;

export const ArrowWrapper = styled.div``;

export const Container = styled.div`
  width: fit-content;
`;

type WrapperProps = PaperProps & {
  open: boolean;
};

export const TooltipWrapper = styled(Paper)<WrapperProps>`
  ${({ open }) => visibilityTransition(open)}
  width: fit-content;
  position: absolute;
  z-index: 80;
  text-align: center;
  padding: ${wrapper.padding};
  ${getFontStyling(defaultTypographyType)};
`;
