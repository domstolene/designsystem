import {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  Direction,
  getBaseHTMLProps,
} from '../../types';
import { TabsContext } from './Tabs.context';
import { Property } from 'csstype';

const Container = styled.div``;

export type TabsProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til den aktive fanen. **OBS!** Ved å sette denne vil brukere aldri kunne endre tab uten at du også registrerer en `onChange`-lytter for å ta vare på aktiv tab utenfor komponenten. */
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

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    id,
    activeTab,
    onChange,
    tabContentDirection = 'row',
    tabWidth = '150px',
    children,
    className,
    htmlProps,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-tabs`;

  const [thisActiveTab, setActiveTab] = useState(activeTab || 0);
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
        tabWidth,
      }}
    >
      <Container {...containerProps}>{children}</Container>
    </TabsContext.Provider>
  );
});
