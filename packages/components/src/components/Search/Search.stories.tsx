import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Search, SearchProps } from '.';

export default {
  title: 'dds-components/Search',
  component: Search,
  argTypes: {
    tip: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'buttonProps'],
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

export const Overview = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - overview">
      <Search {...args} componentSize="medium" />
      <Search {...args} componentSize="medium" tip="Dette er en hjelpetekst" />
      <Search {...args} label={args.label ?? 'Label'} />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{
          onClick: () => {},
          label: 'Secondary',
          purpose: 'secondary',
        }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => {}, label: 'Custom label' }}
      />
      <Search
        {...args}
        componentSize="medium"
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => {} }}
      />
      <Search
        {...args}
        label={args.label ?? 'Label'}
        buttonProps={{ onClick: () => {} }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => {}, loading: true }}
      />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: SearchProps) => {
  return (
    <StoryTemplate
      title="Search - overview sizes"
      display="grid"
      $columnsAmount={2}
    >
      <Search {...args} componentSize="small" />
      <Search
        {...args}
        componentSize="small"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <Search {...args} componentSize="medium" />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <Search {...args} componentSize="large" />
      <Search
        {...args}
        componentSize="large"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
    </StoryTemplate>
  );
};

export const OverviewWithSuggestions = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - overview with suggestions">
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="large" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="medium" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} componentSize="small" />
      </Search.AutocompleteWrapper>
    </StoryTemplate>
  );
};

export const Default = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - default" display="block">
      <Search {...args} />
    </StoryTemplate>
  );
};

export const WithButton = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - with button" display="block">
      <Search {...args} buttonProps={{ onClick: () => {}, label: 'Søk' }} />
    </StoryTemplate>
  );
};

export const WithSuggestions = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - with suggestions" display="block">
      <Search.AutocompleteWrapper data={{ array }}>
        <Search {...args} />
      </Search.AutocompleteWrapper>
    </StoryTemplate>
  );
};
