import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';

type VisuallyHiddenDivProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  { as: 'div' }
>;

type VisuallyHiddenSpanProps = BaseComponentPropsWithChildren<
  HTMLSpanElement,
  {
    /**Spesifiserer hvilken HTML tag skal returneres. */
    as: 'span';
  }
>;

export type VisuallyHiddenProps =
  | VisuallyHiddenSpanProps
  | VisuallyHiddenDivProps;

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
  const { id, className, htmlProps, as, ...rest } = props;

  const cl = cn(className, utilStyles['visually-hidden']);

  if (as === 'div') {
    return <div {...getBaseHTMLProps(id, cl, htmlProps, rest)} />;
  }
  return <span {...getBaseHTMLProps(id, cl, htmlProps, rest)} />;
};

VisuallyHidden.displayName = 'VisuallyHidden';
