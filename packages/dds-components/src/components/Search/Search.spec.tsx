import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Search } from '.';

describe('<Search>', () => {
  it('renders a searchbox', () => {
    render(<Search />);
    const search = screen.getByRole('searchbox');
    expect(search).toBeInTheDocument();
  });
  it('renders a search button with a label', () => {
    const label = 'Søk';
    render(<Search buttonProps={{ onClick: () => null, label: label }} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('renders provided tip', () => {
    const tip = 'tip';
    render(<Search tip={tip} />);
    expect(screen.getByText(tip)).toBeInTheDocument();
  });
  it('should have aria-describedby when tip provided', () => {
    const tip = 'tip';
    const id = 'id';
    render(<Search tip={tip} id={id} />);
    expect(screen.getByRole('searchbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-tip`,
    );
  });
  it('renders combobox when using autocomplete version', () => {
    render(
      <Search.AutocompleteWrapper data={{ array: [] }}>
        <Search />
      </Search.AutocompleteWrapper>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders search suggestions wrapper', () => {
    render(
      <Search.AutocompleteWrapper data={{ array: [] }}>
        <Search />
      </Search.AutocompleteWrapper>,
    );
    expect(screen.getByLabelText('Søkeforslag')).toBeInTheDocument();
  });

  it('renders specified search suggestion', async () => {
    const text = 'text';
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>,
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text}`);
    const option = screen.getByRole('option');
    expect(option).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('does not render search suggestion when query is too short', async () => {
    const text = 'text';
    const queryLength = 3;
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>,
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text.slice(queryLength - 2)}`);
    const option = screen.queryByRole('option');
    expect(option).not.toBeInTheDocument();
  });

  it('has aria-expanded=true when suggestions list present and false when not', async () => {
    const text = 'text';
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>,
    );

    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('aria-expanded', 'false');
    await userEvent.type(input, `${text}`);
    expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  it('menuitem gets focus when using arrows to navigate', async () => {
    const text = 'text';
    render(
      <Search.AutocompleteWrapper data={{ array: [text] }}>
        <Search />
      </Search.AutocompleteWrapper>,
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text}`);
    const menuitem = screen.getByText(text);
    expect(menuitem).not.toHaveFocus();

    await act(async () => {
      await userEvent.keyboard('{ArrowDown}');
    });

    expect(menuitem).toHaveFocus();
  });

  it('calls suggestion click event', async () => {
    const event = vi.fn();
    const text = 'text';
    render(
      <Search.AutocompleteWrapper
        data={{ array: [text] }}
        onSuggestionSelection={event}
      >
        <Search />
      </Search.AutocompleteWrapper>,
    );

    const input = screen.getByRole('combobox');
    await userEvent.type(input, `${text}`);
    const button = screen.getByText(text);

    await userEvent.click(button);

    expect(event).toHaveBeenCalled();
  });
});
