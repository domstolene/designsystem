import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  commonArgTypes,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { NotificationsIcon } from '../Icon/icons';
import { StoryVStack } from '../layout/Stack/utils';
import { TextArea } from '../TextArea';
import { Paragraph } from '../Typography';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '.';

export default {
  title: 'dds-components/Components/Tabs',
  component: Tabs,
  argTypes: {
    width: responsivePropsArgTypes.width,
    ...commonArgTypes,
    addTabButtonProps: { control: false },
  },
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Preview: Story = {
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

export const Direction: Story = {
  render: args => (
    <StoryVStack>
      <Tabs {...args}>
        <TabList>
          <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
          <Tab icon={NotificationsIcon}>Aktører</Tab>
          <Tab icon={NotificationsIcon}>Logg</Tab>
        </TabList>
      </Tabs>
      <Tabs {...args} tabContentDirection="column">
        <TabList>
          <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
          <Tab icon={NotificationsIcon}>Aktører</Tab>
          <Tab icon={NotificationsIcon}>Logg</Tab>
        </TabList>
      </Tabs>
    </StoryVStack>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack>
      <Tabs {...args}>
        <TabList>
          <Tab>Restriksjoner</Tab>
          <Tab>Aktører</Tab>
          <Tab>Logg</Tab>
        </TabList>
      </Tabs>
      <Tabs {...args}>
        <TabList>
          <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
          <Tab icon={NotificationsIcon}>Aktører</Tab>
          <Tab icon={NotificationsIcon}>Logg</Tab>
        </TabList>
      </Tabs>
      <Tabs {...args} tabContentDirection="column">
        <TabList>
          <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
          <Tab icon={NotificationsIcon}>Aktører</Tab>
          <Tab icon={NotificationsIcon}>Logg</Tab>
        </TabList>
      </Tabs>
      <Tabs {...args} size="medium">
        <TabList>
          <Tab>Restriksjoner</Tab>
          <Tab>Aktører</Tab>
          <Tab>Logg</Tab>
        </TabList>
      </Tabs>
      <Tabs {...args} size="medium">
        <TabList>
          <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
          <Tab icon={NotificationsIcon}>Aktører</Tab>
          <Tab icon={NotificationsIcon}>Logg</Tab>
        </TabList>
      </Tabs>
      <Tabs {...args} size="medium" tabContentDirection="column">
        <TabList>
          <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
          <Tab icon={NotificationsIcon}>Aktører</Tab>
          <Tab icon={NotificationsIcon}>Logg</Tab>
        </TabList>
      </Tabs>
    </StoryVStack>
  ),
};

export const WithIcon: Story = {
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

export const WithAddTabButton: Story = {
  render: args => {
    const [tooManyText, setTooManyText] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    const [tabsState, setTabsState] = useState<
      Array<{
        name: string;
        content: string;
      }>
    >([
      { name: ' Tab 1', content: 'Innhold 1' },
      { name: ' Tab 2', content: 'Innhold 2' },
    ]);

    const addTab = () => {
      if (tabsState.length > 10) {
        setTooManyText('For mange faner 🥵');
      } else {
        const index = tabsState.length;
        const tabNumber = index + 1;
        setTabsState([
          ...tabsState,
          { name: `Tab ${tabNumber}`, content: `Innhold ${tabNumber}` },
        ]);
        setActiveTab(index);
      }
    };

    return (
      <>
        {tooManyText}
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={tab => setActiveTab(tab)}
          addTabButtonProps={{
            children: 'Legg til',
            'aria-label': 'Legg til ny fane',
            onClick: addTab,
          }}
        >
          <TabList>
            {tabsState.map(item => (
              <Tab key={item.name}>{item.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabsState.map(item => (
              <TabPanel key={item.name}>{item.content}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </>
    );
  },
};

export const WithWidth: Story = {
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

export const MaxContentWidth: Story = {
  render: args => (
    <>
      <Paragraph withMargins>
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
    </>
  ),
};

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: '500px',
      xl: '1000px',
    },
  },
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

export const TabLongNames: Story = {
  render: args => (
    <Tabs {...args}>
      <TabList>
        <Tab>Parter</Tab>
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
