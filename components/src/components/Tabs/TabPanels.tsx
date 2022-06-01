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
    const { activeTab, tabsId, tabPanelsRef } = useTabsContext();
    const combinedRef = useCombinedRef(ref, tabPanelsRef);

    const panelChildren = Children.map(children, (child, index) => {
      const active = index === activeTab;
      return (
        isValidElement(child) &&
        cloneElement(child, {
          id: `${tabsId}-panel-${index}`,
          'aria-labelledby': `${tabsId}-tab-${index}`,
          active,
          'aria-expanded': active
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
