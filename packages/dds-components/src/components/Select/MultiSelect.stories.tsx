import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Select } from './Select';
import {
  categoryHtml,
  ddsProviderDecorator,
  labelText,
  responsivePropsArgTypes,
} from '../../storybook';
import { INPUT_SIZES } from '../helpers/Input';
import { CourtIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

const meta: Meta<typeof Select<Option, true>> = {
  title: 'dds-components/Components/Select/MultiSelect',
  component: Select,
  argTypes: {
    width: responsivePropsArgTypes.width,
    placeholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isClearable: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' }, table: categoryHtml },
    readOnly: { control: { type: 'boolean' } },
    isLoading: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { height: '450px' },
    },
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue'],
    },
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof Select<Option, true>>;

interface Option {
  label: string;
  value: string;
}

const options: Array<Option> = [
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
].map(s => ({ label: s, value: s }));

export const Preview: Story = {
  args: { label: 'Label', options: options, isMulti: true },
};

export const Overview: Story = {
  args: { label: 'Label', options: options, isMulti: true },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Select {...args} label="Required" required />
        <Select {...args} label="Med ikon" icon={CourtIcon} />
        <Select {...args} label="Med defaultValue" defaultValue={options[0]} />
        <Select {...args} label="Med value" value={options[0]} />
        <Select
          {...args}
          label="Med hjelpetekst"
          tip="Dette er en hjelpetekst"
        />
      </StoryVStack>
      <StoryVStack>
        <Select {...args} label="isDisabled" isDisabled value={options[0]} />
        <Select {...args} label="readOnly" readOnly value={options[0]} />
        <Select
          {...args}
          label="Med placeholder"
          placeholder="-- placeholder --"
        />
        <Select
          {...args}
          label="Med feilmelding"
          errorMessage="Dette er en feilmelding"
        />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  args: { options: options, isMulti: true },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          {INPUT_SIZES.map(size =>
            size === 'xsmall' ? null : (
              <Select
                {...args}
                key={size}
                label={labelText(size)}
                componentSize={size}
              />
            ),
          )}
        </StoryVStack>
        <StoryVStack>
          {INPUT_SIZES.map(size =>
            size === 'xsmall' ? null : (
              <Select
                {...args}
                key={size}
                label={labelText(size)}
                icon={CourtIcon}
                componentSize={size}
              />
            ),
          )}
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const WithFitContent: Story = {
  args: {
    label: 'Label',
    options: options,
    isMulti: true,
    width: 'fit-content',
    style: { minWidth: 'var(--dds-input-default-width)' },
  },
};
