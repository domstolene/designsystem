import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { SEARCH_SIZES } from './Search.utils';
import {
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
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

const elementsInfo = (
  <div>
    Elementer i listen:{' '}
    {array.map(
      (item, index) => `${item}${index !== array.length - 1 ? ', ' : ''}`,
    )}
    .
  </div>
);

type Story = StoryObj<typeof Search>;

export const Preview: Story = {};

export const Overview: Story = {
  render: args => (
    <StoryVStack>
      <Search {...args} />
      <Search {...args} tip="Dette er en hjelpetekst" />
      <Search {...args} label={args.label ?? 'Label'} />
      <Search {...args} showIcon={false} />
      <Search {...args} buttonProps={{ onClick: () => null }} />
      <Search
        {...args}
        buttonProps={{
          onClick: () => null,
          purpose: 'secondary',
          label: 'Secondary knapp',
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

export const Sizes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {SEARCH_SIZES.map(size => (
          <Search {...args} label={labelText(size)} componentSize={size} />
        ))}
      </StoryVStack>
      <StoryVStack>
        {SEARCH_SIZES.map(size => (
          <Search
            {...args}
            label={labelText(size)}
            componentSize={size}
            buttonProps={{ onClick: () => null, label: 'Søk' }}
          />
        ))}
      </StoryVStack>
    </StoryHStack>
  ),
};

export const SizesWithSuggestions: Story = {
  render: args => (
    <StoryVStack>
      {SEARCH_SIZES.map(size => (
        <Search.AutocompleteWrapper data={{ array }} key={size}>
          <Search {...args} label={labelText(size)} componentSize={size} />
        </Search.AutocompleteWrapper>
      ))}
      {elementsInfo}
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
      {elementsInfo}
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
