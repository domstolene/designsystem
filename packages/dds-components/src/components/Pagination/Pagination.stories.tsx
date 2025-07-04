import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  htmlPropsArgType,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';
import { StoryThemeProvider } from '../ThemeProvider/utils/StoryThemeProvider';

import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'dds-components/Components/Pagination',
  component: Pagination,
  argTypes: {
    selectOptions: { control: false },
    htmlProps: htmlPropsArgType,
  },
  args: { onChange: fn(), onSelectOptionChange: fn() },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
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
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt.',
      ),
  ],
};

export const DefaultActivePage: Story = {
  args: { itemsAmount: 100 },
  render: args => <Pagination {...args} defaultActivePage={6} />,
};

export const DefaultItemsPerPage: Story = {
  args: { itemsAmount: 100 },
  render: args => <Pagination {...args} withCounter defaultItemsPerPage={48} />,
};
