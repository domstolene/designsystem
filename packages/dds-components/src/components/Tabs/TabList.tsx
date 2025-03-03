import type * as CSS from 'csstype';
import {
  Children,
  type ComponentPropsWithRef,
  type FocusEvent,
  type ReactElement,
  cloneElement,
  isValidElement,
  useState,
} from 'react';

import { AddTabButton } from './AddTabButton';
import { type TabProps } from './Tab';
import { useTabsContext } from './Tabs.context';
import styles from './Tabs.module.css';
import { TabWidthContextProvider } from './TabWidthContext';
import { useCombinedRef, useRoveFocus } from '../../hooks';
import { cn, combineHandlers } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import { scrollbar } from '../helpers/styling/utilStyles.module.css';

export type TabListProps = ComponentPropsWithRef<'div'>;

export const TabList = ({
  children,
  id,
  style,
  onFocus,
  ref,
  ...rest
}: TabListProps) => {
  const {
    activeTab,
    tabsId,
    handleTabChange,
    tabListRef,
    hasTabFocus,
    setHasTabFocus,
    addTabButtonProps,
  } = useTabsContext();

  const uniqueId = id ?? `${tabsId}-tablist`;
  const childrenArray = Children.toArray(children).length;
  const [focus, setFocus] = useRoveFocus(childrenArray, hasTabFocus, 'row');
  const combinedRef = useCombinedRef(ref, tabListRef);

  const hasButton = addTabButtonProps ? true : false;

  const tabListChildren = Children
    ? Children.map(children, (child, index) => {
        const handleThisTabChange = () => {
          handleTabChange(index);
        };
        return (
          isValidElement<TabProps>(child) &&
          cloneElement(child as ReactElement<TabProps>, {
            id: `${tabsId}-tab-${index}`,
            htmlProps: {
              'aria-controls': `${tabsId}-panel-${index}`,
            },
            active: activeTab === index,
            index,
            focus: focus === index && hasTabFocus,
            setFocus,
            onClick: combineHandlers(handleThisTabChange, child.props.onClick),
          })
        );
      })
    : [];

  const [widths, setWidths] = useState<Array<CSS.Properties['width']>>([]);

  const handleOnFocus = (event: FocusEvent<HTMLDivElement, Element>) => {
    setHasTabFocus(true);
    onFocus && onFocus(event);
  };

  const handleOnBlur = (event: FocusEvent<HTMLDivElement, Element>) => {
    // Fjern tabIndex fra forrige tab med focus når focus flytter seg til `<TabList>`
    if (tabListRef?.current === event.relatedTarget) {
      setFocus(-1);
    }

    if (!tabListRef?.current?.contains(event.relatedTarget)) {
      setHasTabFocus(false);
    }
  };

  const customWidths: CSS.Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-tab-widths' as any]: widths.join(' '),
  };

  return (
    <TabWidthContextProvider onChangeWidths={setWidths}>
      <div
        {...rest}
        ref={combinedRef}
        role="tablist"
        id={uniqueId}
        tabIndex={0}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        className={cn(
          styles['tab-row'],
          !widths && styles['tab-row--standard-widths'],
          styles['tab-row--custom-widths'],
          focusable,
          scrollbar,
        )}
        style={{ ...style, ...customWidths }}
      >
        {tabListChildren}
        {hasButton && (
          <AddTabButton
            index={tabListChildren ? tabListChildren.length : 0}
            {...addTabButtonProps}
          />
        )}
      </div>
    </TabWidthContextProvider>
  );
};

TabList.displayName = 'TabList';
