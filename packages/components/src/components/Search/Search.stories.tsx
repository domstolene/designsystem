import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { VStack } from '../Stack';

import { Search } from '.';

export default {
  title: 'dds-components/Search',
  component: Search,
  argTypes: {
    tip: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

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
  'Øst-Agder',
];

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <VStack gap="x1">
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
          label: 'Secondary',
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
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => null }}
      />
      <Search
        {...args}
        label={args.label ?? 'Label'}
        buttonProps={{ onClick: () => null }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => null, loading: true }}
      />
    </VStack>
  ),
};

export const OverviewSizes: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Search {...args} componentSize="small" />
      <Search
        {...args}
        componentSize="small"
        buttonProps={{ onClick: () => null, label: 'Søk' }}
      />
      <Search {...args} componentSize="medium" />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => null, label: 'Søk' }}
      />
      <Search {...args} componentSize="large" />
      <Search
        {...args}
        componentSize="large"
        buttonProps={{ onClick: () => null, label: 'Søk' }}
      />
    </>
  ),
};

export const OverviewWithSuggestion: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <VStack gap="x1">
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="large" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="medium" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="small" />
      </Search.AutocompleteWrapper>
    </VStack>
  ),
};

export const WithButton: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Search {...args} buttonProps={{ onClick: () => null, label: 'Søk' }} />
  ),
};

export const WithSuggestions: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Search.AutocompleteWrapper data={{ array }}>
      <Search {...args} />
    </Search.AutocompleteWrapper>
  ),
};
