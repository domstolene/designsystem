import {
  Children,
  type ComponentPropsWithRef,
  cloneElement,
  isValidElement,
} from 'react';

import { type TabPanelProps } from './TabPanel';
import { useTabsContext } from './Tabs.context';
import { useCombinedRef } from '../../hooks';

export type TabPanelsProps = ComponentPropsWithRef<'div'>;

export const TabPanels = ({ children, ref, ...rest }: TabPanelsProps) => {
  const { activeTab, tabsId, tabPanelsRef } = useTabsContext();
  const combinedRef = useCombinedRef(ref, tabPanelsRef);

  const panelChildren = Children.map(children, (child, index) => {
    const active = index === activeTab;
    return (
      isValidElement<TabPanelProps>(child) &&
      cloneElement(child, {
        id: `${tabsId}-panel-${index}`,
        active,
        htmlProps: {
          'aria-labelledby': `${tabsId}-tab-${index}`,
          'aria-expanded': active,
        },
      })
    );
  });

  return (
    <div ref={combinedRef} {...rest}>
      {panelChildren}
    </div>
  );
};

TabPanels.displayName = 'TabPanels';
