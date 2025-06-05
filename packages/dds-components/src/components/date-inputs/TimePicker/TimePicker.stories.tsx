import { Time } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../../Button';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { TimePicker } from '.';

const meta: Meta<typeof TimePicker> = {
  title: 'dds-components/Components/TimePicker',
  component: TimePicker,
  argTypes: {
    width: { control: 'text' },
    className: { table: { disable: true } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
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

export const OverviewSizes: Story = {
  render: args => (
    <StoryVStack>
      <TimePicker {...args} componentSize="medium" label="Medium" />
      <TimePicker {...args} componentSize="small" label="Small" />
      <TimePicker {...args} componentSize="xsmall" label="Xsmall" />
    </StoryVStack>
  ),
};

export const CustomWidth: Story = {
  args: { label: 'Tidspunkt', width: '500px' },
};
