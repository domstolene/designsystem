import { StoryTemplate } from '../../storybook/StoryTemplate';

import { Search as DDSSearch, SearchProps } from './Search';

export default {
  title: 'Design system/Search',
  component: DDSSearch,
  argTypes: {
    tip: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'buttonProps']
    }
  }
};

export const Overview = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - overview" display="grid" columnsAmount={2}>
      <DDSSearch {...args} componentSize="small" />
      <DDSSearch
        {...args}
        componentSize="small"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <DDSSearch {...args} componentSize="medium" />
      <DDSSearch
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <DDSSearch {...args} componentSize="large" />
      <DDSSearch
        {...args}
        componentSize="large"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <DDSSearch
        {...args}
        componentSize="small"
        tip="Dette er en hjelpetekst"
      />
      <DDSSearch
        {...args}
        componentSize="small"
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <DDSSearch
        {...args}
        componentSize="medium"
        tip="Dette er en hjelpetekst"
      />
      <DDSSearch
        {...args}
        componentSize="medium"
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <DDSSearch
        {...args}
        componentSize="large"
        tip="Dette er en hjelpetekst"
      />
      <DDSSearch
        {...args}
        componentSize="large"
        tip="Dette er en hjelpetekst"
        buttonProps={{ onClick: () => {}, label: 'Søk' }}
      />
      <DDSSearch
        {...args}
        componentSize="small"
        buttonProps={{ onClick: () => {}, label: 'Søk', loading: true }}
      />
      <DDSSearch
        {...args}
        componentSize="medium"
        buttonProps={{ onClick: () => {}, label: 'Søk', loading: true }}
      />
      <DDSSearch
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
      <DDSSearch {...args} />
    </StoryTemplate>
  );
};

export const WithButton = (args: SearchProps) => {
  return (
    <StoryTemplate title="Search - with button">
      <DDSSearch {...args} buttonProps={{ onClick: () => {}, label: 'Søk' }} />
    </StoryTemplate>
  );
};
