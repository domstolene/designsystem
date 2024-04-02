import type * as CSS from 'csstype';
import {
  Children,
  type FocusEvent,
  type HTMLAttributes,
  type ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import { useTabsContext } from './Tabs.context';
import { tabsTokens as tokens } from './Tabs.tokens';
import { TabWidthContextProvider } from './TabWidthContext';
import { useCombinedRef, useRoveFocus } from '../../hooks';
import { focusVisible, focusVisibleTransitionValue } from '../helpers';
import { scrollbarStyling } from '../ScrollableContainer';

const { tabList } = tokens;

const autoFlow = css`
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

const templateColumns = (templateColumns: string) => css`
  grid-template-columns: ${templateColumns};
`;

const TabRow = styled.div<{ $gridTemplateColumns: string }>`
  border-bottom: ${tabList.borderBottom};
  display: grid;
  ${({ $gridTemplateColumns }) =>
    $gridTemplateColumns === ''
      ? autoFlow
      : templateColumns($gridTemplateColumns)}
  overflow-x: auto;
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}
  scroll-snap-type: x mandatory;
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
    transition: ${focusVisibleTransitionValue};
  }
  &:focus-visible {
    ${focusVisible}
  }
  &:focus-visible button {
    outline: none;
  }
`;

export type TabListProps = HTMLAttributes<HTMLDivElement>;

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, id, onFocus, ...rest }, ref) => {
    const {
      activeTab,
      tabsId,
      handleTabChange,
      tabListRef,
      hasTabFocus,
      setHasTabFocus,
    } = useTabsContext();

    const uniqueId = id ?? `${tabsId}-tablist`;
    const childrenArray = Children.toArray(children).length;
    const [focus, setFocus] = useRoveFocus(childrenArray, hasTabFocus, 'row');
    const combinedRef = useCombinedRef(ref, tabListRef);

    const tabListChildren = Children.map(children, (child, index) => {
      return (
        isValidElement(child) &&
        cloneElement(child as ReactElement, {
          id: `${tabsId}-tab-${index}`,
          'aria-controls': `${tabsId}-panel-${index}`,
          active: activeTab === index,
          index,
          focus: focus === index && hasTabFocus,
          setFocus,
          onClick: () => handleTabChange(index),
        })
      );
    });

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

    return (
      <TabWidthContextProvider onChangeWidths={setWidths}>
        <TabRow
          {...rest}
          ref={combinedRef}
          role="tablist"
          id={uniqueId}
          tabIndex={0}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          $gridTemplateColumns={widths.join(' ')}
        >
          {tabListChildren}
        </TabRow>
      </TabWidthContextProvider>
    );
  },
);

TabList.displayName = 'TabList';
