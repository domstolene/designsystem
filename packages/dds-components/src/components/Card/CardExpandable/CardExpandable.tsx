import styles from './CardExpandable.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import {
  AccordionContextProvider,
  useAccordion,
} from '../../helpers/AccordionBase';

export type CardExpandableProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Spesifiserer om body skal være utvidet ved innlastning. */
    isExpanded?: boolean;
    /**For å lytte til endringer i expanded-state. */
    onChange?: (expanded: boolean) => void;
  }
>;

export const CardExpandable = ({
  isExpanded = false,
  onChange,
  id,
  children,
  className,
  style,
  htmlProps,
  ...rest
}: CardExpandableProps) => {
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
      {...getBaseHTMLProps(
        accordionId,
        cn(className, styles['container']),
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

CardExpandable.displayName = 'CardExpandable';
