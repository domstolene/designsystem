import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Tabs, TabList, Tab, TabsProps } from '.';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { TabPanel } from './TabPanel';
import { TabPanels } from './TabPanels';

export default {
  title: 'Design system/Tabs',
  component: Tabs,
  subcomponents: {
    TabList: TabList,
    Tab: Tab,
    TabPanel: TabPanel,
    TabPanels: TabPanels
  }
};

export const Overview = (args: TabsProps) => (
  <StoryTemplate title="Tabs - overview">
    <Tabs>
      <TabList>
        <Tab selected>Restriksjoner</Tab>
        <Tab>Aktører</Tab>
        <Tab>Aktører</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList>
        <Tab selected Icon={NotificationsOutlinedIcon}>
          Restriksjoner
        </Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Aktører</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Aktører</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList>
        <Tab selected Icon={NotificationsOutlinedIcon} direction="column">
          Restriksjoner
        </Tab>
        <Tab Icon={NotificationsOutlinedIcon} direction="column">
          Aktører
        </Tab>
        <Tab Icon={NotificationsOutlinedIcon} direction="column">
          Aktører
        </Tab>
      </TabList>
    </Tabs>
  </StoryTemplate>
);

export const Default = (args: TabsProps) => (
  <StoryTemplate title="Tabs - default">
    <Tabs {...args}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel> Innhold 1</TabPanel>
        <TabPanel> Innhold 2</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);
