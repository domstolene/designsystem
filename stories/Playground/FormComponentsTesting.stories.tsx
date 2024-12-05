import {
  DatePicker,
  HStack,
  MailIcon,
  Search,
  Select,
  TextInput,
  TimePicker,
  VStack,
} from '../../packages/dds-components/src/index';

export default {
  title: 'Playground/Testing',
};

export const FormComponents = () => {
  return (
    <VStack align="start" gap="x1">
      <HStack align="start" gap="x1">
        <VStack align="start" gap="x1">
          <TextInput />
          <TextInput componentSize="small" />
          <TextInput componentSize="tiny" />
        </VStack>
        <VStack align="start" gap="x1">
          <TextInput icon={MailIcon} />
          <Search />
          <DatePicker componentSize="medium" />
          <TimePicker componentSize="medium" />
          <Select icon={MailIcon} options={[{ label: 'a', value: 'a' }]} />
          <TextInput componentSize="small" icon={MailIcon} />
          <Search componentSize="small" />
          <DatePicker componentSize="small" />
          <TimePicker componentSize="small" />
          <Select
            icon={MailIcon}
            options={[{ label: 'a', value: 'a' }]}
            componentSize="small"
          />
          <TextInput componentSize="tiny" icon={MailIcon} />
          <DatePicker componentSize="tiny" />
          <TimePicker componentSize="tiny" />
          <Select
            icon={MailIcon}
            options={[{ label: 'a', value: 'a' }]}
            componentSize="tiny"
          />
        </VStack>
      </HStack>
      <HStack align="start" gap={0}>
        <TextInput componentSize="medium" icon={MailIcon} />
        <Search componentSize="medium" />
        <DatePicker componentSize="medium" />
        <Select
          icon={MailIcon}
          options={[{ label: 'a', value: 'a' }]}
          componentSize="medium"
        />
        <Select
          icon={MailIcon}
          options={[{ label: 'a', value: 'a' }]}
          componentSize="medium"
          isMulti
        />
      </HStack>
      <HStack align="start" gap={0}>
        <TextInput componentSize="small" icon={MailIcon} />
        <Search componentSize="small" />
        <DatePicker componentSize="small" />
        <Select
          icon={MailIcon}
          options={[{ label: 'a', value: 'a' }]}
          componentSize="small"
        />
        <Select
          icon={MailIcon}
          options={[{ label: 'a', value: 'a' }]}
          componentSize="small"
          isMulti
        />
      </HStack>
      <HStack align="start" gap={0}>
        <TextInput componentSize="tiny" icon={MailIcon} />
        <DatePicker componentSize="tiny" />
        <Select
          icon={MailIcon}
          options={[{ label: 'a', value: 'a' }]}
          componentSize="tiny"
        />
        <Select
          icon={MailIcon}
          options={[{ label: 'a', value: 'a' }]}
          componentSize="tiny"
          isMulti
        />
      </HStack>
    </VStack>
  );
};
