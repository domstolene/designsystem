import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RadioButton, RadioButtonGroup } from '.';

describe('<RadioButton />', () => {
  it('RadioButtonGroup should have aria-describedby as tip id when tip provided', () => {
    const groupId = 'groupId';
    render(
      <RadioButtonGroup groupId={groupId} tip="tip">
        <RadioButton label="test" />
      </RadioButtonGroup>
    );
    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAttribute('aria-describedby', `${groupId}-tip`);
  });
  it('children of RadioButtonGroup should have aria-describedby as errorMessage id and aria-invalid when errorMessage provided', () => {
    const groupId = 'groupId';
    render(
      <RadioButtonGroup groupId={groupId} errorMessage="errorMessage">
        <RadioButton label="Test" />
      </RadioButtonGroup>
    );
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute(
      'aria-describedby',
      `${groupId}-errorMessage`
    );
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });
});
