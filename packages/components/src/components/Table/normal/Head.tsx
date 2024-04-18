import {
  type HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
} from 'react';

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const Head = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...rest }, ref) => {
    return (
      <thead ref={ref} {...rest}>
        <HeadContext.Provider value={true}>{children}</HeadContext.Provider>
      </thead>
    );
  },
);

Head.displayName = 'Table.Head';

const HeadContext = createContext(false);

export function useIsInTableHead(): boolean {
  const isInTableHead = useContext(HeadContext);
  return isInTableHead;
}
