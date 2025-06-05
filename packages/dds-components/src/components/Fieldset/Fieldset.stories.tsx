import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Fieldset } from './Fieldset';
import { categoryHtml, htmlPropsArgType } from '../../storybook/helpers';
import { TextInput } from '../TextInput';
import { Legend } from '../Typography';
import { FieldsetGroup } from './FieldsetGroup';

export default {
  title: 'dds-components/Components/Fieldset',
  component: Fieldset,
  argTypes: {
    disabled: { table: categoryHtml },
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
} satisfies Meta<typeof Fieldset>;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  render: args => (
    <Fieldset {...args}>
      <Legend withMargins>Telefon og epost</Legend>
      <FieldsetGroup>
        <TextInput label="Telefon" />
        <TextInput label="Epost" />
      </FieldsetGroup>
    </Fieldset>
  ),
};
