import { ReactNode, createContext, useContext } from 'react';

interface CardAccordionContext {
  headerId: string;
  bodyId: string;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const CardAccordionContext = createContext<Partial<CardAccordionContext>>({});

export const CardAccordionContextProvider = ({
  children,
  ...values
}: CardAccordionContext & { children: ReactNode }) => {
  return (
    <CardAccordionContext.Provider value={values}>
      {children}
    </CardAccordionContext.Provider>
  );
};

export const useCardAccordionContext = (): CardAccordionContext => {
  const context = useContext(CardAccordionContext);

  if (!context) {
    throw new Error(
      'useCardAccordionContext must be used within a CardAccordionContextProvider. Have you wrapped <CardAccordionHeader> and <CardAccordionBody> inside a <CardAccordion>?',
    );
  }

  return context as CardAccordionContext;
};
