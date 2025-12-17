import styles from './Chevron.module.css';
import { getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import { type IconProps } from '../../Icon';
import { getSize } from '../../Icon/Icon';
import { type SvgProps, SvgWrapper } from '../../Icon/utils';

type SvgChevronProps = SvgProps & { isUp?: boolean };

export function AnimatedChevronUpDown(props: SvgChevronProps) {
  const { isUp, className } = props;
  const stateCn = isUp ? 'up' : 'down';
  return (
    <SvgWrapper {...props} className={cn(styles.svg, className)}>
      <g className={cn(styles.group, styles[`group--${stateCn}`])}>
        <line
          stroke="currentColor"
          strokeWidth="2px"
          className={cn(styles.left, styles[`left--${stateCn}`])}
          x1="4"
          y1="12"
          x2="12"
          y2="12"
        ></line>
        <line
          stroke="currentColor"
          strokeWidth="2px"
          className={cn(styles.right, styles[`right--${stateCn}`])}
          x1="20"
          y1="12"
          x2="12"
          y2="12"
        ></line>
      </g>
    </SvgWrapper>
  );
}

/**
 * Animert chevron-ikon der armene beveger seg uavhengig av hverandre.
 *
 * @component
 * @param {AnimatedChevronUpDownIcon} props - Props for komponenten.
 * @param {boolean} props.isUp - om chevron peker opp.
 * @param {IconSize} props.iconSize - størrelse.
 * @param {TextColor} props.color - farge.
 *
 * @returns {JSX.Element} Et `<svg>`-element som animeres basert props.

 * @example
 * ```tsx
 * const [isExpanded, setIsExpanded] = useState(false);
 * <button onClick={() => setIsExpanded(!isExpanded)}>
 *    <AnimatedChevronUpDownIcon isUp={isExpanded} />
 * </button>
 * ```
 */

type AnimatedChevronUpDownIcon = Omit<IconProps, 'icon'> & { isUp?: boolean };

export function AnimatedChevronUpDownIcon(props: AnimatedChevronUpDownIcon) {
  const {
    id,
    iconSize = 'medium',
    color = 'currentcolor',
    className,
    htmlProps = {},
    ...rest
  } = props;
  const { title, 'aria-hidden': ariaHidden = true } = htmlProps;

  const size = getSize(iconSize);

  return AnimatedChevronUpDown({
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    title,
    height: size,
    width: size,
    fill: color,
    'aria-hidden': ariaHidden,
  });
}

AnimatedChevronUpDownIcon.displayName = 'AnimatedChevronUpDownIcon';
