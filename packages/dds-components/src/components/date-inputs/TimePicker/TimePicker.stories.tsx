import { Time } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import {
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
} from '../../../storybook/helpers';
import { Button } from '../../Button';
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
        <TimePicker {...args} />
        <TimePicker {...args} isRequired />
        <TimePicker
          {...args}
          errorMessage={
            args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
          }
        />
      </StoryVStack>
      <StoryVStack>
        <TimePicker {...args} isDisabled />
        <TimePicker {...args} isReadOnly />
        <TimePicker {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Required: Story = {
  args: { label: 'Tidspunkt', isRequired: true },
};

export const Controlled: Story = {
  args: { label: 'Tidspunkt' },
  render: args => {
    const [value, setValue] = useState<Time | null>(new Time(12));

    return (
      <StoryVStack>
        <TimePicker {...args} value={value} onChange={setValue} />
        <Button onClick={() => setValue(new Time(12))}>
          Sett til klokken 12
        </Button>
      </StoryVStack>
    );
  },
};

export const Error: Story = {
  args: { label: 'Tidspunkt', errorMessage: 'Her er noe veldig galt! 😨' },
};

export const ReadOnly: Story = {
  args: { label: 'Tidspunkt', isReadOnly: true },
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
