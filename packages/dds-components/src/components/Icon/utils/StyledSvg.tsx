import { type SVGAttributes } from 'react';

import { cn, getTextColor } from '../../../utils';
import styles from '../Icon.module.css';

const size = 24;
const sizePx = `${size}px`;

type StyledSvgProps = SVGAttributes<SVGSVGElement>;

export function StyledSvg({
  height,
  width,
  fill = 'currentColor',
  className,
  ...props
}: StyledSvgProps) {
  return (
    <svg
      {...props}
      height={height ? height : sizePx}
      width={width ? width : sizePx}
      fill={getTextColor(fill)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      className={cn(className, styles.svg)}
    />
  );
}
