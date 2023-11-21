import { Checkbox, CheckboxGroup, CheckboxGroupProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

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
    controls: {
      exclude: ['style', 'className'],
    },
  },
};

export const Overview = (args: CheckboxGroupProps) => {
  return (
    <StoryTemplate
      title="CheckboxGroup - overview"
      display="grid"
      $columnsAmount={2}
    >
      <CheckboxGroup {...args} label={args.label ?? 'Label'}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} direction="column">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} required>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup
        {...args}
        label={args.label ?? 'Label'}
        direction="column"
        required
      >
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup
        {...args}
        label={args.label ?? 'Label'}
        tip="Dette er en hjelpetekst"
      >
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup
        {...args}
        label={args.label ?? 'Label'}
        direction="column"
        tip="Dette er en hjelpetekst"
      >
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup
        {...args}
        label={args.label ?? 'Label'}
        errorMessage="Dette er en feilmelding"
      >
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup
        {...args}
        label={args.label ?? 'Label'}
        direction="column"
        errorMessage="Dette er en feilmelding"
      >
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup
        {...args}
        label={args.label ?? 'Label'}
        tip="Dette er en hjelpetekst"
        errorMessage="Dette er en feilmelding"
      >
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup
        {...args}
        label={args.label ?? 'Label'}
        direction="column"
        tip="Dette er en hjelpetekst"
        errorMessage="Dette er en feilmelding"
      >
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
    </StoryTemplate>
  );
};

export const Default = (args: CheckboxGroupProps) => {
  return (
    <StoryTemplate title="CheckboxGroup - default">
      <CheckboxGroup {...args} label={args.label ?? 'Label'}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
    </StoryTemplate>
  );
};
