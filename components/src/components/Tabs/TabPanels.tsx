import {
  forwardRef,
  HTMLAttributes,
  Children,
  cloneElement,
  isValidElement
} from 'react';
import { useCombinedRef } from '../../hooks';
import { useTabsContext } from './Tabs.context';

export type TabPanelsProps = HTMLAttributes<HTMLDivElement>;

export const TabPanels = forwardRef<HTMLDivElement, TabPanelsProps>(
  ({ children, ...rest }, ref) => {
    const { selectedTab, tabsId, tabPanelsRef } = useTabsContext();
    const combinedRef = useCombinedRef(ref, tabPanelsRef);

    const panelChildren = Children.map(children, (child, index) => {
      const selected = index === selectedTab;
      return (
        isValidElement(child) &&
        cloneElement(child, {
          id: `${tabsId}-panel-${index}`,
          'aria-labelledby': `${tabsId}-tab-${index}`,
          selected,
          'aria-expanded': selected
        })
      );
    });

    return (
      <div ref={combinedRef} {...rest}>
        {panelChildren}
      </div>
    );
  }
);
