import React, {
  Children as ReactChildren,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  useEffect,
  useId,
  useState,
} from 'react';
import {
  Placement,
  useCombinedRef,
  useOnKeyDown,
  useFloatPosition,
} from '../../hooks';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { combineHandlers } from '../../utils';
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
    const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
    const { reference, floating, styles } = useFloatPosition(arrowElement, {
      placement,
    });
    const combinedRef = useCombinedRef(ref, floating);

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
      open,
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
                d="M16.5858 6.58579L10.8787 0.87868C10.3161 0.316071 9.55301 0 8.75736 0H27.2426C26.447 0 25.6839 0.31607 25.1213 0.878679L19.4142 6.58579C18.6332 7.36684 17.3668 7.36684 16.5858 6.58579Z"
                fill={svgArrow.background.fill}
              />
              <path
                d="M8 0C7.72386 0 7.5 0.223858 7.5 0.5C7.5 0.776142 7.72386 1 8 1V0ZM11.1716 1.67157L10.818 2.02513L10.818 2.02513L11.1716 1.67157ZM19.4142 7.08579L19.0607 6.73223L19.0607 6.73223L19.4142 7.08579ZM24.8284 1.67157L25.182 2.02513L25.182 2.02512L24.8284 1.67157ZM28 1C28.2761 1 28.5 0.776142 28.5 0.5C28.5 0.223858 28.2761 0 28 0V1ZM8 1H8.34315V0H8V1ZM10.818 2.02513L16.2322 7.43934L16.9393 6.73223L11.5251 1.31802L10.818 2.02513ZM19.7678 7.43934L25.182 2.02513L24.4749 1.31802L19.0607 6.73223L19.7678 7.43934ZM27.6569 1H28V0H27.6569V1ZM25.182 2.02512C25.8384 1.36875 26.7286 1 27.6569 1V0C26.4634 0 25.3188 0.474104 24.4749 1.31802L25.182 2.02512ZM16.2322 7.43934C17.2085 8.41565 18.7915 8.41565 19.7678 7.43934L19.0607 6.73223C18.4749 7.31802 17.5251 7.31802 16.9393 6.73223L16.2322 7.43934ZM8.34315 1C9.2714 1 10.1616 1.36875 10.818 2.02513L11.5251 1.31802C10.6812 0.474106 9.53662 0 8.34315 0V1Z"
                fill={svgArrow.border.fill}
              />
            </SvgArrow>
          </ArrowWrapper>
        </TooltipWrapper>
      </Container>
    );
  }
);