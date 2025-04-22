import { type HTMLAttributes, useEffect, useId, useRef, useState } from 'react';

import { type AddTabButtonProps } from './AddTabButton';
import { TabsContext } from './Tabs.context';
import styles from './Tabs.module.css';
import {
  type BaseComponentPropsWithChildren,
  type Direction,
  type Size,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Box, type ResponsiveProps } from '../layout';

export type TabSize = Extract<Size, 'small' | 'medium'>;

export type TabsProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Størrelse på hver `<Tab>`. */
    size?: TabSize;
    /** Indeksen til den aktive fanen. **OBS!** Ved å sette denne vil brukere aldri kunne endre tab uten at du også registrerer en `onChange`-lytter for å ta vare på aktiv tab utenfor komponenten. */
    activeTab?: number;
    /** Ekstra logikk ved endring av aktiv fane. */
    onChange?: (index: number) => void;
    /** Retningen ikon og tekst vises i `<Tab>`-elementer.
     * @default "row"
     */
    tabContentDirection?: Direction;
    /** Props for "Legg til fane"-knapp. Støtter native HTML attributter og `width`. */
    addTabButtonProps?: Omit<AddTabButtonProps, 'index'>;
  } & Pick<ResponsiveProps, 'width'>,
  Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>
>;

export const Tabs = ({
  id,
  activeTab,
  onChange,
  tabContentDirection = 'row',
  size = 'small',
  addTabButtonProps,
  width,
  children,
  className,
  htmlProps,
  ...rest
}: TabsProps) => {
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

  return (
    <TabsContext
      value={{
        tabsId: uniqueId,
        activeTab: thisActiveTab,
        size,
        handleTabChange,
        tabListRef,
        tabPanelsRef,
        hasTabFocus,
        setHasTabFocus,
        tabContentDirection,
        addTabButtonProps,
      }}
    >
      <Box
        {...getBaseHTMLProps(
          uniqueId,
          cn(className, styles.tabs),
          htmlProps,
          rest,
        )}
        width={width}
      >
        {children}
      </Box>
    </TabsContext>
  );
};

Tabs.displayName = 'Tabs';
