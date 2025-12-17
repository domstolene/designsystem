import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { List, ListItem } from '.';

describe('<List>', () => {
  it('is an unordered list by default', () => {
    render(
      <List>
        <ListItem />
      </List>,
    );
    const list = screen.getByRole('list');
    expect(list.nodeName).toEqual('UL');
  });
  it('is an ordered list', () => {
    render(
      <List listType="ordered">
        <ListItem />
      </List>,
    );
    const list = screen.getByRole('list');
    expect(list.nodeName).toEqual('OL');
  });
  it('renders three list items', () => {
    render(
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
      </List>,
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
  it('renders list item text', () => {
    const text = 'item 1';
    render(
      <List>
        <ListItem>{text}</ListItem>
      </List>,
    );
    const listItemText = screen.getByText(text);
    expect(listItemText).toBeInTheDocument();
  });
});
