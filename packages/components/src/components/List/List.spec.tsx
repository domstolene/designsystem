import { render, screen } from '@testing-library/react';
import { List, ListItem } from '.';

describe('<List />', () => {
  it('should be an unordered list by default', () => {
    render(
      <List>
        <ListItem>Item</ListItem>
      </List>
    );
    const list = screen.getByRole('list');
    expect(list.nodeName).toEqual('UL');
  });
  it('should be an ordered list', () => {
    render(
      <List listType="ordered">
        <ListItem>Item</ListItem>
      </List>
    );
    const list = screen.getByRole('list');
    expect(list.nodeName).toEqual('OL');
  });
  it('should render three list items', () => {
    render(
      <List>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
      </List>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
  it('should render list item text', () => {
    const text = 'item 1';
    render(
      <List>
        <ListItem>{text}</ListItem>
      </List>
    );
    const listItemText = screen.getByText(text);
    expect(listItemText).toBeInTheDocument();
  });
});
