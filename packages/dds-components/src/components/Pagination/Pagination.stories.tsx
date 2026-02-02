import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  StoryLabel,
  commonArgTypes,
  ddsProviderDecorator,
  windowWidthDecorator,
} from '../../storybook';
import { VStack } from '../layout';
import { StoryVStack } from '../layout/Stack/utils';

import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'dds-components/Components/Pagination',
  component: Pagination,
  argTypes: {
    selectOptions: { control: false },
    ...commonArgTypes,
  },
  args: { onChange: fn(), onSelectOptionChange: fn() },
  decorators: [ddsProviderDecorator],
};
export default meta;

const customOptionsItemsAmount = 100;
const customOptions = [17, 32, customOptionsItemsAmount].map(o => ({
  label: o === customOptionsItemsAmount ? 'Alle' : o.toString(),
  value: o,
}));

type Story = StoryObj<typeof Pagination>;

export const Preview: Story = {
  args: { itemsAmount: 100 },
};

export const Variants: Story = {
  args: { itemsAmount: 100 },
  render: args => (
    <StoryVStack gap="x2.5">
      <VStack gap="x0.25">
        <StoryLabel>Med counter</StoryLabel>
        <Pagination {...args} withCounter />
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Med select</StoryLabel>
        <Pagination {...args} withSelect />
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Med select og counter</StoryLabel>
        <Pagination {...args} withCounter withSelect />
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Kun select og counter</StoryLabel>
        <Pagination {...args} withCounter withSelect withPagination={false} />
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Kun Counter</StoryLabel>
        <Pagination {...args} withPagination={false} withCounter />
      </VStack>
    </StoryVStack>
  ),
};

export const VariantsSmallScreen: Story = {
  args: { itemsAmount: 100 },
  render: args => (
    <StoryVStack gap="x2.5">
      <VStack gap="x0.25">
        <StoryLabel>Pagination</StoryLabel>
        <Pagination {...args} smallScreenBreakpoint="xl" />
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Med counter</StoryLabel>
        <Pagination {...args} smallScreenBreakpoint="xl" withCounter />
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Med select</StoryLabel>
        <Pagination {...args} smallScreenBreakpoint="xl" withSelect />
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Med select og counter</StoryLabel>
        <Pagination
          {...args}
          smallScreenBreakpoint="xl"
          withCounter
          withSelect
        />
      </VStack>
    </StoryVStack>
  ),
};

export const SmallScreen: Story = {
  args: { itemsAmount: 100, smallScreenBreakpoint: 'xl' },
};

export const CustomOptions: Story = {
  args: {
    itemsAmount: customOptionsItemsAmount,
    defaultItemsPerPage: customOptions[0].value,
    withCounter: true,
    withSelect: true,
    selectOptions: customOptions,
  },
};

export const Responsive: Story = {
  args: {
    smallScreenBreakpoint: 'sm',
    itemsAmount: 100,
    withCounter: true,
    withSelect: true,
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt.',
      ),
  ],
};

export const DefaultActivePage: Story = {
  args: { itemsAmount: 100, defaultActivePage: 6 },
};
