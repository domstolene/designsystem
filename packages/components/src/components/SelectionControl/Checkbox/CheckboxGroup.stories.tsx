import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Checkbox, CheckboxGroup } from '.';

export default {
  title: 'dds-components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof CheckboxGroup>;

export const Overview: Story = {
  args: {
    label: 'Label',
    children: [
      <Checkbox key={0} label="Option 1" />,
      <Checkbox key={1} label="Option 2" />,
      <Checkbox key={2} label="Option 3" />,
    ],
  },
  decorators: Story => (
    <StoryTemplate
      title="CheckboxGroup - overview"
      display="grid"
      $columnsAmount={2}
    >
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <CheckboxGroup {...args} />
      <CheckboxGroup {...args} direction="column" />
      <CheckboxGroup {...args} required />
      <CheckboxGroup {...args} direction="column" required />
      <CheckboxGroup {...args} tip="Dette er en hjelpetekst" />
      <CheckboxGroup
        {...args}
        direction="column"
        tip="Dette er en hjelpetekst"
      />
      <CheckboxGroup {...args} errorMessage="Dette er en feilmelding" />
      <CheckboxGroup
        {...args}
        direction="column"
        errorMessage="Dette er en feilmelding"
      />
      <CheckboxGroup
        {...args}
        tip="Dette er en hjelpetekst"
        errorMessage="Dette er en feilmelding"
      />
      <CheckboxGroup
        {...args}
        direction="column"
        tip="Dette er en hjelpetekst"
        errorMessage="Dette er en feilmelding"
      />
    </>
  ),
};

export const Default: Story = {
  args: {
    label: 'Label',
    children: [
      <Checkbox key={0} label="Option 1" />,
      <Checkbox key={1} label="Option 2" />,
      <Checkbox key={2} label="Option 3" />,
    ],
  },
  decorators: Story => (
    <StoryTemplate title="CheckboxGroup - default">
      <Story />
    </StoryTemplate>
  ),
};
