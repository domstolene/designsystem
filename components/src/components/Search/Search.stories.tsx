import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
import { Search as DDSSearch, SearchProps } from './Search';

export default {
  title: 'Design system/Search',
  component: DDSSearch,
  argTypes: {
    tip: { control: { type: 'text' } },
  },
};

export const Overview = (args: SearchProps) => {
    return storyHTMLGridTemplate(
        'Search - overview',
        <>
            <DDSSearch {...args} componentSize='small' />
            <DDSSearch {...args} componentSize='small' buttonProps={{onClick: (e) => {}, label: 'Søk'}} />
            <DDSSearch {...args} componentSize='medium' />
            <DDSSearch {...args} componentSize='medium' buttonProps={{onClick: (e) => {}, label: 'Søk'}} />
            <DDSSearch {...args} componentSize='large' />
            <DDSSearch {...args} componentSize='large' buttonProps={{onClick: (e) => {}, label: 'Søk'}} />
            <DDSSearch {...args} componentSize='small' tip='Dette er en hjelpetekst' />
            <DDSSearch {...args} componentSize='small' tip='Dette er en hjelpetekst' buttonProps={{onClick: (e) => {}, label: 'Søk'}} />
            <DDSSearch {...args} componentSize='medium' tip='Dette er en hjelpetekst' />
            <DDSSearch {...args} componentSize='medium' tip='Dette er en hjelpetekst' buttonProps={{onClick: (e) => {}, label: 'Søk'}} />
            <DDSSearch {...args} componentSize='large' tip='Dette er en hjelpetekst' />
            <DDSSearch {...args} componentSize='large' tip='Dette er en hjelpetekst' buttonProps={{onClick: (e) => {}, label: 'Søk'}} />
        </>,
        '30px',
        2
    );
}

export const Default = (args:SearchProps) => {
    return storyHTMLTemplate(
        'Search - default',
        <DDSSearch {...args} />
    );
}

export const WithButton = (args:SearchProps) => {
    return storyHTMLTemplate(
        'Search - with button',
        <DDSSearch {...args} buttonProps={{onClick: (e) => {}, label: 'Søk'}} />
    );
}