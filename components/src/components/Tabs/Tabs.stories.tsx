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
  },
  argTypes: {
    activeTab: {
      control: 'number'
    },
    tabWidth: {
      control: 'text'
    }
  }
};

export const Overview = (args: TabsProps) => (
  <StoryTemplate title="Tabs - overview">
    <Tabs>
      <TabList>
        <Tab>Restriksjoner</Tab>
        <Tab>Aktører</Tab>
        <Tab>Logg</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList>
        <Tab Icon={NotificationsOutlinedIcon}>Restriksjoner</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Aktører</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Logg</Tab>
      </TabList>
    </Tabs>
    <Tabs tabContentDirection="column">
      <TabList>
        <Tab Icon={NotificationsOutlinedIcon}>Restriksjoner</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Aktører</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Logg</Tab>
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

export const WithIcon = (args: TabsProps) => (
  <StoryTemplate title="Tabs - with icon">
    <Tabs {...args}>
      <TabList>
        <Tab Icon={NotificationsOutlinedIcon}>Tab 1</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Tab 2</Tab>
        <Tab Icon={NotificationsOutlinedIcon}>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel> Innhold 1</TabPanel>
        <TabPanel> Innhold 2</TabPanel>
        <TabPanel> Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);

export const ActiveTab = (args: TabsProps) => (
  <StoryTemplate title="Tabs - active tab">
    <Tabs {...args} activeTab={1}>
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

export const TabWidth = (args: TabsProps) => (
  <StoryTemplate title="Tabs - tab width">
    <Tabs {...args} tabWidth="300px">
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
        <Tab>Restriksjoner</Tab>
        <Tab>Tab3</Tab>
        <Tab>Aktører</Tab>
        <Tab>Tab5</Tab>
        <Tab>Restriksjoner</Tab>
        <Tab>Tab7</Tab>
        <Tab>Tab8</Tab>
        <Tab>Tab9</Tab>
        <Tab>Tab10</Tab>
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
        <TabPanel> Innhold 9</TabPanel>
        <TabPanel> Innhold 10</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);
