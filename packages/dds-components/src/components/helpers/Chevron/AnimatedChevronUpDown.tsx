import { type Property } from 'csstype';

import styles from './Chevron.module.css';
import { cn } from '../../../utils';

const svgChevronLeftPath =
  'M 1 0 L 5 4 C 5 4 5 4 5 4 L 4 5 C 4 5 4 5 4 5 C 4 5 4 5 4 5 L 0 1 C 0 1 0 1 0 1 L 1 0 C 1 0 1 0 1 0 C 1 0 1 0 1 0 L 1 0 Z';
const svgChevronRightPath =
  'M 3 4 L 7 0 L 8 1 C 8 1 8 1 8 1 L 4 5 L 3 4 C 3 4 3 4 3 4 L 3 4 Z';

interface SvgChevronProps {
  isUp?: boolean;
  height?: Property.Height;
  width?: Property.Width;
}

export const AnimatedChevronUpDown = ({
  isUp,
  height = '5px',
  width = '8px',
}: SvgChevronProps) => {
  const stateCn = isUp ? 'up' : 'down';
  return (
    <svg
      viewBox="0 0 8 5"
      fill="currentColor"
      className={cn(styles.svg)}
      style={{ height, width }}
    >
      <g className={cn(styles.group, styles[`group--${stateCn}`])}>
        <path
          d={svgChevronLeftPath}
          className={cn(styles.left, styles[`left--${stateCn}`])}
        />
        <path
          d={svgChevronRightPath}
          className={cn(styles.right, styles[`right--${stateCn}`])}
        />
      </g>
    </svg>
  );
};
