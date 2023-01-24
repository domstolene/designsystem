import { fireEvent, render, screen } from '@testing-library/react';
import { Chip, ChipGroup } from '.';

describe('<Chip />', () => {
  it('Should render text', () => {
    const text = 'text';
    render(<Chip text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('Should remove component from DOM on close', () => {
    const text = 'text';
    render(<Chip text={text} />);
    const button = screen.getByRole('button');
    fireEvent.click(button!);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
  it('Should have aria-label based on text', () => {
    const text = 'text';
    render(<Chip text={text} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', `Fjern chip ${text}`);
  });
  it('Should have generic aria-label', () => {
    render(<Chip />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Fjern chip');
  });
  it('Should call onClose event', () => {
    const event = jest.fn();
    render(<Chip onClose={event} />);
    const button = screen.getByRole('button');
    fireEvent.click(button!);
    expect(event).toHaveBeenCalled();
  });
  it('Should render <ul> with a <li> child', () => {
    render(
      <ChipGroup>
        <Chip />
      </ChipGroup>
    );
    const list = screen.getByRole('list');
    const listitem = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
    expect(list).toContainElement(listitem);
  });
});
