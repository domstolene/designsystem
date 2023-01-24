import { act, render, screen, within } from '@testing-library/react';
import { Search } from '.';
import userEvent from '@testing-library/user-event';

describe('<Search />', () => {
  it('should render a searchbox', () => {
    render(<Search />);
    const search = screen.getByRole('searchbox');
    expect(search).toBeInTheDocument();
  });
  it('should render a search button with a label', () => {
    const label = 'Søk';
    render(<Search buttonProps={{ onClick: e => {}, label: label }} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.queryByText(label)).toBeInTheDocument();
  });
  it('renders provided tip', () => {
    const tip = 'tip';
    render(<Search tip={tip} />);
    expect(screen.queryByText(tip)).toBeInTheDocument();
  });
  it('should have aria-describedby when tip provided', () => {
    const tip = 'tip';
    const id = 'id';
    render(<Search tip={tip} id={id} />);
    expect(screen.getByRole('searchbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-tip`
    );
  });
  it('should render combobox when using autocomplete version', () => {
    render(
      <Search.AutocompleteWrapper data={{ array: [] }}>
        <Search />
      </Search.AutocompleteWrapper>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render search suggestions wrapper', () => {
    render(
      <Search.AutocompleteWrapper data={{ array: [] }}>
        <Search />
      </Search.AutocompleteWrapper>
    );
    expect(screen.getByLabelText('Søkeforslag')).toBeInTheDocument();
  });

  it('should render specified search suggestion', async () => {
    const text = 'text';
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text}`);
    const option = screen.getByRole('option');
    expect(option).toBeInTheDocument();
    const { queryByText, queryByRole } = within(option);
    expect(queryByText(text)).toBeInTheDocument();
    expect(queryByRole('menuitem')).toBeInTheDocument();
  });

  it('should not render search suggestion when query is too short', async () => {
    const text = 'text';
    const queryLength = 3;
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text.slice(queryLength - 2)}`);
    const option = screen.queryByRole('option');
    expect(option).not.toBeInTheDocument();
  });

  it('Search should have aria-expanded=true when suggestions list present and false when not', async () => {
    const text = 'text';
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>
    );

    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('aria-expanded', 'false');
    await userEvent.type(input, `${text}`);
    expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  it('menuitem should get focus when using arrows to navigate', async () => {
    const text = 'text';
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text}`);
    const menuitem = screen.getByRole('menuitem');
    expect(menuitem).not.toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    expect(menuitem).toHaveFocus();
  });

  it('should run function on suggestion click', async () => {
    const event = jest.fn();
    const text = 'text';
    render(
      <Search.AutocompleteWrapper
        data={{ array: [text] }}
        onSuggestionSelection={event}
      >
        <Search />
      </Search.AutocompleteWrapper>
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text}`);
    const button = screen.getByText(text);

    act(() => {
      button.click();
    });

    expect(event).toHaveBeenCalled();
  });
});
