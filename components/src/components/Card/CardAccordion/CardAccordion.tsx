import {
  forwardRef,
  useState,
  useEffect,
  ReactElement,
  HTMLAttributes,
  Children as ReactChildren,
  cloneElement,
  isValidElement
} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export type CardAccordionProps = {
  /**Spesifiserer om body skal være utvidet ved innlastning. */
  isExpanded?: boolean;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueId = 0;

export const CardAccordion = forwardRef<HTMLDivElement, CardAccordionProps>(
  ({ isExpanded = false, id, children, ...rest }, ref) => {
    const [expanded, setExpanded] = useState(isExpanded);

    const uniqueId = nextUniqueId++;
    const [accordionId] = useState<string>(id ?? `cardAccordion-${uniqueId}`);

    useEffect(() => {
      setExpanded(isExpanded);
    }, [isExpanded]);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    const Children = ReactChildren.map(children, (child, childIndex) => {
      const headerId = `${accordionId}-header`;
      const bodyId = `${accordionId}-body`;

      return (
        isValidElement(child) &&
        (childIndex === 0
          ? cloneElement(child as ReactElement, {
              isExpanded: expanded,
              toggleExpanded,
              id: headerId,
              bodyId
            })
          : cloneElement(child as ReactElement, {
              isExpanded: expanded,
              id: bodyId,
              headerId
            }))
      );
    });

    const props = {
      ref,
      ...rest
    };
    return <Wrapper {...props}>{Children}</Wrapper>;
  }
);
