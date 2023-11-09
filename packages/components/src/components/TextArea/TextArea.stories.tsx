import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { TextAreaProps } from './TextArea.types';
import { TextArea } from './TextArea';

export default {
  title: 'dds-components/TextArea',
  component: TextArea,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className'],
    },
  },
};

export const Overview = (args: TextAreaProps) => {
  return (
    <StoryTemplate title="Textrea - overview" display="grid" columnsAmount={2}>
      <TextArea {...args} label={args.label ?? 'Label'} />
      <TextArea {...args} />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        required
        value="Påkrevd"
      />
      <TextArea {...args} required value="Påkrevd" />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        disabled
        value="Disabled"
      />
      <TextArea {...args} disabled value="Disabled" />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        value="Readonly"
      />
      <TextArea {...args} readOnly value="Readonly" />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextArea
        {...args}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        tip={args.tip ?? 'Dette er en hjelpetekst'}
      />
      <TextArea {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
    </StoryTemplate>
  );
};

export const Default = (args: TextAreaProps) => {
  return (
    <StoryTemplate title="TextArea - default" display="block">
      <TextArea {...args} />
    </StoryTemplate>
  );
};

export const WithLabel = (args: TextAreaProps) => {
  return (
    <StoryTemplate title="TextArea - with label">
      <TextArea {...args} label={args.label ?? 'Label'} />
    </StoryTemplate>
  );
};
