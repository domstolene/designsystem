import { forwardRef, HTMLAttributes, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  Direction,
  getBaseHTMLProps
} from '../../types';
import { TabsContext } from './Tabs.context';
import { Property } from 'csstype';

const Container = styled.div``;

export type TabsProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til den aktive fanen. */
    activeTab?: number;
    /** Ekstra logikk ved endring av aktiv fane. */
    onChange?: (index: number) => void;
    /** Retningen ikon og tekst vises i `<Tab />`-elementer. */
    tabContentDirection?: Direction;
    /**Custom bredde lik for alle `<Tab />`. */
    tabWidth?: Property.Width;
  },
  Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>
>;

let nextUniqueId = 0;

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    id,
    activeTab = 0,
    onChange,
    tabContentDirection = 'row',
    tabWidth = '150px',
    children,
    htmlProps,
    ...rest
  } = props;

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
    ...getBaseHTMLProps(id, htmlProps, rest),
    ref,
    id: uniqueId
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
      <Container {...containerProps}>{children}</Container>
    </TabsContext.Provider>
  );
});
