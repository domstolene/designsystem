import { type ComponentPropsWithRef, createContext, useContext } from 'react';

export type TableHeadProps = ComponentPropsWithRef<'thead'>;

export const Head = ({ children, ...rest }: TableHeadProps) => (
  <thead {...rest}>
    <HeadContext value={true}>{children}</HeadContext>
  </thead>
);

const HeadContext = createContext(false);

export function useIsInTableHead(): boolean {
  const isInTableHead = useContext(HeadContext);
  return isInTableHead;
}
