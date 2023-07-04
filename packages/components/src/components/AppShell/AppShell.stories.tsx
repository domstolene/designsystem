import { ComponentProps } from 'react';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { AppShell } from '.';
import {
  BarChartIcon,
  ChecklistIcon,
  FolderIcon,
  GavelIcon,
} from '@norges-domstoler/dds-icons';

export default {
  title: 'dds-components/AppShell',
  component: AppShell,
};

export const Default = (args: ComponentProps<typeof AppShell>) => (
  <StoryTemplate title="AppShell - default">
    <AppShell
      version="1.0.0"
      {...args}
      navigation={{
        internal: [
          <AppShell.NavItem active href="#" icon={FolderIcon}>
            Saker
          </AppShell.NavItem>,
          <AppShell.NavItem href="#" icon={ChecklistIcon}>
            Oppgaver
          </AppShell.NavItem>,
          <AppShell.NavItem href="#" icon={GavelIcon}>
            Avgjørelser
          </AppShell.NavItem>,
          <AppShell.NavItem href="#" icon={BarChartIcon}>
            Statistikk
          </AppShell.NavItem>,
        ],
        external: [
          <AppShell.NavItem href="#" external>
            Saker
          </AppShell.NavItem>,
          <AppShell.NavItem href="#" external>
            Oppgaver
          </AppShell.NavItem>,
          <AppShell.NavItem href="#" external>
            Avgjørelser
          </AppShell.NavItem>,
          <AppShell.NavItem href="#" external>
            Statistikk
          </AppShell.NavItem>,
        ],
      }}
    />
  </StoryTemplate>
);
