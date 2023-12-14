import { forwardRef, useState, useEffect, useId, useCallback } from 'react';
import styled from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { CardAccordionContextProvider } from './CardAccordionContext';

const Wrapper = styled.div``;

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
      <Wrapper {...getBaseHTMLProps(id, className, htmlProps, rest)} ref={ref}>
        <CardAccordionContextProvider
          headerId={`${accordionId}-header`}
          bodyId={`${accordionId}-body`}
          isExpanded={expanded}
          toggleExpanded={toggleExpanded}
        >
          {children}
        </CardAccordionContextProvider>
      </Wrapper>
    );
  },
);

CardAccordion.displayName = 'CardAccordion';
