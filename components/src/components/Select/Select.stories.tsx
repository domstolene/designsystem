import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
import { Select as DDSSelect, SelectProps } from './Select';

export default {
    title: 'design system/Select',
    component: DDSSelect,
    argTypes: {
        label: { control: { type: 'text' } },
        tip: { control: { type: 'text' } },
        errorMessage: { control: { type: 'text' } },
        width: { control: { type: 'text' } },
        placeholder: { control: { type: 'text' } },
        disabled: { control: { type: 'boolean' } },
        required: { control: { type: 'boolean' } },
        readOnly: { control: { type: 'boolean' } },
        loading: { control: { type: 'boolean' } },
        className: { control: { type: 'text' } }
    },
}

const items = [
    'Alternativ 1',
    'Alternativ 2',
    'Veldig langt alternativ her veldig langt alternativ her',
    'Alternativ 3',
    'Alternativ 4'
];

const itemsLong = [
    'Alternativ 1',
    'Alternativ 2',
    'Veldig langt alternativ her veldig langt alternativ her',
    'Alternativ 3',
    'Alternativ 4',
    'Alternativ 5',
    'Alternativ 6',
    'Alternativ 7'
];

export const Overview = (args: SelectProps) => {
    return storyHTMLGridTemplate('Select - overview',
    <>
    <DDSSelect {...args} label={args.label || 'Label'} items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} required items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} disabled items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} readOnly items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} errorMessage='Dette er en feilmelding' items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} tip='Dette er en hjelpetekst' items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} placeholder='Annerledes placeholder' items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} defaultValue= 'Alternativ 4' items={items} />
    <DDSSelect {...args} label={args.label || 'Label'} value={{value: 'Alternativ 4', label: 'Alternativ 4'}} items={items} />
    </>,
    '25px',
    2
    );
}

export const Default = (args: SelectProps) => {
    return storyHTMLTemplate('Select default', <DDSSelect {...args} label={args.label || 'Label'} items={items} />);
}
export const ManyItems = (args: SelectProps) => {
    return storyHTMLTemplate('Select - many items', <DDSSelect {...args} label={args.label || 'Label'} items={itemsLong} />);
}

export const SelectError = (args: SelectProps) => {
    return storyHTMLTemplate('Select - error', <DDSSelect {...args} label={args.label || 'Label'} errorMessage='Dette er en feilmelding' items={items} />);
}