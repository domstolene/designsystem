import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta } from '@storybook/react';

import { CourtIcon } from '../Icon/icons';

import { Select, type SelectProps, createSelectOptions } from '.';

export default {
  title: 'dds-components/Select/SingleValue',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    tip: { control: 'text' },
    errorMessage: { control: 'text' },
    width: { control: 'text' },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isClearable: { control: 'boolean' },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    icon: { control: false },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue'],
    },
  },
} satisfies Meta<typeof Select>;

const options = createSelectOptions(
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
);

const optionsLong = createSelectOptions(
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
  'Alternativ 5',
  'Alternativ 6',
  'Alternativ 7',
);

export const Overview = (args: SelectProps) => {
  return (
    <StoryTemplate gap="25px" display="grid" $columnsAmount={2}>
      <Select {...args} label={args.label ?? 'Label'} options={options} />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        required
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        isDisabled
        options={options}
        value={options[3]}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        options={options}
        value={options[3]}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        icon={CourtIcon}
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        errorMessage="Dette er en feilmelding"
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        tip="Dette er en hjelpetekst"
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        placeholder="Annerledes placeholder"
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        defaultValue={options[0]}
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        value={options[3]}
        options={options}
      />
      <Select {...args} options={options} />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: SelectProps) => {
  return (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <Select {...args} componentSize="medium" options={options} />
      <Select
        {...args}
        componentSize="medium"
        icon={CourtIcon}
        options={options}
      />
      <Select {...args} componentSize="small" options={options} />
      <Select
        {...args}
        componentSize="small"
        icon={CourtIcon}
        options={options}
      />
      <Select {...args} componentSize="tiny" options={options} />
      <Select
        {...args}
        componentSize="tiny"
        icon={CourtIcon}
        options={options}
      />
    </StoryTemplate>
  );
};

export const Default = (args: SelectProps) => {
  return (
    <StoryTemplate>
      <Select {...args} options={options} label={args.label ?? 'Label'} />
    </StoryTemplate>
  );
};

export const WithGroups = (args: SelectProps) => {
  const groupedOptions = [
    {
      label: 'Gruppe 1',
      options: [
        { label: 'Alternativ 1', value: 'Alternativ 1' },
        { label: 'Alternativ 2', value: 'Alternativ 2' },
      ],
    },
    {
      label: 'Gruppe 2',
      options: [
        { label: 'Alternativ 3', value: 'Alternativ 3' },
        { label: 'Alternativ 4', value: 'Alternativ 4' },
      ],
    },
  ];
  return (
    <StoryTemplate>
      <Select {...args} options={groupedOptions} />
    </StoryTemplate>
  );
};

export const ManyItems = (args: SelectProps) => {
  return (
    <StoryTemplate>
      <Select {...args} label={args.label ?? 'Label'} options={optionsLong} />
    </StoryTemplate>
  );
};

export const CustomData = (
  args: SelectProps<{ name: string; employeeId: number }>,
) => {
  const employees = [
    { name: 'Petter', employeeId: 123 },
    { name: 'Marianne', employeeId: 456 },
    { name: 'Endre', employeeId: 789 },
  ];
  return (
    <StoryTemplate>
      <Select
        {...args}
        label={args.label ?? 'Saksbehandler'}
        options={employees}
        getOptionLabel={option => option.name}
        getOptionValue={option => option.employeeId.toString()}
      />
    </StoryTemplate>
  );
};

// export const InDrawer = () => {
//   return (
//     <DrawerGroup>
//       <Button>Åpne skuff</Button>
//       <Drawer>
//         <Select label="Velg" options={options} />
//       </Drawer>
//     </DrawerGroup>
//   );
// };

// export const InModal = () => {
//   const [isOpen, setOpen] = useState(true);
//   return (
//     <>
//       <Button onClick={() => setOpen(true)}>Åpne</Button>
//       <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
//         <ModalBody>
//           <Select label="Velg" options={options} />
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };
