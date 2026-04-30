import preview from '#.storybook/preview';

import { Fieldset } from './Fieldset';
import { categoryHtml, commonArgTypesWithNodeChildren } from '../../storybook';
import { TextInput } from '../TextInput';
import { Legend } from '../Typography';
import { FieldsetGroup } from './FieldsetGroup';

const meta = preview.meta({
  title: 'dds-components/Components/Fieldset',
  component: Fieldset,
  argTypes: {
    disabled: { table: categoryHtml },
    ...commonArgTypesWithNodeChildren,
  },
});

export default meta;

export const Preview = meta.story({
  render: args => (
    <Fieldset {...args}>
      <Legend withMargins>Telefon og epost</Legend>
      <FieldsetGroup>
        <TextInput label="Telefon" />
        <TextInput label="Epost" />
      </FieldsetGroup>
    </Fieldset>
  ),
});
