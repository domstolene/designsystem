import { type HTMLAttributes, forwardRef } from 'react';

export type DescriptionListTermProps = HTMLAttributes<HTMLElement>;

export const DescriptionListTerm = forwardRef<
  HTMLElement,
  DescriptionListTermProps
>(({ ...rest }, ref) => {
  return <dt ref={ref} {...rest} />;
});

DescriptionListTerm.displayName = 'DescriptionListTerm';
