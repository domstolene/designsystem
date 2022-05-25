import { forwardRef, HTMLAttributes, useRef, useState } from 'react';
import styled from 'styled-components';
import { TabsContext } from './Tabs.context';

const Container = styled.div``;

export type TabsProps = {
  /** Indeksen til den aktive fanen. */
  selectedTab?: number;
  /** Ekstra logikk ved endring av aktiv fane. */
  onChange?: (index: number) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

let nextUniqueId = 0;

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ id, selectedTab = 0, onChange, ...rest }, ref) => {
    const [uniqueId] = useState(id ?? `tabs-${nextUniqueId++}`);

    const [thisSelectedTab, setSelectedTab] = useState(selectedTab);
    const tabListRef = useRef<HTMLDivElement>(null);
    const tabPanelsRef = useRef<HTMLDivElement>(null);

    const handleTabChange = (index: number) => {
      setSelectedTab(index);
      onChange && onChange(index);
    };

    const containerProps = {
      ref,
      id: uniqueId,
      ...rest
    };
    return (
      <TabsContext.Provider
        value={{
          tabsId: uniqueId,
          selectedTab: thisSelectedTab,
          handleTabChange,
          tabListRef,
          tabPanelsRef
        }}
      >
        <Container {...containerProps} />
      </TabsContext.Provider>
    );
  }
);
