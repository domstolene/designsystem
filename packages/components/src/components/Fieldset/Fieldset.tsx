import { forwardRef } from 'react';

import styles from './Fieldset.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';

export type FieldsetProps = BaseComponentPropsWithChildren<
  HTMLFieldSetElement,
  {
    /** Om alle inputfelt skal bli `disabled`. */
    disabled?: boolean;
  }
>;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (props, ref) => {
    const { id, className, htmlProps, ...rest } = props;
    return (
      <fieldset
        ref={ref}
        {...getBaseHTMLProps(
          id,
          cn(className, styles.container),
          htmlProps,
          rest,
        )}
      />
    );
  },
);
