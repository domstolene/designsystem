import { AppShell as BaseAppShell, AppShellProps } from './AppShell';
import { NavigationItem } from './Navigation/NavigationItem';

type CompoundAppShell = typeof BaseAppShell & {
  NavItem: typeof NavigationItem;
};

const AppShell = BaseAppShell as CompoundAppShell;
AppShell.NavItem = NavigationItem;

export { AppShell, type AppShellProps };
