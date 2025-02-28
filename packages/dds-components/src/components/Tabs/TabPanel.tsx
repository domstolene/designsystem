import styles from './Tabs.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';

export type TabPanelProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Spesifiserer om panelet skal vises basert på aktiv fane. */
    active?: boolean;
  }
>;

export const TabPanel = ({
  active = false,
  children,
  id,
  className,
  htmlProps,
  ...rest
}: TabPanelProps) => (
  <div
    {...getBaseHTMLProps(
      id,
      cn(className, styles['tab-panel'], focusable),
      htmlProps,
      rest,
    )}
    tabIndex={0}
    role="tabpanel"
    hidden={!active}
  >
    {children}
  </div>
);

TabPanel.displayName = 'TabPanel';
