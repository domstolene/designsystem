import {
  forwardRef,
  HTMLAttributes,
  Children,
  isValidElement,
  cloneElement,
  useState,
  FocusEvent
} from 'react';
import styled from 'styled-components';
import { tabsTokens as tokens } from './Tabs.tokens';
import {
  useCombinedRef,
  useOnClickOutside,
  useOnKeyDown,
  useRoveFocus
} from '../../hooks';
import { useTabsContext } from './Tabs.context';
import scrollbarStyling from '../../helpers/scrollbarStyling';

const TabRow = styled.div`
  ${tokens.tabList.base}
  ${scrollbarStyling}
  scroll-snap-type: x mandatory;
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
  &:focus-visible {
    ${tokens.tabList.focus.base}
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
      tabPanelsRef,
      setHasTabFocus,
      tabWidth
    } = useTabsContext();

    const [uniqueId] = useState<string>(id ?? `${tabsId}-tablist`);
    const childrenArray = Children.toArray(children).length;
    const [focus, setFocus] = useRoveFocus(childrenArray, !hasTabFocus, 'row');
    const combinedRef = useCombinedRef(ref, tabListRef);

    const tabListChildren = Children.map(children, (child, index) => {
      return (
        isValidElement(child) &&
        cloneElement(child, {
          id: `${tabsId}-tab-${index}`,
          'aria-controls': `${tabsId}-panel-${index}`,
          active: activeTab === index,
          index,
          focus: focus === index && hasTabFocus,
          setFocus,
          onClick: () => handleTabChange(index)
        })
      );
    });

    useOnKeyDown('Tab', () => {
      setHasTabFocus(false);
      tabPanelsRef?.current?.focus();
    });

    useOnClickOutside((tabListRef?.current as HTMLElement) || null, () => {
      setHasTabFocus(false);
    });

    const handleOnFocus = (event: FocusEvent<HTMLDivElement, Element>) => {
      setHasTabFocus(true);
      onFocus && onFocus(event);
    };

    const tabListProps = {
      ref: combinedRef,
      role: 'tablist',
      'aria-label': 'Bruk venste og høyre piltast for å bla',
      id: uniqueId,
      tabIndex: 0,
      onFocus: handleOnFocus,
      ...rest
    };

    return <TabRow {...tabListProps}>{tabListChildren}</TabRow>;
  }
);
