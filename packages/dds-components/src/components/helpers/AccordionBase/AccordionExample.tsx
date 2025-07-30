import { type AccordionConfig, useAccordion } from './useAccordion';

export type AccordionProps = AccordionConfig;

export const AccordionExample = (props: AccordionProps) => {
  const { isExpanded, bodyContentRef, headerProps, bodyProps } = useAccordion({
    initiallyExpanded: props.initiallyExpanded,
  });
  const { height, ...restBodyProps } = bodyProps;

  return (
    <div>
      <p>Klikk knappen for å se effekten.</p>
      <p>
        <code>useAccordion(&#123;initiallyExpanded, id, onChange&#125;)</code>
      </p>
      <p>
        <code>useAccordion(&#123;{props.initiallyExpanded}&#125;)</code>
      </p>
      <button {...headerProps}>{isExpanded ? 'Skjul' : 'Vis'} innhold </button>
      <div style={{ height }} {...restBodyProps}>
        <div ref={bodyContentRef}>innhold</div>
      </div>
    </div>
  );
};
