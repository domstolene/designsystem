import { type Properties, type Property } from 'csstype';
import {
  type HTMLAttributes,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { TabsContext } from './Tabs.context';
import styles from './Tabs.module.css';
import {
  type BaseComponentPropsWithChildren,
  type Direction,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';

export type TabsProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til den aktive fanen. **OBS!** Ved å sette denne vil brukere aldri kunne endre tab uten at du også registrerer en `onChange`-lytter for å ta vare på aktiv tab utenfor komponenten. */
    activeTab?: number;
    /** Ekstra logikk ved endring av aktiv fane. */
    onChange?: (index: number) => void;
    /** Retningen ikon og tekst vises i `<Tab>`-elementer.
     * @default "row"
     */
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

  const customWidth: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-tabs-width' as any]: width,
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
      <div
        ref={ref}
        {...getBaseHTMLProps(
          uniqueId,
          cn(className, styles.tabs),
          htmlProps,
          rest,
        )}
        style={{ ...htmlProps?.style, ...customWidth }}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
});

Tabs.displayName = 'Tabs';
