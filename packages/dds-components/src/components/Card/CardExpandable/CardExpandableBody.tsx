import { type Property } from 'csstype';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { useAccordionContext } from '../../helpers/AccordionBase';
import baseStyles from '../../helpers/AccordionBase/AccordionBase.module.css';
import { Box } from '../../layout';

export type CardExpandableBodyProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Overskriver default padding. */
      padding?: Property.Padding<string>;
    }
  >,
  'id'
>;

export const CardExpandableBody = ({
  children,
  className,
  style,
  htmlProps,
  padding,
  ...rest
}: CardExpandableBodyProps) => {
  const { bodyContentRef, bodyProps } = useAccordionContext();

  const {
    className: bodyContextCn,
    id,
    height,
    ...restBodyProps
  } = bodyProps ?? {};

  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(className, baseStyles.body, bodyContextCn),
        style,
        htmlProps,
        rest,
      )}
      {...restBodyProps}
      height={`${height}px`}
    >
      <Box
        padding={
          padding ??
          'var(--dds-spacing-x1) calc(var(--dds-spacing-x2) + var(--dds-spacing-x0-75)) var(--dds-spacing-x2) var(--dds-spacing-x1-5)'
        }
        ref={bodyContentRef}
      >
        {children}
      </Box>
    </Box>
  );
};

CardExpandableBody.displayName = 'CardExpandableBody';
