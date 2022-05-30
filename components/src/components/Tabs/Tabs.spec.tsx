import { render, screen } from '@testing-library/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '.';

describe('<Tabs />', () => {
  it('render tab elements', () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(screen.getByRole('tab')).toBeInTheDocument();
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
  it('render correct panel', () => {
    const tabText1 = 'Tab 1';
    const tabText2 = 'Tab 2';
    const tabPanelText1 = 'Panel 1';
    const tabPanelText2 = 'Panel 2';
    render(
      <Tabs>
        <TabList>
          <Tab>{tabText1}</Tab>
          <Tab>{tabText2}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel> {tabPanelText1} </TabPanel>
          <TabPanel> {tabPanelText2} </TabPanel>
        </TabPanels>
      </Tabs>
    );
    const tab1 = screen.getByText(tabText1);

    expect(screen.getByText(tabText1)).toBeInTheDocument();
    expect(screen.getByText('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
});
