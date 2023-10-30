import { useEffect, useRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '.';

const activeText = 'active tab';
const inactiveText = 'inactive tab';

const WithRefs = () => {
  const activeRef = useRef<HTMLButtonElement>(null);
  const inactiveRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef && activeRef?.current) activeRef.current.append(activeText);
    if (inactiveRef && inactiveRef?.current)
      inactiveRef.current.append(inactiveText);
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab ref={activeRef}>Tab 1</Tab>
        <Tab ref={inactiveRef}>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
    </Tabs>
  );
};

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
      </Tabs>,
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
      </Tabs>,
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.queryAllByRole('tab')).toHaveLength(3);
  });

  it('set aria-expanded=true for open panel and false for closed panels onChange', () => {
    const tabText2 = 'Tab 2';
    const tabPanelText = 'Panel';

    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>{tabText2}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{tabPanelText}</TabPanel>
          <TabPanel>{tabPanelText}</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    const tab2 = screen.getByText(tabText2);
    const [tabPanel1, tabPanel2] = screen.getAllByText(tabPanelText);

    expect(tabPanel1).toHaveAttribute('aria-expanded', 'true');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(tab2);
    expect(tabPanel1).toHaveAttribute('aria-expanded', 'false');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'true');
  });

  it('first tab should have aria-selected on render', () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>,
    );
    const [tab1, tab2] = screen.getAllByRole('tab');
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
  });

  it('tab should get aria-selected onClick', () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    const [tab1, tab2] = screen.getAllByRole('tab');

    fireEvent.click(tab2);
    expect(tab1).toHaveAttribute('aria-selected', 'false');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  it('tabs should be connected to panels via aria-controls and aria-labelledby', () => {
    const tabPanelText = 'Panel';
    const id = 'id';

    render(
      <Tabs id={id}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{tabPanelText}</TabPanel>
          <TabPanel>{tabPanelText}</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    const [tab1, tab2] = screen.getAllByRole('tab');
    const [tabPanel1, tabPanel2] = screen.getAllByText(tabPanelText);

    expect(tab1).toHaveAttribute('id', `${id}-tab-0`);
    expect(tab2).toHaveAttribute('id', `${id}-tab-1`);
    expect(tabPanel1).toHaveAttribute('id', `${id}-panel-0`);
    expect(tabPanel2).toHaveAttribute('id', `${id}-panel-1`);

    expect(tab1).toHaveAttribute('aria-controls', `${id}-panel-0`);
    expect(tab2).toHaveAttribute('aria-controls', `${id}-panel-1`);
    expect(tabPanel1).toHaveAttribute('aria-labelledby', `${id}-tab-0`);
    expect(tabPanel2).toHaveAttribute('aria-labelledby', `${id}-tab-1`);
  });

  it('renders tabs when no children provided', () => {
    const id = 'id';
    render(<Tabs data-testid={id} />);
    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
  it('combines forwarded and local refs', () => {
    render(<WithRefs />);
    expect(screen.getByText(activeText)).toBeInTheDocument();
    expect(screen.getByText(inactiveText)).toBeInTheDocument();
  });

  it('listens for activeTab prop and renders tabPanels accordingly', () => {
    const id = 'id';
    const tabPanelText = 'tabPanel';

    const { rerender } = render(
      <Tabs id={id} activeTab={0}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{tabPanelText}</TabPanel>
          <TabPanel>{tabPanelText}</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    let [tab1, tab2] = screen.getAllByRole('tab');
    let [tabPanel1, tabPanel2] = screen.getAllByText(tabPanelText);

    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
    expect(tabPanel1).toHaveAttribute('aria-expanded', 'true');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'false');

    rerender(
      <Tabs id={id} activeTab={1}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{tabPanelText}</TabPanel>
          <TabPanel>{tabPanelText}</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    [tab1, tab2] = screen.getAllByRole('tab');
    [tabPanel1, tabPanel2] = screen.getAllByText(tabPanelText);

    expect(tab1).toHaveAttribute('aria-selected', 'false');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(tabPanel1).toHaveAttribute('aria-expanded', 'false');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'true');
  });
});
