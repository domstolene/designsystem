import { forwardRef, HTMLAttributes, useRef, useState } from 'react';
import styled from 'styled-components';
import { Direction } from '../../types';
import { TabsContext } from './Tabs.context';
import { Property } from 'csstype';

const Container = styled.div``;

export type TabsProps = {
  /** Indeksen til den aktive fanen. */
  activeTab?: number;
  /** Ekstra logikk ved endring av aktiv fane. */
  onChange?: (index: number) => void;
  /** Retningen ikon og tekst vises i `<Tab />`-elementer. */
  tabContentDirection?: Direction;
  /**Custom bredde lik for alle `<Tab />`. */
  tabWidth?: Property.Width;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

let nextUniqueId = 0;

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      id,
      activeTab = 0,
      onChange,
      tabContentDirection = 'row',
      tabWidth = '150px',
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState(id ?? `tabs-${nextUniqueId++}`);

    const [thisActiveTab, setActiveTab] = useState(activeTab);
    const [hasTabFocus, setHasTabFocus] = useState(false);
    const tabListRef = useRef<HTMLDivElement>(null);
    const tabPanelsRef = useRef<HTMLDivElement>(null);

    const handleTabChange = (index: number) => {
      setActiveTab(index);
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
          activeTab: thisActiveTab,
          handleTabChange,
          tabListRef,
          tabPanelsRef,
          hasTabFocus,
          setHasTabFocus,
          tabContentDirection,
          tabWidth
        }}
      >
        <Container {...containerProps} />
      </TabsContext.Provider>
    );
  }
);
