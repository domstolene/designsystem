import { type Meta, type StoryObj } from '@storybook/react-vite';

import { htmlPropsArgType } from '../../../storybook/helpers';
import { Fieldset } from '../../Fieldset';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';
import { Legend } from '../../Typography';

import { Checkbox, CheckboxGroup } from '.';

export default {
  title: 'dds-components/Components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    label: 'Label',
    children: [
      <Checkbox key={0} label="Option 1" />,
      <Checkbox key={1} label="Option 2" />,
      <Checkbox key={2} label="Option 3" />,
    ],
  },
};

const fieldsetStyling = `
.fieldset-story-container div[role="group"] {
  flex-wrap: wrap;
  max-height: 100px;
  max-width: 500px; 
}
`;

export const WithFieldset: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>{fieldsetStyling}</style>
      </>
    ),
  ],
  args: {
    direction: 'column',
    children: [
      <Checkbox key={0} label="Strpl §171.1: Unndragelsesfare" />,
      <Checkbox key={1} label="Strpl §171.2:Bevisforspillelsesfare" />,
      <Checkbox key={2} label="Strpl §171.3: Gjentakelsesfare" />,
      <Checkbox key={4} label="Arrestordreloven § 13" />,
      <Checkbox key={5} label="Arrestordreloven § 13" />,
      <Checkbox key={6} label="Arrestordreloven § 13" />,
    ],
  },
  render: args => (
    <Fieldset>
      <Legend withMargins>Vilkår</Legend>
      <CheckboxGroup {...args} className="fieldset-story-container" />
    </Fieldset>
  ),
};

export const Overview: Story = {
  args: {
    label: 'Label',
    children: [
      <Checkbox key={0} label="Option 1" />,
      <Checkbox key={1} label="Option 2" />,
      <Checkbox key={2} label="Option 3" />,
    ],
  },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <CheckboxGroup {...args} />
        <CheckboxGroup {...args} disabled />
        <CheckboxGroup {...args} errorMessage="Dette er en feilmelding" />
        <CheckboxGroup {...args} direction="column" />
      </StoryVStack>
      <StoryVStack>
        <CheckboxGroup {...args} required />
        <CheckboxGroup {...args} readOnly />
        <CheckboxGroup {...args} tip="Dette er en hjelpetekst" />
      </StoryVStack>
    </StoryHStack>
  ),
};
