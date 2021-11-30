import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Datepicker, DatepickerProps } from '.';

export default {
  title: 'Design system/Datepicker',
  component: Datepicker,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } }
  }
};

export const Overview = () => (
  <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - default">
    <Datepicker label="Label" />
    <Datepicker />
    <Datepicker label="Label" disabled />
    <Datepicker disabled />
    <Datepicker label="Label" readOnly />
    <Datepicker readOnly />
    <Datepicker label="Label" errorMessage="Feilmelding" />
    <Datepicker errorMessage="Feilmelding" />
    <Datepicker label="Label" tip="Hejlpetekst" />
    <Datepicker tip="Hejlpetekst" />
  </StoryTemplate>
);

export const Default = (args: DatepickerProps) => (
  <StoryTemplate title="Datepicker - default">
    <Datepicker {...args} />
  </StoryTemplate>
);

export const WithLabel = (args: DatepickerProps) => (
  <StoryTemplate title="Datepicker - with label">
    <Datepicker {...args} label={args.label || 'Label'} />
  </StoryTemplate>
);
