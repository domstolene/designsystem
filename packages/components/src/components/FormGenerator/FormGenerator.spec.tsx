import { render, screen, fireEvent } from '@testing-library/react';
import { FormGenerator, FormGeneratorField, FormGeneratorSupportedFields } from '.';

describe('<FormGenerator />', () => {
  it('renders a FormGenerator', () => {
    let lastnameField = 'lastName';
    
    const fields: FormGeneratorField[] = [
      {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
          label: lastnameField,
          type: 'text',
          name: lastnameField,
          value: 'value'
        },
      },
    ];
    render(
      <FormGenerator fields={fields} stateOnChange={() => {}} />
    );
    const textInput = screen.getAllByLabelText(lastnameField);
    expect(textInput).toBeInTheDocument;
  });

  it('should handle state changes', () => {
    let expectedValue = 'new value';
    let updatedValue = null;
    let lastnameField = 'lastName';

    let handleChanges = (newState: any) => {
      updatedValue = newState[lastnameField];
    };

    const fields: FormGeneratorField[] = [
      {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
          label: lastnameField,
          type: 'text',
          name: lastnameField,
          value: ''
        },
      },
    ];
    render(
      <FormGenerator fields={fields} stateOnChange={handleChanges} />
    );
    
    const textInput = screen.getByLabelText(lastnameField);
    fireEvent.change(textInput, { target: { value: expectedValue } });

    expect(updatedValue).toBe(expectedValue);
  });
  
});
