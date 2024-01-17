import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { tabsTokens as tokens } from './Tabs.tokens';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { focusVisible, focusVisibleTransitionValue } from '../helpers';

const { panel } = tokens;

interface PanelProps {
  $active: boolean;
}

const Panel = styled.div<PanelProps>`
  padding: ${panel.padding};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${focusVisibleTransitionValue};
  }

  ${({ $active }) =>
    !$active &&
    css`
      display: none;
    `}
  &:focus-visible {
    ${focusVisible}
  }
`;

export type TabPanelProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Spesifiserer om panelet skal vises basert på aktiv fane. */
    active?: boolean;
  }
>;

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ active = false, children, id, className, htmlProps, ...rest }, ref) => {
    return (
      <Panel
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        tabIndex={0}
        role="tabpanel"
        $active={active}
      >
        {children}
      </Panel>
    );
  },
);

TabPanel.displayName = 'TabPanel';
