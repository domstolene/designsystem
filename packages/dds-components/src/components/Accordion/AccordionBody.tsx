import { type Properties } from 'csstype';

import styles from './Accordion.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { useAccordionContext } from '../helpers/AccordionBase';
import { Box } from '../layout';

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
      <Box ref={bodyContentRef} padding="x0.5 x1.5 x2 x1">
        {children}
      </Box>
    </div>
  );
};

AccordionBody.displayName = 'AccordionBody';
