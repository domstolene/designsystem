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
  style,
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

  return (
    <Box
      height={`${height}px`}
      {...getBaseHTMLProps(
        id,
        cn(className, bodyContextCn),
        style,
        htmlProps,
        rest,
      )}
      {...restBodyProps}
    >
      <Box ref={bodyContentRef} padding="x0.5 x1.5 x2 x1">
        {children}
      </Box>
    </Box>
  );
};

AccordionBody.displayName = 'AccordionBody';
