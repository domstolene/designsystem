import styles from './AnimatedChevronUpDown.module.css';
import { cn, getTextColor } from '../../../../../utils';
import { type SvgProps, SvgWrapper } from '../../../utils';

const STATES = ['up', 'down'] as const;
export type AnimatedChevronUpDownIconStates = (typeof STATES)[number];

export function AnimatedChevronUpDownIcon(
  props: SvgProps & { iconState?: AnimatedChevronUpDownIconStates },
) {
  const { className, iconState = 'down', fill = 'currentColor' } = props;
  return (
    <SvgWrapper
      {...props}
      fill={fill}
      className={cn(styles.svg, styles[`svg--${iconState}`], className)}
    >
      <g className={cn(styles.group)}>
        <line
          stroke={getTextColor(fill)}
          strokeWidth="1.5"
          className={cn(styles.left)}
          x1="4"
          y1="12"
          x2="12"
          y2="12"
        ></line>
        <line
          stroke={getTextColor(fill)}
          strokeWidth="1.5"
          className={cn(styles.right)}
          x1="20"
          y1="12"
          x2="12"
          y2="12"
        ></line>
      </g>
    </SvgWrapper>
  );
}

AnimatedChevronUpDownIcon.states = STATES;
