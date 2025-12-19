import { type SvgProps } from './types';
import { cn, getTextColor } from '../../../utils';
import styles from '../Icon.module.css';

const size = 24;
const sizeCSS = 'var(--dds-size-icon-medium)';

export function SvgWrapper({
  height,
  width,
  fill = 'currentColor',
  className,
  title,
  children,
  ...props
}: SvgProps) {
  return (
    <svg
      {...props}
      fill={getTextColor(fill)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      className={cn(className, styles.svg)}
      style={{
        height: height ? height : sizeCSS,
        width: width ? width : sizeCSS,
      }}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}
