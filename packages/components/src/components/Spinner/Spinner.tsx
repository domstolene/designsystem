import { type Property } from 'csstype';
import { useId, useRef } from 'react';

import styles from './Spinner.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { type TextColor, cn, getTextColor } from '../../utils';

export type SpinnerProps = BaseComponentProps<
  SVGElement,
  {
    /**Farge på spinneren. */
    color?: TextColor | (string & NonNullable<unknown>);
    /**Størrelse; Setter høyde og bredde på spinneren. */
    size?: Property.Width;
    /**Tekst som vises ved hover. */
    tooltip?: string;
  }
>;

export function Spinner(props: SpinnerProps) {
  const {
    size = 'var(--dds-icon-size-medium)',
    color = 'interactive',
    tooltip = 'Innlasting pågår',
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const mountTime = useRef(Date.now());
  const outerAnimationDelay = -(mountTime.current % 2000);
  const innerAnimationDelay = -(mountTime.current % 1500);

  const generatedId = useId();
  const uniqueId = `${generatedId}-spinnerTitle`;

  return (
    <svg
      viewBox="0 0 50 50"
      role="img"
      aria-labelledby={uniqueId}
      {...getBaseHTMLProps(id, cn(className, styles.svg), htmlProps, rest)}
      width={size}
      height={size}
      style={{
        ...htmlProps?.style,
        animationDelay: outerAnimationDelay + 'ms',
      }}
    >
      <title id={uniqueId}>{tooltip}</title>
      <circle
        className={cn(styles.circle)}
        style={{
          animationDelay: innerAnimationDelay + 'ms',
        }}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={getTextColor(color)}
        strokeWidth="4"
      />
    </svg>
  );
}

Spinner.displayName = 'Spinner';
