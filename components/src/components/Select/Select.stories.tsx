import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
import { Select as DDSSelect, SelectProps } from './Select';

export default {
  title: 'design system/Select',
  component: DDSSelect,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isClearable: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue']
    }
  }
};

const options = [
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4'
].map(s => ({ label: s, value: s, test: 'flesk' }));

const optionsLong = [
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
  'Alternativ 5',
  'Alternativ 6',
  'Alternativ 7'
].map(s => ({ label: s, value: s }));

export const Overview = (args: SelectProps) => {
  return storyHTMLGridTemplate(
    'Select - overview',
    <>
      <DDSSelect {...args} label={args.label || 'Label'} options={options} />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        required
        options={options}
      />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        isDisabled
        options={options}
      />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        readOnly
        options={options}
      />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        errorMessage="Dette er en feilmelding"
        options={options}
      />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        tip="Dette er en hjelpetekst"
        options={options}
      />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        placeholder="Annerledes placeholder"
        options={options}
      />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        defaultValue={options[0]}
        options={options}
      />
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        value={options[3]}
        options={options}
      />
      <DDSSelect {...args} options={options} />
    </>,
    '25px',
    2
  );
};

export const Default = (args: SelectProps) => {
  return storyHTMLTemplate(
    'Select default',
    <DDSSelect {...args} label={args.label || 'Label'} options={options} />
  );
};
export const ManyItems = (args: SelectProps) => {
  return storyHTMLTemplate(
    'Select - many options',
    <DDSSelect {...args} label={args.label || 'Label'} options={optionsLong} />
  );
};

export const SelectError = (args: SelectProps) => {
  return storyHTMLTemplate(
    'Select - error',
    <DDSSelect
      {...args}
      label={args.label || 'Label'}
      errorMessage="Dette er en feilmelding"
      options={options}
    />
  );
};
