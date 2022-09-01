import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  Direction,
  getBaseHTMLProps,
} from '../../types';
import { TabsContext } from './Tabs.context';
import { Property } from 'csstype';

type ContainerProps = {
  width?: Property.Width;
};

const Container = styled.div<ContainerProps>`
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;

export type TabsProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til den aktive fanen. **OBS!** Ved å sette denne vil brukere aldri kunne endre tab uten at du også registrerer en `onChange`-lytter for å ta vare på aktiv tab utenfor komponenten. */
    activeTab?: number;
    /** Ekstra logikk ved endring av aktiv fane. */
    onChange?: (index: number) => void;
    /** Retningen ikon og tekst vises i `<Tab />`-elementer. */
    tabContentDirection?: Direction;
    /**Bredde for hele komponenten. */
    width?: Property.Width;
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
    width,
    children,
    className,
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

  useEffect(() => {
    if (activeTab && activeTab != thisActiveTab) {
      setActiveTab(activeTab);
    }
  }, [activeTab, thisActiveTab]);

  const containerProps = {
    ...getBaseHTMLProps(uniqueId, className, htmlProps, rest),
    ref,
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
      }}
    >
      <Container {...containerProps} width={width}>
        {children}
      </Container>
    </TabsContext.Provider>
  );
});
