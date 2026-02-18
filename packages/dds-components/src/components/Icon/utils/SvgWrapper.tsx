import { cn, getTextColor } from '../../../utils';
import styles from '../Icon.module.css';
import { type SvgProps } from './types';

const size = 24;
const sizeCSS = 'var(--dds-size-icon-medium)';

export function SvgWrapper({
  height,
  width,
  fill = 'currentColor',
  className,
  title,
  children,
  // destructure for å unngå at `iconState` blir sendt videre til svg-elementet som ugyldig custom attribute.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  iconState: _iconState,
  ...props
}: SvgProps & { iconState?: string }) {
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
