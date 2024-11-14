import { type Properties, type Property } from 'csstype';
import { forwardRef } from 'react';

import styles from './CardAccordion.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { useAccordionContext } from '../../helpers/AccordionBase';
import baseStyles from '../../helpers/AccordionBase/AccordionBase.module.css';

export type CardAccordionBodyProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Overskriver default padding. */
      padding?: Property.Padding<string>;
    }
  >,
  'id'
>;

export const CardAccordionBody = forwardRef<
  HTMLDivElement,
  CardAccordionBodyProps
>((props, ref) => {
  const { children, className, htmlProps, padding, ...rest } = props;

  const { bodyContentRef, bodyProps } = useAccordionContext();

  const { className: bodyContextCn, id, height, ...restBodyProps } = bodyProps;

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-card-accordion-body-height' as any]: height + 'px',
  };

  const contentStyleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-card-accordion-body-content-padding' as any]:
      padding ??
      'var(--dds-spacing-x1) calc(var(--dds-spacing-x2) + var(--dds-spacing-x0-75)) var(--dds-spacing-x2) var(--dds-spacing-x1-5)',
  };

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, baseStyles.body, styles.body, bodyContextCn),
        htmlProps,
        rest,
      )}
      ref={ref}
      {...restBodyProps}
      style={{ ...htmlProps?.style, ...styleVariables }}
    >
      <div
        ref={bodyContentRef}
        className={styles.body__content}
        style={contentStyleVariables}
      >
        {children}
      </div>
    </div>
  );
});

CardAccordionBody.displayName = 'CardAccordionBody';
