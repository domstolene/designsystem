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
  nativeDateToCalendarDate,
  nativeDateToTime,
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

const value = 'test';
const sValue = { label: 'test', value: 'test' };
const date = new Date(2024, 2, 11, 2, 30);
const dValue = nativeDateToCalendarDate(date);
const tValue = nativeDateToTime(date);

function renderInputs(size: InputSize) {
  return (
    <>
      <TextInput componentSize={size} icon={icon} defaultValue={value} />
      <DatePicker componentSize={size} defaultValue={dValue} />
      <TimePicker componentSize={size} defaultValue={tValue} />
      {size !== 'xsmall' && (
        <Search componentSize={size} defaultValue={value} />
      )}
      <DatePicker componentSize={size} defaultValue={dValue} clearable />
      <Select
        componentSize={size}
        icon={icon}
        options={[sValue]}
        defaultValue={sValue}
      />
      <NativeSelect componentSize={size} icon={icon} value="test" clearable>
        <option value=""></option>
        <option value="test">test</option>
      </NativeSelect>
      <Select
        isMulti
        componentSize={size}
        icon={icon}
        options={[sValue]}
        defaultValue={sValue}
      />
    </>
  );
}

export const FormComponents = () => {
  return (
    <VStack gap="x1.5">
      <LocalMessage>
        Her tester vi om skjemakomponenter ser likt ut.
      </LocalMessage>
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
