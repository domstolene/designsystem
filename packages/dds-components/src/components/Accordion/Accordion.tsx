import styles from './Accordion.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import {
  type AccordionConfig,
  AccordionContextProvider,
  useAccordion,
} from '../helpers/AccordionBase';

export type AccordionProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  Pick<AccordionConfig, 'isExpanded' | 'isInitiallyExpanded' | 'onChange'>
>;

export const Accordion = ({
  isInitiallyExpanded = false,
  isExpanded,
  onChange,
  id,
  children,
  className,
  style,
  htmlProps,
  ...rest
}: AccordionProps) => {
  const {
    id: accordionId,
    isExpanded: expanded,
    toggleExpanded,
    bodyContentRef,
    headerProps,
    bodyProps,
  } = useAccordion({ isInitiallyExpanded, isExpanded, onChange, id });

  return (
    <div
      {...getBaseHTMLProps(
        accordionId,
        cn(className, styles.container),
        style,
        htmlProps,
        rest,
      )}
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
};

Accordion.displayName = 'Accordion';
