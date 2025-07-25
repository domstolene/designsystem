import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { TextArea } from './TextArea';
import {
  categoryHtml,
  htmlEventArgType,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/TextArea',
  component: TextArea,
  argTypes: {
    width: { control: 'text' },
    maxLength: { control: 'number', table: categoryHtml },
    required: { control: 'boolean', table: categoryHtml },
    disabled: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean', table: categoryHtml },
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
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
        <TextArea {...args} />
        <TextArea {...args} disabled value="Disabled" />
        <TextArea
          {...args}
          errorMessage={
            args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
          }
        />
        <TextArea
          {...args}
          maxLength={200}
          tip={'Dette er en hjelpetekst med tegnteller'}
        />
      </StoryVStack>
      <StoryVStack>
        <TextArea {...args} required value="Påkrevd" />
        <TextArea {...args} readOnly value="Readonly" />
        <TextArea {...args} tip={'Dette er en hjelpetekst'} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const WithCharacterCount: Story = {
  args: { label: 'Label', maxLength: 200 },
};

export const ResponsiveWidth: Story = {
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
