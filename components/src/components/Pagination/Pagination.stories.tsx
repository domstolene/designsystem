import { Pagination, PaginationProps } from '.';
import { StoryTemplate } from '../../storybook';

export default {
  title: 'Design system/Pagination',
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
    controls: {
      exclude: ['onChange', 'selectOptions'],
    },
  },
};

const customOptionsItemsAmount = 100;
const customOptions = [17, 32, customOptionsItemsAmount].map(o => ({
  label: o === customOptionsItemsAmount ? 'Alle' : o.toString(),
  value: o,
}));

export const Overview = (args: PaginationProps) => (
  <StoryTemplate
    title="Pagination - overview"
    gap="50px"
    containerStyle={{ alignItems: 'stretch' }}
  >
    <Pagination {...args} itemsAmount={70} />
    <Pagination {...args} itemsAmount={100} />
    <Pagination {...args} defaultActivePage={6} itemsAmount={100} />
    <Pagination {...args} withCounter itemsAmount={100} />
    <Pagination
      {...args}
      withCounter
      defaultItemsPerPage={20}
      itemsAmount={100}
    />
    <Pagination
      {...args}
      withPagination={false}
      withCounter
      itemsAmount={100}
    />
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
      withCounter
      withSelect
      defaultItemsPerPage={customOptions[0].value}
      selectOptions={customOptions}
      itemsAmount={customOptionsItemsAmount}
    />
  </StoryTemplate>
);

export const OverviewMobile = (args: PaginationProps) => (
  <StoryTemplate title="Pagination - mobile overview" gap="50px">
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
  </StoryTemplate>
);

export const Default = (args: PaginationProps) => (
  <StoryTemplate title="Pagination - default" display="block">
    <Pagination {...args} itemsAmount={args.itemsAmount || 100} />
  </StoryTemplate>
);
