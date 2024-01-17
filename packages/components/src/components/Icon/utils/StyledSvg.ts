import { type SVGAttributes } from 'react';
import styled from 'styled-components';

const size = 24;
const sizePx = `${size}px`;

type StyledSvgProps = SVGAttributes<SVGSVGElement>;

export const StyledSvg = styled.svg.attrs<StyledSvgProps>(
  ({ height, width, fill }) => {
    return {
      height: height ? height : sizePx,
      width: width ? width : sizePx,
      fill: fill ? fill : 'currentColor',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: `0 0 ${size} ${size}`,
    };
  },
)<StyledSvgProps>`
  display: inline-block;
  transition: fill 0.2s;
  flex-shrink: 0;
`;
