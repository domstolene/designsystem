import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  ddsProviderDecorator,
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { Button } from '../Button';
import { INPUT_SIZES } from '../helpers/Input';
import { CourtIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { Modal, ModalBody } from '../Modal';

import { Select, type SelectProps, createSelectOptions } from '.';

const meta: Meta<typeof Select> = {
  title: 'dds-components/Components/Select/Select',
  component: Select,
  argTypes: {
    width: responsivePropsArgTypes.width,
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isClearable: { control: 'boolean' },
    required: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    icon: { control: false },
    onChange: htmlEventArgType,
    onBlur: htmlEventArgType,
    onFocus: htmlEventArgType,
  },
  args: { onChange: fn(), onInputChange: fn() },
  parameters: {
    docs: {
      story: { height: '450px' },
    },
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue'],
    },
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = createSelectOptions(
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

export const Preview: Story = {
  args: { label: 'Label', options: options },
};

export const Overview: Story = {
  args: { label: 'Label', options: options },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <Select {...args} label="Required" required />
          <Select {...args} label="Med ikon" icon={CourtIcon} />
          <Select
            {...args}
            label="Med placeholder"
            placeholder="-- placeholder --"
          />
          <Select {...args} label="Med value" value={options[3]} />
          <Select
            {...args}
            label="Med hjelpetekst"
            tip="Dette er en hjelpetekst"
          />
        </StoryVStack>
        <StoryVStack>
          <Select {...args} label="IsDisabled" isDisabled value={options[3]} />
          <Select {...args} label="ReadOnly" readOnly value={options[3]} />
          <Select {...args} label="Med grupper" options={groupedOptions} />
          <Select
            {...args}
            label="Med defaultValue"
            defaultValue={options[3]}
          />
          <Select
            {...args}
            label="Med feilmelding"
            errorMessage="Dette er en feilmelding"
          />
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const Sizes: Story = {
  args: { options: options },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          {INPUT_SIZES.map(size => (
            <Select
              {...args}
              key={size}
              label={labelText(size)}
              componentSize={size}
            />
          ))}
        </StoryVStack>
        <StoryVStack>
          {INPUT_SIZES.map(size => (
            <Select
              {...args}
              key={size}
              label={labelText(size)}
              componentSize={size}
              icon={CourtIcon}
            />
          ))}
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const ResponsiveWidth: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    label: 'Label',
    options: options,
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};

export const CustomData: StoryObj<
  SelectProps<{
    name: string;
    employeeId: number;
  }>
> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { label: 'Saksbehandler' },
  render: args => {
    const employees = [
      { name: 'Ansatt 1', employeeId: 123 },
      { name: 'Ansatt 2', employeeId: 456 },
      { name: 'Ansatt 3', employeeId: 789 },
    ];
    return (
      <Select
        {...args}
        options={employees}
        getOptionLabel={option => option.name}
        getOptionValue={option => option.employeeId.toString()}
      />
    );
  },
};

export const CustomElement: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
          .story-custom-value {
            display: flex;
            gap: var(--dds-spacing-x0-5);
          }
        
          .story-custom-value__text {
              flex: 1;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            
          .story-custom-option__icon, .story-custom-value__icon {
            border-radius: var(--dds-border-radius-rounded);
            background: #bbdefb;
            width: var(--dds-size-icon-medium);
            height: var(--dds-size-icon-medium);
            min-width: var(--dds-size-icon-medium);
            }
          .story-custom-option__icon--selected {
            border: 2px solid var(--dds-color-border-action-default);
          }
          `}
        </style>
      </>
    ),
  ],
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
  render: args => <Select {...args} />,
};

export const InModal: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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
      className={`story-custom-option__icon ${isSelected && 'story-custom-option__icon--selected'} `}
    />
    {children}
  </>
);

const SingleElement = ({ children }: { children: React.ReactNode }) => (
  <div className="story-custom-value">
    <div className="story-custom-value__icon" />
    <div className="story-custom-value__text">{children}</div>
  </div>
);
