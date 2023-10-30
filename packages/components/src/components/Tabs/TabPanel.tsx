import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import {
  focusVisibleTransitionValue,
  focusVisible,
} from '@norges-domstoler/dds-form';

import { tabsTokens as tokens } from './Tabs.tokens';

const { panel } = tokens;

type PanelProps = {
  active: boolean;
};

const Panel = styled.div<PanelProps>`
  padding: ${panel.padding};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${focusVisibleTransitionValue};
  }

  ${({ active }) =>
    !active &&
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
    const panelProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref,
      tabIndex: 0,
      role: 'tabpanel',
      active,
    };
    return <Panel {...panelProps}>{children}</Panel>;
  },
);

TabPanel.displayName = 'TabPanel';
