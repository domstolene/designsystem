import { render, screen } from '@testing-library/react';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a label', () => {
    const label = 'button label';
    render(<TextInput label={label} />);
    expect(screen.queryByText(label)).toBeInTheDocument();
  });
  it('renders provided error message', () => {
    const errorMessage = 'this is an error';
    render(<TextInput errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
  });
  it('renders provided tip', () => {
    const tip = 'this is a tip';
    render(<TextInput tip={tip} />);
    expect(screen.queryByText(tip)).toBeInTheDocument();
  });
  it('should have aria-describedby when tip provided', () => {
    const id = 'id';
    const tip = 'this is a tip';
    render(<TextInput id={id} tip={tip} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-tip`
    );
  });
  it('should have aria-describedby when errorMessage provided', () => {
    const id = 'id';
    const errorMessage = 'this is an errorMessage';
    render(<TextInput id={id} errorMessage={errorMessage} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-errorMessage`
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
  it('should have character counter and aria-describedby when maxLength provided', () => {
    const id = 'id';
    const length = 5;
    render(<TextInput id={id} maxLength={length} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-characterCounter`
    );
    expect(screen.queryByText(`0/${length}`)).toBeInTheDocument();
  });
  it('should not have character counter when both maxLength and withCharacterCounter=false provided', () => {
    const id = 'id';
    const length = 5;
    render(
      <TextInput id={id} maxLength={length} withCharacterCounter={false} />
    );
    expect(screen.getByRole('textbox')).not.toHaveAttribute(
      'aria-describedby',
      `${id}-characterCounter`
    );
    expect(screen.queryByText(`0/${length}`)).not.toBeInTheDocument();
  });
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<TextInput tip={tip} errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
    expect(screen.queryByText(tip)).not.toBeInTheDocument();
  });
  it('should render correct number of characters when both maxLength and value are provided', () => {
    const value = 'Test';
    const valueLength = value.length;
    const maxLength = 10;

    render(<TextInput maxLength={maxLength} value={value} />);

    const textElement = screen.getByText(`${valueLength}/${maxLength}`);
    expect(textElement).toBeInTheDocument();
  });
});
