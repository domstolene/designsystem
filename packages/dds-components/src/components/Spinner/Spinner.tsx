import { type Property } from 'csstype';
import { useId, useRef } from 'react';

import styles from './Spinner.module.css';
import { useTranslation } from '../../i18n';
import { commonTexts } from '../../i18n/commonTexts';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { type TextColor, cn, getTextColor } from '../../utils';

export type SpinnerProps = BaseComponentProps<
  SVGElement,
  {
    /**Farge på spinneren.
     * @default "iconActionResting"
     */
    color?: TextColor;
    /**Størrelse; Setter høyde og bredde på spinneren.
     * @default "var(--dds-icon-size-medium)"
     */
    size?: Property.Width;
    /**Tekst som vises ved hover.
     * @default "Innlasting pågår"
     */
    tooltip?: string;
  }
>;

export function Spinner(props: SpinnerProps) {
  const {
    size = 'var(--dds-icon-size-medium)',
    color = 'iconActionResting',
    tooltip,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const { t } = useTranslation();

  const mountTime = useRef(Date.now());
  const outerAnimationDelay = -(mountTime.current % 2000);
  const innerAnimationDelay = -(mountTime.current % 1500);

  const generatedId = useId();
  const uniqueId = `${generatedId}-spinnerTitle`;

  return (
    <svg
      viewBox="0 0 50 50"
      role="progressbar"
      aria-labelledby={uniqueId}
      {...getBaseHTMLProps(id, cn(className, styles.svg), htmlProps, rest)}
      style={{
        ...htmlProps?.style,
        animationDelay: outerAnimationDelay + 'ms',
        width: size,
        height: size,
      }}
    >
      <title id={uniqueId}>{tooltip ?? t(commonTexts.loading)}</title>
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
