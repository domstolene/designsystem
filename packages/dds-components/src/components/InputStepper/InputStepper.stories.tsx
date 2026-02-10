import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { InputStepper } from './InputStepper';
import { INPUT_STEPPER_SIZES } from './InputStepper.types';
import {
  categoryHtml,
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/InputStepper',
  component: InputStepper,
  argTypes: {
    defaultValue: { control: 'number', table: categoryHtml },
    disabled: { table: categoryHtml },
    value: { control: 'number', table: categoryHtml },
    ...commonArgTypes,
    width: responsivePropsArgTypes.width,
  },
  args: { onChange: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof InputStepper>;

type Story = StoryObj<typeof InputStepper>;

export const Preview: Story = {
  args: {
    maxValue: 5,
  },
  render: args => {
    return <InputStepper {...args} label="Label" />;
  },
};

export const Sizes: Story = {
  args: {
    maxValue: 5,
  },
  render: args => {
    return (
      <StoryHStack>
        {INPUT_STEPPER_SIZES.map(size => (
          <InputStepper
            {...args}
            key={size}
            label={labelText(size)}
            componentSize={size}
          />
        ))}
      </StoryHStack>
    );
  },
};

export const Overview: Story = {
  args: {
    maxValue: 5,
  },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <InputStepper {...args} label="Label" maxValue={5} />
          <InputStepper {...args} label="Error" errorMessage="Feilmelding" />
          <InputStepper {...args} label="Hjelpetekst" tip="Hjelpetekst" />
        </StoryVStack>
        <StoryVStack>
          <InputStepper {...args} label="Required" required />
          <InputStepper {...args} label="ReadOnly" readOnly />
          <InputStepper {...args} label="Disabled" disabled />
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const ResponsiveWidth: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '50%',
      lg: '180px',
      xl: '180px',
    },
    maxValue: 5,
  },
};
