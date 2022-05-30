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
        <Tab>Logg</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList>
        <Tab selected Icon={NotificationsOutlinedIcon}>
          Restriksjoner
        </Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Aktører</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Logg</Tab>
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
          Logg
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
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel> Innhold 1</TabPanel>
        <TabPanel> Innhold 2</TabPanel>
        <TabPanel> Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);

export const ManyTabs = (args: TabsProps) => (
  <StoryTemplate title="Tabs - many tabs">
    <Tabs {...args}>
      <TabList>
        <Tab>Tab1</Tab>
        <Tab>Tab2</Tab>
        <Tab>Tab3</Tab>
        <Tab>Tab4</Tab>
        <Tab>Tab5</Tab>
        <Tab>Tab6</Tab>
        <Tab>Tab7</Tab>
        <Tab>Tab8</Tab>
      </TabList>
      <TabPanels>
        <TabPanel> Innhold 1</TabPanel>
        <TabPanel> Innhold 2</TabPanel>
        <TabPanel> Innhold 3</TabPanel>
        <TabPanel> Innhold 4</TabPanel>
        <TabPanel> Innhold 5</TabPanel>
        <TabPanel> Innhold 6</TabPanel>
        <TabPanel> Innhold 7</TabPanel>
        <TabPanel> Innhold 8</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);
