import { type Meta, type StoryObj } from '@storybook/react';

import { StoryVStack } from '../Stack/utils';
import { StoryThemeProvider } from '../ThemeProvider/utils/StoryThemeProvider';

import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'dds-components/Pagination',
  component: Pagination,
  argTypes: {
    withCounter: { control: 'boolean' },
    withPagination: { control: 'boolean' },
    withSelect: { control: 'boolean' },
    defaultItemsPerPage: { control: 'number' },
    defaultActivePage: { control: 'number' },
    selectOptions: { control: false },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  decorators: [
    Story => (
      <StoryThemeProvider>
        <Story />
      </StoryThemeProvider>
    ),
  ],
};
export default meta;

const customOptionsItemsAmount = 100;
const customOptions = [17, 32, customOptionsItemsAmount].map(o => ({
  label: o === customOptionsItemsAmount ? 'Alle' : o.toString(),
  value: o,
}));

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: { itemsAmount: 100 },
};

export const Overview: Story = {
  args: { itemsAmount: 100 },
  render: args => (
    <StoryVStack gap="x3">
      <Pagination {...args} />
      <Pagination {...args} withCounter />
      <Pagination {...args} withSelect />
      <Pagination {...args} withCounter withSelect />
      <Pagination {...args} withCounter withSelect withPagination={false} />
      <Pagination {...args} withPagination={false} withCounter />
    </StoryVStack>
  ),
};

export const OverviewMobile: Story = {
  args: { itemsAmount: 100 },
  render: args => (
    <StoryVStack gap="x3">
      <Pagination {...args} smallScreenBreakpoint="xl" />
      <Pagination {...args} smallScreenBreakpoint="xl" withCounter />
      <Pagination {...args} smallScreenBreakpoint="xl" withSelect />
      <Pagination {...args} smallScreenBreakpoint="xl" withCounter withSelect />
    </StoryVStack>
  ),
};

export const CustomOptions: Story = {
  args: { itemsAmount: 100 },
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

export const Responsive: Story = {
  args: { smallScreenBreakpoint: 'sm', itemsAmount: 100 },
  render: args => <Pagination {...args} withCounter withSelect />,
};

export const DefaultActivePage: Story = {
  args: { itemsAmount: 100 },
  render: args => <Pagination {...args} defaultActivePage={6} />,
};

export const DefaultItemsPerPage: Story = {
  args: { itemsAmount: 100 },
  render: args => <Pagination {...args} withCounter defaultItemsPerPage={48} />,
};
