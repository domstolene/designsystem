import { StoryTemplate } from '../../storybook';
import { Search, SearchProps } from './Search';

export default {
  title: 'Design system/Search',
  component: Search,
  argTypes: {
    tip: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'buttonProps'],
    },
  },
};

export const Overview = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - overview" display="grid" columnsAmount={2}>
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
      <Search {...args} componentSize="small" tip="Dette er en hjelpetekst" />
      <Search
        {...args}
        componentSize="small"
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <Search {...args} componentSize="medium" tip="Dette er en hjelpetekst" />
      <Search
        {...args}
        componentSize="medium"
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <Search {...args} componentSize="large" tip="Dette er en hjelpetekst" />
      <Search
        {...args}
        componentSize="large"
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <Search
        {...args}
        componentSize="small"
        buttonProps={{ onClick: () => {}, label: 'Søk', loading: true }}
      />
      <Search
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => {}, label: 'Søk', loading: true }}
      />
      <Search
        {...args}
        componentSize="large"
        buttonProps={{ onClick: () => {}, label: 'Søk', loading: true }}
      />
    </StoryTemplate>
  );
};

export const Default = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - default">
      <Search {...args} />
    </StoryTemplate>
  );
};

export const WithButton = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - with button">
      <Search {...args} buttonProps={{ onClick: () => {}, label: 'Søk' }} />
    </StoryTemplate>
  );
};
