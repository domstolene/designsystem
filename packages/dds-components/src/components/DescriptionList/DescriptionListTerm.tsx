import { type ComponentPropsWithRef } from 'react';

export type DescriptionListTermProps = ComponentPropsWithRef<'dt'>;

export const DescriptionListTerm = (props: DescriptionListTermProps) => {
  return <dt {...props} />;
};

DescriptionListTerm.displayName = 'DescriptionListTerm';
