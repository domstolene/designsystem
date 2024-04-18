import { StoryTemplate } from '@norges-domstoler/storybook-components';
import React from 'react';

import {
  Select,
  type SelectOption,
  type SelectProps,
  createSelectOptions,
} from '.';

export default {
  title: 'dds-components/Select/CustomSelect',
  component: Select,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isClearable: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    isLoading: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue'],
    },
  },
};

const options = createSelectOptions(
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
);

type SingleSelectProps = SelectProps<SelectOption, false>;

export const Example = (args: SingleSelectProps) => {
  return (
    <StoryTemplate display="block">
      <Select
        {...args}
        label={args.label ?? 'Egendefinert styling'}
        options={options}
        customOptionElement={props => (
          <OptionElement isSelected={props.isSelected}>
            {props.children}
          </OptionElement>
        )}
        customSingleValueElement={props => (
          <SingleElement>{props.children}</SingleElement>
        )}
      />
    </StoryTemplate>
  );
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
