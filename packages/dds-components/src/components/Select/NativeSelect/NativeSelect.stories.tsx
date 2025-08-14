import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook/helpers';
import { INPUT_SIZES } from '../../helpers/Input';
import { StoryVStack } from '../../layout/Stack/utils';

import { NativeSelect, NativeSelectPlaceholder } from '.';

export default {
  title: 'dds-components/Components/Select/NativeSelect',
  component: NativeSelect,
  argTypes: {
    label: { control: 'text' },
    clearable: { control: 'boolean' },
    tip: { control: 'text' },
    errorMessage: { control: 'text' },
    width: responsivePropsArgTypes.width,
    disabled: { control: 'boolean', table: categoryHtml },
    required: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean' },
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
} satisfies Meta<typeof NativeSelect>;

type Story = StoryObj<typeof NativeSelect>;

const options = [
  { value: 'Alternativ 1', label: 'Alternativ 1' },
  { value: 'Alternativ 2', label: 'Alternativ 2' },
  {
    value: 'Veldig langt alternativ her veldig langt alternativ her',
    label: 'Veldig langt alternativ her veldig langt alternativ her',
  },
  { value: 'Alternativ 3', label: 'Alternativ 3' },
  { value: 'Alternativ 4', label: 'Alternativ 4' },
];

const nativeOptions = options.map((item, index) => (
  <option value={item.value} key={index}>
    {item.label}
  </option>
));

const children = [<NativeSelectPlaceholder />, ...nativeOptions];

export const Preview: Story = {
  args: {
    label: 'Label',
    children,
  },
};

export const Overview: Story = {
  args: {
    label: 'Label',
    children,
  },
  render: args => (
    <StoryVStack>
      <NativeSelect {...args} required />
      <NativeSelect {...args} readOnly />
      <NativeSelect {...args} disabled />
      <NativeSelect {...args} errorMessage="Dette er en feilmelding" />
      <NativeSelect {...args} tip="Dette er en hjelpetekst" />
    </StoryVStack>
  ),
};

export const Sizes: Story = {
  args: {
    label: 'Label',
    children,
  },
  render: args => (
    <StoryVStack>
      {INPUT_SIZES.map(size => (
        <NativeSelect
          {...args}
          key={size}
          label={labelText(size)}
          componentSize={size}
        />
      ))}
    </StoryVStack>
  ),
};

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    label: 'Label',
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};

export const Multi: Story = {
  args: { label: 'Label', children, multiple: true },
};

export const Groups: Story = {
  args: {
    label: 'Label',
    children: (
      <>
        <NativeSelectPlaceholder />
        <optgroup label="Group 1">
          <option>Option 1</option>
          <option>Option 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option>Option 1</option>
          <option>Option 2</option>
        </optgroup>
      </>
    ),
  },
};

export const Clearable: Story = {
  args: {
    label: 'Label',
    children,
    clearable: true,
  },
};
