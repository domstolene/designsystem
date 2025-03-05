import {
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
} from 'react';

import {
  type AccordionBodyProps,
  type AccordionHeaderProps,
} from './useAccordion';
import { isEmpty } from '../../../utils';

interface AccordionContext {
  headerProps: AccordionHeaderProps;
  bodyProps: AccordionBodyProps;
  isExpanded: boolean;
  toggleExpanded: () => void;
  bodyContentRef: RefObject<HTMLDivElement | null>;
}

const AccordionContext = createContext<Partial<AccordionContext>>({});

export const AccordionContextProvider = ({
  children,
  ...values
}: AccordionContext & { children: ReactNode }) => {
  return <AccordionContext value={values}>{children}</AccordionContext>;
};

export const useAccordionContext = (): Partial<AccordionContext> => {
  const context = useContext(AccordionContext);
  if (isEmpty(context)) {
    throw new Error(
      'useAccordionContext must be used within a AccordionContextProvider. Have you wrapped <AccordionHeader> and <AccordionBody> inside a <Accordion>, or <CardAccordionHeader> and <CardAccordionBody> inside a <CardAccordion>?',
    );
  }

  return context;
};
