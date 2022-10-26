import styled from 'styled-components';
import { Paper } from '../../helpers';
import { visibilityTransition } from '../../helpers/styling';
import {
  defaultTypographyType,
  getFontStyling,
} from '../Typography/Typography.utils';
import { tooltipTokens as tokens } from './Tooltip.tokens';

const { wrapper } = tokens;

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

export const TooltipWrapper = styled(Paper)<WrapperProps>`
  ${({ open }) => visibilityTransition(open)}
  width: fit-content;
  position: absolute;
  z-index: 20;
  text-align: center;
  padding: ${wrapper.padding};
  ${getFontStyling(defaultTypographyType)};
`;
