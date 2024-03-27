import { Time } from '@internationalized/date';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../../Button';

import { TimePicker } from '.';

const meta: Meta<typeof TimePicker> = {
  title: 'dds-components/TimePicker',
  component: TimePicker,
  argTypes: {
    width: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isReadOnly: { control: { type: 'boolean' } },
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
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <TimePicker {...args} />
      <TimePicker {...args} isRequired />
      <TimePicker {...args} isDisabled />
      <TimePicker {...args} isReadOnly />
      <TimePicker
        {...args}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TimePicker {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
    </>
  ),
};

export const Required: Story = {
  args: { label: 'Tidspunkt', isRequired: true },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Controlled: Story = {
  args: { label: 'Tidspunkt' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [value, setValue] = useState<Time | null>(new Time(12));

    return (
      <StoryTemplate>
        <TimePicker {...args} value={value} onChange={setValue} />
        <Button onClick={() => setValue(new Time(12))}>
          Sett til klokken 12
        </Button>
      </StoryTemplate>
    );
  },
};

export const Error: Story = {
  args: { label: 'Tidspunkt', errorMessage: 'Her er noe veldig galt! 😨' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const ReadOnly: Story = {
  args: { label: 'Tidspunkt', isReadOnly: true },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const OverviewSizes: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <TimePicker {...args} componentSize="medium" label="Medium" />
      <TimePicker {...args} componentSize="small" label="Small" />
      <TimePicker {...args} componentSize="tiny" label="Tiny" />
    </>
  ),
};

export const CustomWidth: Story = {
  args: { label: 'Tidspunkt', width: '500px' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
