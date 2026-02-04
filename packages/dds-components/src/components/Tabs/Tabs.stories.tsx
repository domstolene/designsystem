import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { TABS_SIZES } from './Tabs';
import {
  StoryLabel,
  commonArgTypesWithNodeChildren,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { NotificationsIcon } from '../Icon/icons';
import { StoryVStack } from '../layout/Stack/utils';
import { Paragraph } from '../Typography';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '.';

export default {
  title: 'dds-components/Components/Tabs',
  component: Tabs,
  argTypes: {
    width: responsivePropsArgTypes.width,
    ...commonArgTypesWithNodeChildren,
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

export const Sizes: Story = {
  render: args => (
    <StoryVStack gap="x2.5">
      {TABS_SIZES.map(size => (
        <StoryVStack gap="x0.5" key={size}>
          <StoryLabel>{labelText(size)}</StoryLabel>
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
        <Paragraph withMargins>
          Legg til-knapp inkluderes direkte i fanerekka. Husk å begrense antall
          faner, slik at brukeren ikke kan legge til uendelig mange.
        </Paragraph>
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
  args: { width: '500px' },
  render: args => (
    <>
      <Paragraph withMargins>Bredde: {args.width?.toString()}</Paragraph>
      <Tabs {...args}>
        {tabList()}
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

export const DifferentWidths: Story = {
  render: args => (
    <>
      <Paragraph withMargins>
        Dette er et eksempel på hvordan du kan sette egne bredder på hver tab
        med <code>width</code>-attributtet. Det støttes de samme enhetene som i
        <code>grid-template-columns</code> i CSS.
      </Paragraph>
      <Tabs {...args}>
        <TabList>
          <Tab width="max-content">Fane 1</Tab>
          <Tab width="8rem">Fane 2</Tab>
          <Tab width="1fr">Fane 3</Tab>
        </TabList>
        {tabPanels}
      </Tabs>
    </>
  ),
};

export const TabOverflow: Story = {
  render: args => (
    <>
      <Paragraph withMargins>
        Hvis den totale bredden til fanene går utover tilgjengelig bredde vil
        horisontal scrollbar vises.
      </Paragraph>
      <Tabs {...args} style={{ width: '200px' }}>
        <TabList>
          <Tab>Fane 1</Tab>
          <Tab>Fane 2</Tab>
          <Tab>Fane 3</Tab>
          <Tab>Fane 4</Tab>
          <Tab>Fane 5</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Innhold 1</TabPanel>
          <TabPanel>Innhold 2</TabPanel>
          <TabPanel>Innhold 3</TabPanel>
          <TabPanel>Innhold 4</TabPanel>
          <TabPanel>Innhold 5</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  ),
};
