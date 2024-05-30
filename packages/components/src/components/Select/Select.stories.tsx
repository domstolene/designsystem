import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Drawer, DrawerGroup } from '../Drawer';
import { CourtIcon } from '../Icon/icons';
import { Modal, ModalBody } from '../Modal';
import { StoryHStack, StoryVStack } from '../Stack/utils';

import { Select, type SelectProps, createSelectOptions } from '.';

export default {
  title: 'dds-components/Select/Select',
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

type Story = StoryObj<typeof Select>;

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

export const Default: Story = {
  args: { label: 'Label', options: options },
};

export const Overview: Story = {
  args: { label: 'Label', options: options },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <Select {...args} />
          <Select {...args} isDisabled value={options[3]} />
          <Select {...args} icon={CourtIcon} />
          <Select {...args} tip="Dette er en hjelpetekst" />
        </StoryVStack>
        <StoryVStack>
          <Select {...args} required />
          <Select {...args} readOnly value={options[3]} />
          <Select {...args} errorMessage="Dette er en feilmelding" />
          <Select {...args} placeholder="Annerledes placeholder" />
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const OverviewSizes: Story = {
  args: { options: options },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <Select {...args} componentSize="medium" />
          <Select {...args} componentSize="small" />
          <Select {...args} componentSize="tiny" />
        </StoryVStack>
        <StoryVStack>
          <Select {...args} componentSize="medium" icon={CourtIcon} />
          <Select {...args} componentSize="small" icon={CourtIcon} />
          <Select {...args} componentSize="tiny" icon={CourtIcon} />
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const WithGroups: Story = {
  args: { label: 'Label', options: groupedOptions },
};

export const ManyItems: Story = {
  args: { label: 'Label', options: optionsLong },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Label',
    options: options,
    defaultValue: options[0],
  },
};

export const WithValue: Story = {
  args: {
    label: 'Label',
    options: options,
    value: options[0],
  },
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
    <Select
      {...args}
      label={args.label ?? 'Saksbehandler'}
      options={employees}
      getOptionLabel={option => option.name}
      getOptionValue={option => option.employeeId.toString()}
    />
  );
};

export const CustomElement: Story = {
  args: {
    label: 'Label',
    options: options,
    customOptionElement: props => (
      <OptionElement isSelected={props.isSelected}>
        {props.children}
      </OptionElement>
    ),
    customSingleValueElement: props => (
      <SingleElement>{props.children}</SingleElement>
    ),
  },
};

export const InDrawer: Story = {
  args: { label: 'Velg', options: options },
  render: args => {
    return (
      <DrawerGroup>
        <Button>Åpne skuff</Button>
        <Drawer>
          <Select {...args} />
        </Drawer>
      </DrawerGroup>
    );
  },
};

export const InModal: Story = {
  args: { label: 'Velg', options: options },
  render: args => {
    const [isOpen, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Åpne modal</Button>
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
          <ModalBody>
            <Select {...args} />
          </ModalBody>
        </Modal>
      </>
    );
  },
};

const OptionElement = ({
  isSelected,
  children,
}: {
  isSelected: boolean;
  children: React.ReactNode;
}) => (
  <>
    <div
      style={{
        borderRadius: '16px',
        background: '#bbdefb',
        width: '32px',
        height: '32px',
        minWidth: '32px',
        border: isSelected ? '2px solid rgba(46, 120, 170, 1)' : undefined,
      }}
    />
    {children}
  </>
);

const SingleElement = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <div
      style={{
        borderRadius: '12px',
        background: '#bbdefb',
        width: '24px',
        height: '24px',
        minWidth: '24px',
      }}
    />
    <div
      style={{
        flex: '1',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {children}
    </div>
  </div>
);
