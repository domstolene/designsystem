import { type Meta, type StoryObj } from '@storybook/react';

import { StoryHStack, StoryVStack } from '../Stack/utils';

import { Search } from '.';

export default {
  title: 'dds-components/Search',
  component: Search,
  argTypes: {
    buttonProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Search>;

const array = [
  'lala',
  'ghostbusters',
  'ghostbusters A',
  'buardi',
  'ghost3',
  'ghost',
  'ost',
  'too',
  'ghostbusters B',
  'ghos',
  'to ord',
  'ghost2',
  'Jan-Ole Olsen',
  'Jan-Ole Osten',
  'Øst-Agder',
];

type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export const Overview: Story = {
  render: args => (
    <StoryVStack>
      <Search {...args} componentSize="medium" />
      <Search {...args} componentSize="medium" tip="Dette er en hjelpetekst" />
      <Search {...args} label={args.label ?? 'Label'} />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => null, label: 'Søk' }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{
          onClick: () => null,
          purpose: 'secondary',
        }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => null, label: 'Custom label' }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => null, loading: true }}
      />
    </StoryVStack>
  ),
};

export const OverviewSizes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Search {...args} componentSize="small" />
        <Search {...args} componentSize="medium" />
        <Search {...args} componentSize="large" />
      </StoryVStack>
      <StoryVStack>
        <Search
          {...args}
          componentSize="small"
          buttonProps={{ onClick: () => null, label: 'Søk' }}
        />
        <Search
          {...args}
          componentSize="medium"
          buttonProps={{ onClick: () => null, label: 'Søk' }}
        />
        <Search
          {...args}
          componentSize="large"
          buttonProps={{ onClick: () => null, label: 'Søk' }}
        />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const OverviewWithSuggestion: Story = {
  render: args => (
    <StoryVStack>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="large" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="medium" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="small" />
      </Search.AutocompleteWrapper>
    </StoryVStack>
  ),
};

export const WithButton: Story = {
  render: args => (
    <Search {...args} buttonProps={{ onClick: () => null, label: 'Søk' }} />
  ),
};

export const WithSuggestions: Story = {
  parameters: { docs: { story: { height: '450px' } } },
  render: args => (
    <>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} />
      </Search.AutocompleteWrapper>
      <div>
        Elementer i listen:{' '}
        {array.map((item, index) => (
          <span>
            {item}
            {index !== array.length - 1 && ', '}
          </span>
        ))}
        .
      </div>
    </>
  ),
};
