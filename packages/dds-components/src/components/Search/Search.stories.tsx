import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  htmlEventArgType,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Search } from '.';

export default {
  title: 'dds-components/Components/Search',
  component: Search,
  argTypes: {
    buttonProps: { control: false },
    width: responsivePropsArgTypes.width,
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
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
      <Search {...args} />
      <Search {...args} tip="Dette er en hjelpetekst" />
      <Search {...args} label={args.label ?? 'Label'} />
      <Search {...args} showIcon={false} />
      <Search {...args} buttonProps={{ onClick: () => null, label: 'Søk' }} />
      <Search
        {...args}
        buttonProps={{
          onClick: () => null,
          purpose: 'secondary',
        }}
      />
      <Search
        {...args}
        buttonProps={{ onClick: () => null, label: 'Custom label' }}
      />
      <Search {...args} buttonProps={{ onClick: () => null, loading: true }} />
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

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    label: 'Label',
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};
