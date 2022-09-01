import {
  forwardRef,
  useState,
  useEffect,
  ReactElement,
  Children as ReactChildren,
  cloneElement,
  isValidElement,
  useId,
} from 'react';
import styled from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';

const Wrapper = styled.div``;

export type CardAccordionProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Spesifiserer om body skal være utvidet ved innlastning. */
    isExpanded?: boolean;
  }
>;

export const CardAccordion = forwardRef<HTMLDivElement, CardAccordionProps>(
  (props, ref) => {
    const {
      isExpanded = false,
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
              bodyId,
            })
          : cloneElement(child as ReactElement, {
              isExpanded: expanded,
              id: bodyId,
              headerId,
            }))
      );
    });

    const wrapperProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref,
    };
    return <Wrapper {...wrapperProps}>{Children}</Wrapper>;
  }
);
