import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PageGenerator } from '../components';
import { PageGeneratorField, PageGeneratorSupportedFields } from '../types';

describe('<PageGenerator />', () => {
  /**
   * @vitest-environment jsdom
   */
  test('renders a PageGenerator', () => {
    const lastnameField = 'lastName';

    const fields: PageGeneratorField[] = [
      {
        component: PageGeneratorSupportedFields.TextInput,
        props: {
          label: lastnameField,
          type: 'text',
          name: lastnameField,
          value: 'value',
        },
      },
    ];
    render(
      <PageGenerator as="form" fields={fields} stateOnChange={() => {}} />
    );
    const textInput = screen.getByLabelText(lastnameField);
    expect(textInput).toBeDefined();
  });

  test('should handle state changes', async () => {
    const expectedValue = {
      lastName: 'new value',
    };
    let updatedValue = {};
    const lastnameField = 'lastName';

    const handleChanges = (newState: object) => {
      updatedValue = newState;
    };

    const fields: PageGeneratorField[] = [
      {
        component: PageGeneratorSupportedFields.TextInput,
        props: {
          label: lastnameField,
          type: 'text',
          name: lastnameField,
          value: '',
        },
      },
    ];
    render(
      <PageGenerator as="div" fields={fields} stateOnChange={handleChanges} />
    );

    const textInput = screen.getByLabelText(lastnameField);
    fireEvent.change(textInput, { target: { value: expectedValue.lastName } });

    await waitFor(() => expect(updatedValue).toEqual(expectedValue));
  });
});
