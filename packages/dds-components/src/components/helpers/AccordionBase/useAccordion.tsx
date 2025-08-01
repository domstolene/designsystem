import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import styles from './AccordionBase.module.css';
import { useIsMounted } from '../../../hooks';
import { type Nullable } from '../../../types';
import { cn, useElementHeight } from '../../../utils';

export interface AccordionConfig {
  /**
   * Om accordion skal være utvidet ved første render.
   */
  initiallyExpanded?: boolean;
  /**
   * Callback som blir kalt når brukeren trykker på header.
   */
  onChange?: (expanded: boolean) => void;
  /**
   * Custom id for accordion; delene får i tillegg suffix `'header'` og `'body'`.
   */
  id?: string;
}

export interface AccordionHeaderProps {
  /**
   * `onClick` som kontrollerer lukking og åpning av accordion, og eventuelt `onChange` satt i config
   */
  onClick: () => void;
  /**
   * Nativ `aria-expanded`.
   */
  'aria-expanded': boolean;
  /**
   * Nativ `aria-controls`.
   */
  'aria-controls': string;
  /**
   * Id, settes for riktig bruk av aria-props.
   */
  id: string;
}

export interface AccordionBodyProps {
  /**
   * Id, settes for riktig bruk av aria-props.
   */
  id: string;
  /**
   * Nativ `role`. Gir innholdet en rolle tilgjengelig for skjermlesere.
   */
  role: string;
  /**
   * Nativ `aria-labelledby`.
   */
  'aria-labelledby': string;
  /**
   * Nativ `aria-hidden`.
   */
  'aria-hidden': boolean;
  /**
   * Høyde som skal settes i CSS for animasjon.
   */
  height?: number;
  /**
   * Klassenavn for innhold-wrapper; håndterer animasjon og lukking.
   */
  className?: string;
}

export interface AccordionState {
  /**
   * Id, settes for riktig bruk av aria-props.
   */
  id: string;
  /**
   * Om accordion er utvided.
   */
  isExpanded: boolean;
  /**
   * State funksjon som setter `isExpanded` ved behov.
   */
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  /**
   * Funksjon som åpner accordion. Brukes ved behov.
   */
  openAccordion: () => void;
  /**
   * Funksjon som lukker accordion. Brukes ved behov.
   */
  closeAccordion: () => void;
  /**
   * Funksjon som toggler accordion. Brukes ved behov.
   */
  toggleExpanded: () => void;
  /**
   * Props som settes på header-elementet.
   */
  headerProps: AccordionHeaderProps;
  /**
   * Props som settes på innholds-elementet.
   */
  bodyProps: AccordionBodyProps;
  /**
   * Ref som settes på wrapper inni innholds-elementet; Sørger for animasjon.
   */
  bodyContentRef: RefObject<HTMLDivElement | null>;
}

/**
 * Implementerer trekkspill-mønsteret; header som utvider og trekker sammen et panel. Håndterer oppførsel, UU og visuelle effekter.
 * @returns {AccordionState} accordion state og props å bruke på acccordion-elementer: header og body.
 * @example
 * ```tsx
 * function MyComponent() {
 *
 *  const { isExpanded, bodyContentRef, headerProps, bodyProps } = useAccordion({});
 *  const { height, ...restBodyProps } = bodyProps;
 *
 *  return (
 *    <>
 *      <button {...headerProps}>
 *        {isExpanded ? 'Skjul' : 'Vis'} innhold
 *      </button>
 *      <div style={{height}} {...restBodyProps}>
 *        <div ref={bodyContentRef}>
 *          innhold
 *        </div>
 *      </div>
 *    </>
 *  )
 * });
 * ```
 */

export const useAccordion = ({
  initiallyExpanded = false,
  onChange,
  id,
}: AccordionConfig): AccordionState => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const generatedId = useId();
  const accordionId = id ?? `${generatedId}-accordion`;

  const openAccordion = () => {
    setIsExpanded(true);
  };

  const closeAccordion = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    setIsExpanded(isExpanded);
  }, [isExpanded]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prevExpanded => {
      const newExpanded = !prevExpanded;

      if (onChange) {
        onChange(newExpanded);
      }

      return newExpanded;
    });
  }, [onChange]);

  const bodyContentRef = useRef<HTMLDivElement>(null);

  const [animate, setAnimate] = useState(false);

  const isMounted = useIsMounted();
  const height = useElementHeight(bodyContentRef.current);

  const [initialExpandedHeight, setIntialExpandedHeight] =
    useState<Nullable<number>>(null);

  useLayoutEffect(() => {
    // For å unngå initiell animasjon dersom Accordion er satt til å være åpen som default.
    if (bodyContentRef.current && isExpanded) {
      setIntialExpandedHeight(bodyContentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isMounted()) {
      setAnimate(true);
    }
  }, [isMounted]);

  const headerProps: AccordionHeaderProps = {
    id: `${accordionId}-header`,
    onClick: toggleExpanded,
    'aria-expanded': isExpanded,
    'aria-controls': `${accordionId}-body`,
  };

  const bodyProps: AccordionBodyProps = {
    id: `${accordionId}-body`,
    role: 'region',
    'aria-labelledby': `${accordionId}-header`,
    'aria-hidden': !isExpanded,
    className: cn(
      styles.body,
      !isExpanded && styles['body--hidden'],
      animate && styles['body--animated'],
    ),
    height: height ?? initialExpandedHeight ?? 0,
  };

  return {
    id: accordionId,
    isExpanded,
    setIsExpanded,
    openAccordion,
    closeAccordion,
    toggleExpanded,
    bodyContentRef,
    headerProps,
    bodyProps,
  };
};
