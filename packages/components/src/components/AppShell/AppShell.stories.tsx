import { type Meta, type StoryObj } from '@storybook/react';

import {
  BarChartIcon,
  ChecklistIcon,
  FolderIcon,
  GavelIcon,
} from '../Icon/icons';

import { AppShell } from '.';

export default {
  title: 'dds-components/AppShell',
  component: AppShell,
  argTypes: {
    title: { control: 'text' },
    version: { control: 'text' },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourseState: 'shown' },
    },
  },
} satisfies Meta<typeof AppShell>;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  args: {
    title: 'Lovisa',
    version: '1.0.0',
    user: {
      embete: { name: 'Borgarting Lagmannsrett', type: 'høyesterett' },
      name: 'Kari Nordmann',
    },
    environment: 'PROD',
    userMenuItems: [{ title: 'Bytt embete' }, { title: 'Logg ut' }],
    navigation: {
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
    },
  },
};
