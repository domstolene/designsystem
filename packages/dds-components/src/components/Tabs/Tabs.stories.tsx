import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  commonArgTypes,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { NotificationsIcon } from '../Icon/icons';
import { StoryVStack } from '../layout/Stack/utils';
import { Paragraph, Typography } from '../Typography';
import { TABS_SIZES } from './Tabs';

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

const tabList = (icon?: boolean) => {
  const tabIcon = icon ? NotificationsIcon : undefined;
  return (
    <TabList>
      <Tab icon={tabIcon}>Fane 1</Tab>
      <Tab icon={tabIcon}>Fane 2</Tab>
      <Tab icon={tabIcon}>Fane 3</Tab>
    </TabList>
  );
};

const tabPanels = (
  <TabPanels>
    <TabPanel>Innhold 1</TabPanel>
    <TabPanel>Innhold 2</TabPanel>
    <TabPanel>Innhold 3</TabPanel>
  </TabPanels>
);

export const Preview: Story = {
  render: args => (
    <Tabs {...args}>
      {tabList()}
      {tabPanels}
    </Tabs>
  ),
};

export const Direction: Story = {
  render: args => (
    <StoryVStack>
      <Tabs {...args}>{tabList(true)}</Tabs>
      <Tabs {...args} tabContentDirection="column">
        {tabList(true)}
      </Tabs>
    </StoryVStack>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack gap="x2.5">
      {TABS_SIZES.map(size => (
        <StoryVStack gap="x0.5" key={size}>
          <Typography as="span" typographyType="labelMedium">
            {labelText(size)}
          </Typography>
          <Tabs {...args} size={size}>
            {tabList()}
          </Tabs>
          <Tabs {...args} size={size}>
            {tabList(true)}
          </Tabs>
          <Tabs {...args} size={size} tabContentDirection="column">
            {tabList(true)}
          </Tabs>
        </StoryVStack>
      ))}
    </StoryVStack>
  ),
};

export const WithIcon: Story = {
  render: args => (
    <Tabs {...args}>
      {tabList(true)}
      {tabPanels}
    </Tabs>
  ),
};

export const ActiveTab: Story = {
  render: args => {
    const [activeTab, setActiveTab] = useState(1);
    return (
      <Tabs {...args} activeTab={activeTab} onChange={tab => setActiveTab(tab)}>
        {tabList()}
        {tabPanels}
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
      {tabList()}
      {tabPanels}
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
        {tabPanels}
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
      {tabList()}
      {tabPanels}
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: args => (
    <Tabs {...args} htmlProps={{ style: { width: '400px' } }}>
      <TabList>
        <Tab>Fane 1</Tab>
        <Tab>Fane 2</Tab>
        <Tab>Fane 3</Tab>
        <Tab>Fane 4</Tab>
        <Tab>Fane 5</Tab>
        <Tab>Fane 6</Tab>
        <Tab>Fane 7</Tab>
        <Tab>Fane 8</Tab>
        <Tab>Fane 9</Tab>
        <Tab>Fane 10</Tab>
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
