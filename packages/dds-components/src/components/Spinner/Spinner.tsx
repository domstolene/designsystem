import { type Property } from 'csstype';
import { type HTMLAttributes, useId } from 'react';

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
     * @default "var(--dds-size-icon-medium)"
     */
    size?: Property.Width;
    /**Tekst som vises ved hover.
     * @default "Innlasting pågår"
     */
    tooltip?: string;
  },
  Omit<HTMLAttributes<SVGSVGElement>, 'color'>
>;

export function Spinner(props: SpinnerProps) {
  const {
    size = 'var(--dds-size-icon-medium)',
    color = 'icon-action-resting',
    tooltip,
    id,
    className,
    htmlProps,
    style,
    ...rest
  } = props;

  const { t } = useTranslation();

  const generatedId = useId();
  const uniqueId = `${generatedId}-spinnerTitle`;

  return (
    <svg
      viewBox="0 0 25 25"
      role="progressbar"
      aria-labelledby={uniqueId}
      {...getBaseHTMLProps(
        id,
        cn(className, styles.svg),
        {
          ...style,
          width: size,
          height: size,
        },
        htmlProps,
        rest,
      )}
    >
      <title id={uniqueId}>{tooltip ?? t(commonTexts.loading)}</title>
      <circle
        cx="12"
        cy="12.25"
        r="6"
        fill={getTextColor(color)}
        className={styles.jordskifterett}
      />
      <rect
        x="4"
        y="10.25"
        width="16"
        height="4"
        fill={getTextColor(color)}
        className={styles.lagmannsrett}
      />
      <path
        d="M12 16.6154C16.4183 16.6154 20 12.7581 20 8H4C4 12.7581 7.58172 16.6154 12 16.6154Z"
        fill={getTextColor(color)}
        className={styles.tingrett}
      />
    </svg>
  );
}

Spinner.displayName = 'Spinner';
