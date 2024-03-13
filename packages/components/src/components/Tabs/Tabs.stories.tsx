import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { NotificationsIcon } from '../Icon/icons';
import { VStack } from '../Stack';
import { TextArea } from '../TextArea';
import { Paragraph } from '../Typography';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '.';

export default {
  title: 'dds-components/Tabs',
  component: Tabs,
  subcomponents: {
    TabList: TabList,
    Tab: Tab,
    TabPanel: TabPanel,
    TabPanels: TabPanels,
  },
  argTypes: {
    width: { control: 'text' },
    htmlProps: { control: false },
    activeTab: { control: 'number' },
  },
};

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
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
  ),
};

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => (
    <>
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
    </>
  ),
};

export const WithIcon: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
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
  ),
};

export const ActiveTab: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [activeTab, setActiveTab] = useState(1);
    return (
      <Tabs {...args} activeTab={activeTab} onChange={tab => setActiveTab(tab)}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <span>Innhold 1</span>
            <TextArea label="test" />
          </TabPanel>
          <TabPanel>Innhold 2</TabPanel>
          <TabPanel>Innhold 3</TabPanel>
        </TabPanels>
      </Tabs>
    );
  },
};

export const WithWidth: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Tabs {...args} width="500px">
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
  ),
};

export const TabLongNames: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Tabs {...args}>
      <TabList>
        <Tab>Partsopplysninger</Tab>
        <Tab>Restriksjoner</Tab>
        <Tab>Vedlegg</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
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
  ),
};

export const MaxContentWidth: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <VStack align="flex-start" gap="x1">
        <Paragraph>
          Dette er et eksempel på hvordan du kan sette egne bredder på hver tab.
          Her er alle tabs satt til å ha bredde "<code>max-content</code>".
        </Paragraph>
        <Tabs {...args} htmlProps={{ style: { width: '400px' } }}>
          <TabList>
            <Tab width="max-content">Aktører</Tab>
            <Tab width="max-content">Restriksjoner</Tab>
            <Tab width="max-content">Vedlegg</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Innhold 1</TabPanel>
            <TabPanel>Innhold 2</TabPanel>
            <TabPanel>Innhold 3</TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  ),
};
