import { forwardRef, useCallback, useEffect, useId, useState } from 'react';

import { CardAccordionContextProvider } from './CardAccordionContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';

export type CardAccordionProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Spesifiserer om body skal være utvidet ved innlastning. */
    isExpanded?: boolean;
    /**For å lytte til endringer i expanded-state. */
    onChange?: (expanded: boolean) => void;
  }
>;

export const CardAccordion = forwardRef<HTMLDivElement, CardAccordionProps>(
  (props, ref) => {
    const {
      isExpanded = false,
      onChange,
      id,
      children,
      className,
      htmlProps,
      ...rest
    } = props;

    const [expanded, setExpanded] = useState(isExpanded);

    const generatedId = useId();
    const accordionId = id ?? `${generatedId}-cardAccordion`;

    useEffect(() => {
      setExpanded(isExpanded);
    }, [isExpanded]);

    const toggleExpanded = useCallback(() => {
      setExpanded(prevExpanded => {
        const newExpanded = !prevExpanded;

        if (onChange) {
          onChange(newExpanded);
        }

        return newExpanded;
      });
    }, [onChange]);

    return (
      <div {...getBaseHTMLProps(id, className, htmlProps, rest)} ref={ref}>
        <CardAccordionContextProvider
          headerId={`${accordionId}-header`}
          bodyId={`${accordionId}-body`}
          isExpanded={expanded}
          toggleExpanded={toggleExpanded}
        >
          {children}
        </CardAccordionContextProvider>
      </div>
    );
  },
);

CardAccordion.displayName = 'CardAccordion';
