import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import {
  StoryLabel,
  commonArgTypes,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { Button } from '../Button';
import { VStack } from '../layout';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { StoryThemeProvider } from '../ThemeProvider/utils/StoryThemeProvider';

import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'dds-components/Components/Pagination',
  component: Pagination,
  argTypes: {
    selectOptions: { control: false },
    ...commonArgTypes,
  },
  args: { onChange: fn(), onSelectOptionChange: fn() },
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

export const WithSelect: Story = {
  args: { itemsAmount: 100, withSelect: true },
};

export const WithCounter: Story = {
  args: { itemsAmount: 100, withCounter: true },
};

export const WithCounterAndSelect: Story = {
  args: { itemsAmount: 100, withCounter: true, withSelect: true },
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

export const Controlled: Story = {
  args: { itemsAmount: 100 },
  render: args => {
    const ControlledExample = () => {
      const [currentPage, setCurrentPage] = useState(1);

      return (
        <StoryVStack gap="x2">
          <StoryHStack gap="x0.5" alignItems="center">
            <span>Ekstern kontroll:</span>
            <Button
              size="small"
              onClick={() => setCurrentPage(1)}
              purpose={currentPage === 1 ? 'primary' : 'secondary'}
            >
              Gå til side 1
            </Button>
            <Button
              size="small"
              onClick={() => setCurrentPage(5)}
              purpose={currentPage === 5 ? 'primary' : 'secondary'}
            >
              Gå til side 5
            </Button>
            <Button
              size="small"
              onClick={() => setCurrentPage(10)}
              purpose={currentPage === 10 ? 'primary' : 'secondary'}
            >
              Gå til side 10
            </Button>
          </StoryHStack>
          <Pagination
            {...args}
            activePage={currentPage}
            onChange={(_, page) => {
              setCurrentPage(page);
            }}
          />
        </StoryVStack>
      );
    };

    return <ControlledExample />;
  },
};
