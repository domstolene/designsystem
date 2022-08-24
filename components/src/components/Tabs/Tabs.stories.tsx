import { StoryTemplate } from '../../storybook';
import { Tabs, TabList, Tab, TabsProps, TabPanel, TabPanels } from '.';
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { NotificationsIcon } from '../../icons/tsx';

export default {
  title: 'Design system/Tabs',
  component: Tabs,
  subcomponents: {
    TabList: TabList,
    Tab: Tab,
    TabPanel: TabPanel,
    TabPanels: TabPanels,
  },
  argTypes: {
    activeTab: {
      control: 'number',
    },
    tabWidth: {
      control: 'text',
    },
  },
} as Meta;

export const Overview: Story<TabsProps> = () => (
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
        <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
        <Tab icon={NotificationsIcon}>Aktører</Tab>
        <Tab icon={NotificationsIcon}>Logg</Tab>
      </TabList>
    </Tabs>
    <Tabs tabContentDirection="column">
      <TabList>
        <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
        <Tab icon={NotificationsIcon}>Aktører</Tab>
        <Tab icon={NotificationsIcon}>Logg</Tab>
      </TabList>
    </Tabs>
  </StoryTemplate>
);

export const Default: Story<TabsProps> = args => (
  <StoryTemplate title="Tabs - default">
    <Tabs {...args}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);

export const WithIcon: Story<TabsProps> = args => (
  <StoryTemplate title="Tabs - with icon">
    <Tabs {...args}>
      <TabList>
        <Tab icon={NotificationsIcon}>Tab 1</Tab>
        <Tab icon={NotificationsIcon}>Tab 2</Tab>
        <Tab icon={NotificationsIcon}>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);

export const ActiveTab: Story<TabsProps> = args => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <StoryTemplate title="Tabs - active tab">
      <Tabs {...args} activeTab={activeTab} onChange={tab => setActiveTab(tab)}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Innhold 1</TabPanel>
          <TabPanel>Innhold 2</TabPanel>
          <TabPanel>Innhold 3</TabPanel>
        </TabPanels>
      </Tabs>
    </StoryTemplate>
  );
};

export const TabWidth: Story<TabsProps> = args => (
  <StoryTemplate title="Tabs - tab width">
    <Tabs {...args} tabWidth="300px">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);

export const ManyTabs: Story<TabsProps> = args => (
  <StoryTemplate title="Tabs - many tabs">
    <Tabs {...args} htmlProps={{ style: { width: '400px' } }}>
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
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
        <TabPanel>Innhold 4</TabPanel>
        <TabPanel>Innhold 5</TabPanel>
        <TabPanel>Innhold 6</TabPanel>
        <TabPanel>Innhold 7</TabPanel>
        <TabPanel>Innhold 8</TabPanel>
        <TabPanel>Innhold 9</TabPanel>
        <TabPanel>Innhold 10</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>
);
