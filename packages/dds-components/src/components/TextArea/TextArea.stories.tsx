import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { TextArea } from './TextArea';
import {
  categoryHtml,
  ddsProviderDecorator,
  htmlEventArgType,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/TextArea',
  component: TextArea,
  argTypes: {
    width: responsivePropsArgTypes.width,
    maxLength: { control: 'number', table: categoryHtml },
    required: { control: 'boolean', table: categoryHtml },
    disabled: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean', table: categoryHtml },
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Preview: Story = {
  args: { label: 'Label' },
};

export const Overview: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <TextArea {...args} required label="Required" />
        <TextArea
          {...args}
          errorMessage={args.errorMessage ?? 'Feilmelding ved valideringsfeil'}
        />
        <TextArea {...args} label="Med tegnteller" maxLength={200} />
        <TextArea
          {...args}
          maxLength={200}
          tip={'Hjelpetekst med tegnteller'}
        />
      </StoryVStack>
      <StoryVStack>
        <TextArea {...args} disabled label="Disabled" />
        <TextArea {...args} readOnly label="Readonly" />
        <TextArea {...args} tip={'Hjelpetekst'} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const ResponsiveWidth: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    label: 'Label',
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};
