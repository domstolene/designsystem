import { forwardRef } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  AccordionContextProvider,
  useAccordion,
} from '../../helpers/AccordionBase';

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

    const {
      id: accordionId,
      isExpanded: expanded,
      toggleExpanded,
      bodyContentRef,
      headerProps,
      bodyProps,
    } = useAccordion({ initiallyExpanded: isExpanded, onChange, id });

    return (
      <div
        {...getBaseHTMLProps(accordionId, className, htmlProps, rest)}
        ref={ref}
      >
        <AccordionContextProvider
          headerProps={headerProps}
          bodyProps={bodyProps}
          isExpanded={expanded}
          toggleExpanded={toggleExpanded}
          bodyContentRef={bodyContentRef}
        >
          {children}
        </AccordionContextProvider>
      </div>
    );
  },
);

CardAccordion.displayName = 'CardAccordion';
