import {
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from 'react';

export type ElementAsProps = {
  as: ElementType;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const ElementAs = forwardRef<HTMLElement, ElementAsProps>(
  (props, ref) => {
    const { as, children, ...rest } = props;
    const As = as;
    return (
      <As ref={ref} {...rest}>
        {children}
      </As>
    );
  },
);
