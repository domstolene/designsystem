import { type AccordionConfig, useAccordion } from './useAccordion';

export type AccordionProps = AccordionConfig;

export const AccordionExample = (props: AccordionProps) => {
  const { isExpanded, bodyContentRef, headerProps, bodyProps } = useAccordion({
    isInitiallyExpanded: props.isInitiallyExpanded,
  });
  const { height, ...restBodyProps } = bodyProps;

  return (
    <div>
      <p>Klikk knappen for å se effekten.</p>
      <p>
        <code>
          useAccordion(&#123;isInitiallyExpanded, isExpanded, id,
          onChange&#125;)
        </code>
      </p>
      <p>
        <code>useAccordion(&#123;{props.isInitiallyExpanded}&#125;)</code>
      </p>
      <button {...headerProps}>{isExpanded ? 'Skjul' : 'Vis'} innhold </button>
      <div style={{ height }} {...restBodyProps}>
        <div ref={bodyContentRef}>innhold</div>
      </div>
    </div>
  );
};
