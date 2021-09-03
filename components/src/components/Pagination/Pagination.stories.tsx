import { Pagination as DDSPagination, PaginationProps } from './Pagination';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { Pagination } from './Pagination';

export default {
  title: 'Design system/Pagination',
  component: DDSPagination,
  argTypes: {
    withCounter: { control: 'boolean' },
    withPagination: { control: 'boolean' },
    withSelect: { control: 'boolean' },
    smallScreen: { control: 'boolean' },
    defaultItemsPerPage: { control: 'number' },
    defaultActivePage: { control: 'number' }
  },
  parameters: {
    controls: {
      exclude: ['onChange', 'selectOptions']
    }
  }
};

const customOptions = [17, 32, 100].map(o => ({
  label: o.toString(),
  value: o
}));

export const Overview = (args: PaginationProps) =>
  storyHTMLTemplate(
    'Pagination - overview',
    <>
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
        itemsAmount={100}
      />
    </>,
    '50px'
  );

export const OverviewMobile = (args: PaginationProps) =>
  storyHTMLTemplate(
    'Pagination - mobile overview',
    <>
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
    </>,
    '50px'
  );

export const Default = (args: PaginationProps) =>
  storyHTMLTemplate(
    'Pagination - default',
    <Pagination {...args} itemsAmount={args.itemsAmount || 100} />
  );
