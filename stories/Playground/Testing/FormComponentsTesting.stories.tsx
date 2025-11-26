import { type Meta } from '@storybook/react-vite';

import { type InputSize } from '../../../packages/dds-components/src/components/helpers/Input';
import {
  DatePicker,
  HStack,
  LocalMessage,
  MailIcon,
  NativeSelect,
  Search,
  Select,
  TextInput,
  TimePicker,
  VStack,
} from '../../../packages/dds-components/src/index';
import {
  StoryLabel,
  ddsProviderDecorator,
} from '../../../packages/dds-components/src/storybook';

const meta: Meta = {
  title: 'Playground/Testing',
  decorators: [ddsProviderDecorator],
};
export default meta;

const icon = MailIcon;

function renderInputs(size: InputSize) {
  return (
    <>
      <TextInput componentSize={size} icon={icon} />
      <DatePicker componentSize={size} />
      <TimePicker componentSize={size} />
      {size !== 'xsmall' && <Search componentSize={size} />}
      <DatePicker componentSize={size} clearable />
      <Select
        componentSize={size}
        icon={icon}
        options={[{ label: 'a', value: 'a' }]}
        value={{ label: 'a', value: 'a' }}
      />
      <NativeSelect componentSize={size} icon={icon} value="a" clearable>
        <option value=""></option>
        <option value="a">a</option>
      </NativeSelect>
      <Select
        isMulti
        componentSize={size}
        icon={icon}
        options={[{ label: 'a', value: 'a' }]}
        value={{ label: 'a', value: 'a' }}
      />
    </>
  );
}

export const FormComponents = () => {
  return (
    <VStack gap="x1.5">
      <LocalMessage message="Her tester vi om skjemakomponenter ser likt ut." />
      <VStack gap="x0.25">
        <StoryLabel>Horisontal plassering på ikonene</StoryLabel>
        <VStack gap="x1">
          {renderInputs('medium')}
          {renderInputs('small')}
          {renderInputs('xsmall')}
        </VStack>
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel> Høyde og vertikal plassering på ikonene</StoryLabel>
        <VStack gap="x1">
          <HStack width="fit-content">{renderInputs('medium')}</HStack>
          <HStack width="fit-content">{renderInputs('small')}</HStack>
          <HStack width="fit-content">{renderInputs('xsmall')}</HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
