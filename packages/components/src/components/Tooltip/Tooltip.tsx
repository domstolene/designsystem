import React, {
  Children as ReactChildren,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import {
  Placement,
  useCombinedRef,
  useOnKeyDown,
  useFloatPosition,
} from '@norges-domstoler/dds-core';
import {
  BaseComponentProps,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { combineHandlers } from '@norges-domstoler/dds-core';
import {
  ArrowWrapper,
  Container,
  SvgArrow,
  TooltipWrapper,
} from './Tooltip.styles';
import { tooltipTokens as tokens } from './Tooltip.tokens';

const { svgArrow } = tokens;

type AnchorElement = React.ReactElement & React.RefAttributes<HTMLElement>;

type PickedHTMLAttributes = Pick<
  HTMLAttributes<HTMLDivElement>,
  'style' | 'onMouseLeave' | 'onMouseOver'
>;

export type TooltipProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Innhold i tooltip. */
    text: string;
    /**Plassering i forhold til anchor-elementet. */
    placement?: Placement;
    /**Anchor-elementet. */
    children: AnchorElement;
    /**Forsinkelse for når tooltip skal dukke opp. Oppgis i millisekunder.  */
    delay?: number;
    /**`id` for tooltip. */
    tooltipId?: string;
  } & PickedHTMLAttributes,
  Omit<HTMLAttributes<HTMLDivElement>, 'children' | keyof PickedHTMLAttributes>
>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const {
      text,
      placement = 'bottom',
      children,
      tooltipId,
      delay = 100,
      style,
      onMouseLeave,
      onMouseOver,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const generatedId = useId();
    const uniqueTooltipId = tooltipId ?? `${generatedId}-tooltip`;
    const [open, setOpen] = useState(false);
    const [inView, setInView] = useState(false);
    const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
    const { reference, floating, styles } = useFloatPosition(arrowElement, {
      placement,
    });
    const tooltipRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRef(ref, floating, tooltipRef);

    const closeWhenNotInView: IntersectionObserverCallback = entries => {
      const [entry] = entries;
      entry.isIntersecting ? setInView(true) : setInView(false);
    };

    useEffect(() => {
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
    }, [tooltipRef]);

    useEffect(() => {
      if (tooltipRef.current) {
        window.addEventListener('scroll', () => {
          closeTooltip();
        });
      }
      return () => {
        if (tooltipRef.current) {
          window.removeEventListener('scroll', () => {});
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

    const anchorProps = children.props as HTMLAttributes<HTMLElement>;

    const anchorElement = ReactChildren.only(
      isValidElement(children) &&
        cloneElement(children, {
          ref: reference,
          onFocus: combineHandlers(openTooltip, anchorProps.onFocus),
          onBlur: combineHandlers(closeTooltip, anchorProps.onBlur),
          'aria-describedby': uniqueTooltipId,
        })
    );

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      style,
      onMouseLeave: combineHandlers(closeTooltip, onMouseLeave),
      onMouseOver: combineHandlers(openTooltip, onMouseOver),
    };

    const wrapperProps = {
      id: uniqueTooltipId,
      ref: combinedRef,
      role: 'tooltip',
      'aria-hidden': !open,
      open: open && inView,
      style: { ...styles.floating },
    };

    const arrowWrapperProps = {
      ref: setArrowElement,
      style: styles.arrow,
    };

    return (
      <Container {...containerProps}>
        {anchorElement}
        <TooltipWrapper {...wrapperProps} elevation={1} border="light">
          {text}
          <ArrowWrapper {...arrowWrapperProps}>
            <SvgArrow>
              <path
                d="M16.586 6.586L10 0h16.154a.373.373 0 00-.263.11l-6.477 6.476a2 2 0 01-2.828 0z"
                fill={svgArrow.background.fill}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.5.5l-6.732 6.94a2.5 2.5 0 01-3.536 0L9.5.5H11l5.94 6.232a1.5 1.5 0 002.12 0L25 .5h1.5z"
                fill={svgArrow.border.fill}
              />
            </SvgArrow>
          </ArrowWrapper>
        </TooltipWrapper>
      </Container>
    );
  }
);

Tooltip.displayName = 'Tooltip';
