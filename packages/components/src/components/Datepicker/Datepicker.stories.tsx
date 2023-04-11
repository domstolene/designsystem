import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Datepicker, DatepickerProps } from '.';

export default {
  title: 'dds-components/Datepicker',
  component: Datepicker,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
  },
};

export const OverviewDate = () => (
  <StoryTemplate
    display="grid"
    columnsAmount={2}
    title="Datepicker - date overview"
  >
    <Datepicker label="Label" />
    <Datepicker />
    <Datepicker label="Label" disabled />
    <Datepicker disabled />
    <Datepicker label="Label" readOnly />
    <Datepicker readOnly />
    <Datepicker label="Label" errorMessage="Feilmelding" />
    <Datepicker errorMessage="Feilmelding" />
    <Datepicker label="Label" tip="Hjelpetekst" />
    <Datepicker tip="Hjelpetekst" />
    <Datepicker label="Label" min="2021-11-11" max="2021-12-11" />
    <Datepicker min="2021-11-11" max="2021-12-11" />
  </StoryTemplate>
);

export const OverviewDatetime = () => (
  <StoryTemplate
    display="grid"
    columnsAmount={2}
    title="Datepicker - datetime overview"
  >
    <Datepicker type="datetime-local" label="Label" />
    <Datepicker type="datetime-local" />
    <Datepicker type="datetime-local" label="Label" disabled />
    <Datepicker type="datetime-local" disabled />
    <Datepicker type="datetime-local" label="Label" readOnly />
    <Datepicker type="datetime-local" readOnly />
    <Datepicker
      type="datetime-local"
      label="Label"
      errorMessage="Feilmelding"
    />
    <Datepicker type="datetime-local" errorMessage="Feilmelding" />
    <Datepicker type="datetime-local" label="Label" tip="Hjelpetekst" />
    <Datepicker type="datetime-local" tip="Hjelpetekst" />
    <Datepicker
      type="datetime-local"
      label="Label"
      min="2021-11-11T00:00"
      max="2021-12-11T23:59"
    />
    <Datepicker
      type="datetime-local"
      min="2021-11-11T00:00"
      max="2021-12-11T23:59"
    />
  </StoryTemplate>
);

export const OverviewSizes = () => (
  <StoryTemplate
    display="grid"
    columnsAmount={2}
    title="Datepicker - sizes overview"
  >
    <Datepicker label="Label" componentSize="medium" />
    <Datepicker componentSize="medium" />
    <Datepicker label="Label" componentSize="small" />
    <Datepicker componentSize="small" />
    <Datepicker label="Label" componentSize="tiny" />
    <Datepicker componentSize="tiny" />
    <Datepicker type="datetime-local" label="Label" componentSize="medium" />
    <Datepicker type="datetime-local" componentSize="medium" />
    <Datepicker type="datetime-local" label="Label" componentSize="small" />
    <Datepicker type="datetime-local" componentSize="small" />
    <Datepicker type="datetime-local" label="Label" componentSize="tiny" />
    <Datepicker type="datetime-local" componentSize="tiny" />
  </StoryTemplate>
);

export const Default = (args: DatepickerProps) => (
  <StoryTemplate title="Datepicker - default">
    <Datepicker {...args} />
  </StoryTemplate>
);

export const WithLabel = (args: DatepickerProps) => (
  <StoryTemplate title="Datepicker - with label">
    <Datepicker {...args} label={args.label ?? 'Label'} />
  </StoryTemplate>
);

export const Datetime = (args: DatepickerProps) => (
  <StoryTemplate title="Datepicker - datetime">
    <Datepicker {...args} type="datetime-local" />
  </StoryTemplate>
);

export const DatetimeWithLabel = (args: DatepickerProps) => (
  <StoryTemplate title="Datepicker - datetime with label">
    <Datepicker {...args} type="datetime-local" label={args.label ?? 'Label'} />
  </StoryTemplate>
);
