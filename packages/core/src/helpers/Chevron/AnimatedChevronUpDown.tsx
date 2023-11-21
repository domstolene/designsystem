import {
  SvgChevronlRight,
  SvgChevronlLeft,
  SvgChevronlGroup,
  SvgChevron,
} from './AnimatedChevronUpDown.styles';
import { Property } from 'csstype';

const svgChevronLeftPath =
  'M 1 0 L 5 4 C 5 4 5 4 5 4 L 4 5 C 4 5 4 5 4 5 C 4 5 4 5 4 5 L 0 1 C 0 1 0 1 0 1 L 1 0 C 1 0 1 0 1 0 C 1 0 1 0 1 0 L 1 0 Z';
const svgChevronRightPath =
  'M 3 4 L 7 0 L 8 1 C 8 1 8 1 8 1 L 4 5 L 3 4 C 3 4 3 4 3 4 L 3 4 Z';

interface SvgChevronProps {
  isUp?: boolean;
  height?: Property.Height<string>;
  width?: Property.Width<string>;
}

export const AnimatedChevronUpDown = ({
  isUp,
  height = '5px',
  width = '8px',
}: SvgChevronProps) => {
  return (
    <SvgChevron
      viewBox="0 0 8 5"
      width={width}
      height={height}
      fill="currentColor"
    >
      <SvgChevronlGroup $isUp={isUp}>
        <SvgChevronlLeft d={svgChevronLeftPath} $isUp={isUp} />
        <SvgChevronlRight d={svgChevronRightPath} $isUp={isUp} />
      </SvgChevronlGroup>
    </SvgChevron>
  );
};
