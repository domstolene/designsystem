import { StoryTemplate } from '../../storybook';

import React from 'react';
import styled from 'styled-components';
import { createSelectOptions, Select, SelectOption, SelectProps } from '.';

export default {
  title: 'design system/Select/CustomSelect',
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
  'Alternativ 4'
);

type SingleSelectProps = SelectProps<SelectOption, false>;

export const Overview = (args: SingleSelectProps) => {
  return (
    <StoryTemplate
      title="Select - overview"
      gap="25px"
      display="grid"
      columnsAmount={2}
    >
      <Select
        {...args}
        label={args.label || 'Egendefinert styling'}
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

const OptionIcon = styled.div<{ selected: boolean }>`
  border-radius: 16px;
  background: #bbdefb;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border: ${props => props.selected && '2px solid rgba(46, 120, 170, 1)'};
`;

const SingleIcon = styled.div`
  border-radius: 12px;
  background: #bbdefb;
  width: 24px;
  height: 24px;
  min-width: 24px;
`;

const OptionElement = ({
  isSelected,
  children,
}: {
  isSelected: boolean;
  children: React.ReactNode;
}) => (
  <>
    <OptionIcon selected={isSelected} />
    {children}
  </>
);

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const TruncatedText = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SingleElement = ({ children }: { children: React.ReactNode }) => (
  <Container>
    <SingleIcon />
    <TruncatedText>{children}</TruncatedText>
  </Container>
);
