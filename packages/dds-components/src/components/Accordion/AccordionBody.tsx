import { type Properties } from 'csstype';

import styles from './Accordion.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { useAccordionContext } from '../helpers/AccordionBase';

export type AccordionBodyProps = Omit<
  BaseComponentPropsWithChildren<HTMLDivElement>,
  'id'
>;

export const AccordionBody = ({
  children,
  className,
  htmlProps,
  ...rest
}: AccordionBodyProps) => {
  const { bodyContentRef, bodyProps } = useAccordionContext();

  const {
    className: bodyContextCn,
    id,
    height,
    ...restBodyProps
  } = bodyProps ?? {};

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-card-accordion-body-height' as any]: height + 'px',
  };

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles.body, bodyContextCn),
        htmlProps,
        rest,
      )}
      {...restBodyProps}
      style={{ ...htmlProps?.style, ...styleVariables }}
    >
      <div ref={bodyContentRef} className={styles.body__content}>
        {children}
      </div>
    </div>
  );
};

AccordionBody.displayName = 'AccordionBody';
