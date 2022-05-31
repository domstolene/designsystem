import { render, screen, fireEvent } from '@testing-library/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '.';

describe('<Tabs />', () => {
  it('renders elements with correct tab related roles', () => {
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

  it('renders 3 tabs in a tablist', () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.queryAllByRole('tab')).toHaveLength(3);
  });

  it('set aria-expanded=true for open panel and false for closed panels onChange', () => {
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

    const tab2 = screen.getByText(tabText2);
    const tabPanel1 = screen.getByText(tabPanelText1);
    const tabPanel2 = screen.getByText(tabPanelText2);

    expect(tabPanel1).toHaveAttribute('aria-expanded', 'true');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(tab2);
    expect(tabPanel1).toHaveAttribute('aria-expanded', 'false');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'true');
  });

  it('first tab should have aria-selected on render', () => {
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
    const tab1 = screen.getAllByRole('tab')[0];
    const tab2 = screen.getAllByRole('tab')[1];
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
  });

  it('tab should get aria-selected onClick', () => {
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

    const tab1 = screen.getAllByRole('tab')[0];
    const tab2 = screen.getAllByRole('tab')[1];

    fireEvent.click(tab2);
    expect(tab1).toHaveAttribute('aria-selected', 'false');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  it('tabs should be connected to panels via aria-controls and aria-labelledby', () => {
    const tabText1 = 'Tab 1';
    const tabText2 = 'Tab 2';
    const tabPanelText1 = 'Panel 1';
    const tabPanelText2 = 'Panel 2';
    const id = 'id';

    render(
      <Tabs id={id}>
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

    const tab1 = screen.getAllByRole('tab')[0];
    const tab2 = screen.getAllByRole('tab')[1];
    const tabPanel1 = screen.getByText(tabPanelText1);
    const tabPanel2 = screen.getByText(tabPanelText2);

    expect(tab1).toHaveAttribute('id', `${id}-tab-0`);
    expect(tab2).toHaveAttribute('id', `${id}-tab-1`);
    expect(tabPanel1).toHaveAttribute('id', `${id}-panel-0`);
    expect(tabPanel2).toHaveAttribute('id', `${id}-panel-1`);

    expect(tab1).toHaveAttribute('aria-controls', `${id}-panel-0`);
    expect(tab2).toHaveAttribute('aria-controls', `${id}-panel-1`);
    expect(tabPanel1).toHaveAttribute('aria-labelledby', `${id}-tab-0`);
    expect(tabPanel2).toHaveAttribute('aria-labelledby', `${id}-tab-1`);
  });

  it('renders tabs when no chlidren provided', () => {
    const id = 'id';
    render(<Tabs data-testid={id} />);
    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});
