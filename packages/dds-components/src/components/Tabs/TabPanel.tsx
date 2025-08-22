import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import { Box, type ResponsiveProps } from '../layout';

export type TabPanelProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Spesifiserer om panelet skal vises basert på aktiv fane. */
    active?: boolean;
    /** CSS `padding`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.
     * @default 'x0.25'
     */
    padding?: ResponsiveProps['padding'];
  }
>;

export const TabPanel = ({
  active = false,
  children,
  id,
  className,
  htmlProps,
  padding = 'x0.25',
  ...rest
}: TabPanelProps) => (
  <Box
    padding={padding}
    {...getBaseHTMLProps(id, cn(className, focusable), htmlProps, rest)}
    tabIndex={0}
    role="tabpanel"
    hidden={!active}
  >
    {children}
  </Box>
);

TabPanel.displayName = 'TabPanel';
