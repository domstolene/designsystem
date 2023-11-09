import styled, { css } from 'styled-components';
import {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import {
  BaseComponentPropsWithChildren,
  Direction,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { TabsContext } from './Tabs.context';
import { Property } from 'csstype';

interface ContainerProps {
  width?: Property.Width;
}

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

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    id,
    activeTab,
    onChange,
    tabContentDirection = 'row',
    width,
    children,
    className,
    htmlProps,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-tabs`;

  const [thisActiveTab, setActiveTab] = useState(activeTab ?? 0);
  const [hasTabFocus, setHasTabFocus] = useState(false);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabPanelsRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    onChange && onChange(index);
  };

  useEffect(() => {
    if (activeTab !== undefined && activeTab !== thisActiveTab) {
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

Tabs.displayName = 'Tabs';
