import {
  forwardRef,
  HTMLAttributes,
  Children,
  isValidElement,
  cloneElement,
  useState
} from 'react';
import styled from 'styled-components';
import { tabsTokens as tokens } from './Tabs.tokens';
import { useCombinedRef, useRoveFocus } from '../../hooks';
import { useTabsContext } from './Tabs.context';
import { Property } from 'csstype';

const TabRow = styled.div`
  ${tokens.tabList.base}
  &:focus-visible {
    ${tokens.tabList.focus.base}
  }
`;

export type TabListProps = {
  /**Custom bredde lik for alle `<Tab />`. */
  width?: Property.Width;
} & HTMLAttributes<HTMLDivElement>;

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, id, width, ...rest }, ref) => {
    const { selectedTab, tabsId, handleTabChange, tabListRef } =
      useTabsContext();

    const [uniqueId] = useState<string>(id ?? `${tabsId}-tablist`);
    const childrenArray = Children.toArray(children).length;
    const [focus, setFocus] = useRoveFocus(childrenArray, undefined, 'row');
    const combinedRef = useCombinedRef(ref, tabListRef);

    const tabListChildren = Children.map(children, (child, index) => {
      return (
        isValidElement(child) &&
        cloneElement(child, {
          id: `${tabsId}-tab-${index}`,
          'aria-controls': `${tabsId}-panel-${index}`,
          selected: selectedTab === index,
          index,
          focus: focus === index,
          setFocus,
          width,
          onClick: () => handleTabChange(index)
        })
      );
    });

    const tabListProps = {
      ref: combinedRef,
      role: 'tablist',
      id: uniqueId,
      tabIndex: 0,
      ...rest
    };

    return <TabRow {...tabListProps}>{tabListChildren}</TabRow>;
  }
);
