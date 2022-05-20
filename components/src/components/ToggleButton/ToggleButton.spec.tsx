import { render, screen } from '@testing-library/react';
import { ToggleButton, ToggleButtonGroup } from '.';

describe('<ToggleButton />', () => {
  it('should render label', () => {
    const label = 'label';
    render(<ToggleButton label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument;
  });

  it('should be selectable', () => {
    render(<ToggleButton label="label" />);
    const toggleButton = screen.getByRole('checkbox');
    expect(toggleButton).not.toBeChecked();
    toggleButton?.click();
    expect(toggleButton).toBeChecked();
  });

  it('ToggleButtonGroup should have aria-labelledby as label id when label provided', () => {
    const labelId = 'labelId';
    const label = 'label';
    render(
      <ToggleButtonGroup labelId={labelId} label={label}>
        <ToggleButton label="Test" />
      </ToggleButtonGroup>
    );
    expect(screen.getByText(label)).toBeInTheDocument;
    const group = screen.getByRole('group');
    expect(group).toHaveAttribute('aria-labelledby', labelId);
  });
});
