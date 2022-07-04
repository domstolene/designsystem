import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { focusVisibleTransitionValue } from '../../helpers/styling';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { tabsTokens as tokens } from './Tabs.tokens';

type PanelProps = {
  active: boolean;
};

const Panel = styled.div<PanelProps>`
  transition: ${focusVisibleTransitionValue};
  ${tokens.panel.base}
  ${({ active }) =>
    !active &&
    css`
      display: none;
    `}
    &:focus-visible {
    ${tokens.panel.focusVisible.base}
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
      active
    };
    return <Panel {...panelProps}>{children}</Panel>;
  }
);
