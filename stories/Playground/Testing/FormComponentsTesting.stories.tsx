import { type Meta } from '@storybook/react-vite';

import { type InputSize } from '../../../packages/dds-components/src/components/helpers/Input';
import { StoryThemeProvider } from '../../../packages/dds-components/src/components/ThemeProvider/utils/StoryThemeProvider';
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
import { StoryLabel } from '../../../packages/dds-components/src/storybook/helpers';

const meta: Meta = {
  title: 'Playground/Testing',
  decorators: [
    Story => (
      <StoryThemeProvider>
        <Story />
      </StoryThemeProvider>
    ),
  ],
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
      <Select
        componentSize={size}
        icon={icon}
        options={[{ label: 'a', value: 'a' }]}
        value={{ label: 'a', value: 'a' }}
      />
      <NativeSelect componentSize={size} value="a" clearable>
        <option value=""></option>
        <option value="a">a</option>
      </NativeSelect>
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
          <HStack>{renderInputs('medium')}</HStack>
          <HStack>{renderInputs('small')}</HStack>
          <HStack>{renderInputs('xsmall')}</HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
