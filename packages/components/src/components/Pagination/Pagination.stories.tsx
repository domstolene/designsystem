import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { VStack } from '../Stack';

import { Pagination } from '.';

export default {
  title: 'dds-components/Pagination',
  component: Pagination,
  argTypes: {
    withCounter: { control: 'boolean' },
    withPagination: { control: 'boolean' },
    withSelect: { control: 'boolean' },
    smallScreen: { control: 'boolean' },
    defaultItemsPerPage: { control: 'number' },
    defaultActivePage: { control: 'number' },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

const customOptionsItemsAmount = 100;
const customOptions = [17, 32, customOptionsItemsAmount].map(o => ({
  label: o === customOptionsItemsAmount ? 'Alle' : o.toString(),
  value: o,
}));

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: { itemsAmount: 100 },
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
    <VStack gap="x3" align="start">
      <Pagination {...args} itemsAmount={100} />

      <Pagination {...args} withCounter itemsAmount={100} />
      <Pagination {...args} withSelect itemsAmount={100} />
      <Pagination {...args} withCounter withSelect itemsAmount={100} />
      <Pagination
        {...args}
        withCounter
        withSelect
        withPagination={false}
        itemsAmount={100}
      />
      <Pagination
        {...args}
        withPagination={false}
        withCounter
        itemsAmount={100}
      />
    </VStack>
  ),
};

export const OverviewMobile: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <VStack gap="x3">
      <Pagination {...args} smallScreen itemsAmount={100} />
      <Pagination {...args} smallScreen withCounter itemsAmount={100} />
      <Pagination
        {...args}
        smallScreen
        withSelect
        itemsAmount={args.itemsAmount || 100}
      />
      <Pagination
        {...args}
        smallScreen
        withCounter
        withSelect
        itemsAmount={args.itemsAmount || 100}
      />
    </VStack>
  ),
};

export const CustomOptions: Story = {
  args: { itemsAmount: 100 },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Pagination
      {...args}
      withCounter
      withSelect
      defaultItemsPerPage={customOptions[0].value}
      selectOptions={customOptions}
      itemsAmount={customOptionsItemsAmount}
    />
  ),
};

export const DefaultActivePage: Story = {
  args: { itemsAmount: 100 },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => <Pagination {...args} defaultActivePage={6} />,
};

export const DefaultItemsPerPage: Story = {
  args: { itemsAmount: 100 },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => <Pagination {...args} withCounter defaultItemsPerPage={48} />,
};
