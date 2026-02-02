import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  ddsProviderDecorator,
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
} from '../../../storybook';
import { INPUT_SIZES } from '../../helpers/Input';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { TimePicker } from '.';

const meta: Meta<typeof TimePicker> = {
  title: 'dds-components/Components/TimePicker',
  component: TimePicker,
  argTypes: {
    width: responsivePropsArgTypes.width,
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    className: { table: { disable: true } },
    onBlur: htmlEventArgType,
    onChange: htmlEventArgType,
    onFocus: htmlEventArgType,
  },
  args: { onBlur: fn(), onFocus: fn(), onChange: fn(), onFocusChange: fn() },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Preview: Story = {
  args: { label: 'Tidspunkt' },
};

export const Overview: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <TimePicker {...args} isRequired label="Påkrevd" />
        <TimePicker
          {...args}
          errorMessage={args.errorMessage ?? 'Feilmelding ved valideringsfeil'}
        />
      </StoryVStack>
      <StoryVStack>
        <TimePicker {...args} isDisabled label="Disabled" />
        <TimePicker {...args} isReadOnly label="ReadOnly" />
        <TimePicker {...args} tip={args.tip ?? 'Hjelpetekst'} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack>
      {INPUT_SIZES.map(size => (
        <TimePicker
          {...args}
          key={size}
          componentSize={size}
          label={labelText(size)}
        />
      ))}
    </StoryVStack>
  ),
};

export const CustomWidth: Story = {
  args: { label: 'Tidspunkt', width: '500px' },
};
