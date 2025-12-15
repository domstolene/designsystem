import { container } from './Fieldset.module.css';
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

export const Fieldset = ({
  id,
  className,
  style,
  htmlProps,
  ...rest
}: FieldsetProps) => (
  <fieldset
    {...getBaseHTMLProps(id, cn(className, container), style, htmlProps, rest)}
  />
);

Fieldset.displayName = 'Fieldset';
