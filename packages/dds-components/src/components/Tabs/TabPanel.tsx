import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import { Box } from '../layout';

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
  <Box
    padding="x0.25"
    {...getBaseHTMLProps(id, cn(className, focusable), htmlProps, rest)}
    tabIndex={0}
    role="tabpanel"
    hidden={!active}
  >
    {children}
  </Box>
);

TabPanel.displayName = 'TabPanel';
