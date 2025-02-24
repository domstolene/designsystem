import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useEffect, useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

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
        <Tab ref={activeRef} />
        <Tab ref={inactiveRef} />
        <Tab>Tab 3</Tab>
      </TabList>
    </Tabs>
  );
};

describe('<Tabs>', () => {
  it('renders tablist', () => {
    render(
      <Tabs>
        <TabList />
      </Tabs>,
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });
  it('renders tab', () => {
    render(
      <Tabs>
        <TabList>
          <Tab />
        </TabList>
      </Tabs>,
    );
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });
  it('renders tabpanel', () => {
    render(
      <Tabs>
        <TabPanels>
          <TabPanel />
        </TabPanels>
      </Tabs>,
    );

    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('renders 3 tabs', () => {
    render(
      <Tabs>
        <TabList>
          <Tab />
          <Tab />
          <Tab />
        </TabList>
      </Tabs>,
    );
    expect(screen.queryAllByRole('tab')).toHaveLength(3);
  });

  it('open panel should visible and closed panels invisible onChange', async () => {
    const panelText1 = 'panelText1';
    const panelText2 = 'panelText2';
    render(
      <Tabs>
        <TabList>
          <Tab />
          <Tab />
        </TabList>
        <TabPanels>
          <TabPanel>{panelText1}</TabPanel>
          <TabPanel>{panelText2}</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    const [, tab2] = screen.getAllByRole('tab');
    const tabPanel1 = screen.getByText(panelText1);
    const tabPanel2 = screen.getByText(panelText2);

    expect(tabPanel1).toBeInTheDocument();
    expect(tabPanel1).toBeVisible();
    expect(tabPanel2).not.toBeVisible();
    expect(tabPanel1).toHaveAttribute('aria-expanded', 'true');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(tab2);
    expect(tabPanel1).not.toBeVisible();
    expect(tabPanel2).toBeVisible();
    expect(tabPanel1).toHaveAttribute('aria-expanded', 'false');
    expect(tabPanel2).toHaveAttribute('aria-expanded', 'true');
  });

  it('first tab should have aria-selected on render', () => {
    render(
      <Tabs>
        <TabList>
          <Tab />
          <Tab />
        </TabList>
        <TabPanels>
          <TabPanel />
          <TabPanel />
        </TabPanels>
      </Tabs>,
    );
    const [tab1, tab2] = screen.getAllByRole('tab');
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
  });

  it('tab should get aria-selected onClick', async () => {
    render(
      <Tabs>
        <TabList>
          <Tab />
          <Tab />
        </TabList>
        <TabPanels>
          <TabPanel />
          <TabPanel />
        </TabPanels>
      </Tabs>,
    );

    const [tab1, tab2] = screen.getAllByRole('tab');

    await userEvent.click(tab2);
    expect(tab1).toHaveAttribute('aria-selected', 'false');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  it('tab should fire Tab onClick event', async () => {
    const onClick = vi.fn();
    render(
      <Tabs>
        <TabList>
          <Tab onClick={onClick} />
        </TabList>
      </Tabs>,
    );

    const tab = screen.getByRole('tab');
    await userEvent.click(tab);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('tabs should be connected to panels via aria-controls accessible name', () => {
    const id = 'id';
    const tab1Text = 'tab1';

    render(
      <Tabs id={id}>
        <TabList>
          <Tab>{tab1Text}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel />
        </TabPanels>
      </Tabs>,
    );

    const tab1 = screen.getByRole('tab');
    const tabPanel1 = screen.getByRole('tabpanel');

    expect(tab1).toHaveAttribute('aria-controls', `${id}-panel-0`);
    expect(tabPanel1).toHaveAttribute('id', `${id}-panel-0`);
    expect(tabPanel1).toHaveAccessibleName(tab1Text);
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
    const panelText1 = 'panelText1';
    const panelText2 = 'panelText2';
    const { rerender } = render(
      <Tabs activeTab={0}>
        <TabList>
          <Tab />
          <Tab />
        </TabList>
        <TabPanels>
          <TabPanel>{panelText1}</TabPanel>
          <TabPanel>{panelText2}</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    let [tab1, tab2] = screen.getAllByRole('tab');
    let tabPanel1 = screen.getByText(panelText1);
    let tabPanel2 = screen.getByText(panelText2);

    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
    expect(tabPanel1).toBeVisible();
    expect(tabPanel2).not.toBeVisible();

    rerender(
      <Tabs activeTab={1}>
        <TabList>
          <Tab />
          <Tab />
        </TabList>
        <TabPanels>
          <TabPanel>{panelText1}</TabPanel>
          <TabPanel>{panelText2}</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    [tab1, tab2] = screen.getAllByRole('tab');
    tabPanel1 = screen.getByText(panelText1);
    tabPanel2 = screen.getByText(panelText2);

    expect(tab1).toHaveAttribute('aria-selected', 'false');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(tabPanel1).not.toBeVisible();
    expect(tabPanel2).toBeVisible();
  });
});
