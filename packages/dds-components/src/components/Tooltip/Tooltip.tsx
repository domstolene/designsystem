import { type Placement } from '@floating-ui/react-dom';
import {
  type HTMLAttributes,
  Children as ReactChildren,
  type ReactElement,
  type Ref,
  cloneElement,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import styles from './Tooltip.module.css';
import {
  useCombinedRef,
  useFloatPosition,
  useMountTransition,
  useOnKeyDown,
} from '../../hooks';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn, combineHandlers } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Box, Paper } from '../layout';
import typographyStyles from '../Typography/typographyStyles.module.css';

type AnchorElement = ReactElement<
  HTMLAttributes<HTMLElement> & {
    ref: Ref<HTMLElement>;
  }
>;

type PickedHTMLAttributes = Pick<
  HTMLAttributes<HTMLDivElement>,
  'style' | 'onMouseLeave' | 'onMouseOver'
>;

export type TooltipProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Innhold i tooltip. */
    text: string;
    /**Plassering i forhold til anchor-elementet.
     * @default "bottom"
     */
    placement?: Placement;
    /**Anchor-elementet. */
    children: AnchorElement;
    /**Forsinkelse for når tooltip skal dukke opp. Oppgis i millisekunder.
     * @default 100
     */
    delay?: number;
    /**`id` for tooltip. */
    tooltipId?: string;
    /**Om tooltip skal alltid være i DOM, eller bli rendret først når den skal vises. */
    keepMounted?: boolean;
  } & PickedHTMLAttributes,
  Omit<HTMLAttributes<HTMLDivElement>, 'children' | keyof PickedHTMLAttributes>
>;

export const Tooltip = ({
  text,
  placement = 'bottom',
  children,
  tooltipId,
  delay = 100,
  style,
  onMouseLeave,
  onMouseOver,
  keepMounted = true,
  id,
  ref,
  className,
  htmlProps,
  ...rest
}: TooltipProps) => {
  const generatedId = useId();
  const uniqueTooltipId = tooltipId ?? `${generatedId}-tooltip`;
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(keepMounted ? false : true);
  const { refs, styles: positionStyles } = useFloatPosition(undefined, {
    placement,
    offset: 4,
  });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const combinedRef = useCombinedRef(ref, refs.setFloating, tooltipRef);

  const closeWhenNotInView: IntersectionObserverCallback = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setInView(true);
    } else setInView(false);
  };

  useEffect(() => {
    if (keepMounted) {
      const options = {
        root: null,
        rootMargin: '0px',
      };
      const ref = tooltipRef.current;
      const observer = new IntersectionObserver(closeWhenNotInView, options);

      if (ref) observer.observe(ref);

      return () => {
        if (ref) observer.unobserve(ref);
      };
    }
  }, [tooltipRef]);

  useEffect(() => {
    if (tooltipRef.current) {
      window.addEventListener('scroll', () => {
        closeTooltip();
      });
    }
    return () => {
      if (tooltipRef.current) {
        window.removeEventListener('scroll', () => null);
      }
    };
  }, []);

  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useOnKeyDown(['Escape', 'Esc'], () => {
    if (open) setOpen(false);
  });

  const closeTooltip = () => {
    clearTimeout(timer);
    setOpen(false);
  };
  const openTooltip = () => {
    if (!open) {
      clearTimeout(timer);
      timer = setTimeout(() => setOpen(true), delay);
    }
  };

  const hasTransitionedIn = useMountTransition(open, 500);
  const isMounted = hasTransitionedIn && open;

  const isTransientlyMounted = !keepMounted && isMounted;

  const anchorElement = ReactChildren.only(
    cloneElement(children, {
      ref: refs.setReference,
      onFocus: combineHandlers(openTooltip, children.props.onFocus),
      onBlur: combineHandlers(closeTooltip, children.props.onBlur),
      'aria-describedby':
        isTransientlyMounted || keepMounted ? uniqueTooltipId : undefined,
    }),
  );

  const openCn =
    (keepMounted && open && inView) || isTransientlyMounted ? 'open' : 'closed';

  const ariaHidden = keepMounted ? !open : undefined;

  return (
    <Box
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
      width="fit-content"
      onMouseLeave={combineHandlers(closeTooltip, onMouseLeave)}
      onMouseOver={combineHandlers(openTooltip, onMouseOver)}
    >
      {anchorElement}
      {(!keepMounted && (open || hasTransitionedIn)) || keepMounted ? (
        <Paper
          id={uniqueTooltipId}
          padding="x0.5"
          width="fit-content"
          textAlign="center"
          ref={combinedRef}
          role="tooltip"
          aria-hidden={ariaHidden}
          style={{ ...positionStyles.floating }}
          elevation="small"
          border="border-subtle"
          className={cn(
            styles.paper,
            typographyStyles['body-short-medium'],
            utilStyles['visibility-transition'],
            utilStyles[`visibility-transition--${openCn}`],
          )}
        >
          {text}
        </Paper>
      ) : null}
    </Box>
  );
};

Tooltip.displayName = 'Tooltip';
