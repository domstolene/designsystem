import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
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
        readOnly: { control: { type: 'boolean' } }
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
export const Select = (args: SelectProps) => {
    return storyHTMLTemplate('Select', <DDSSelect {...args} label={args.label || 'Label'} items={items} />);
}
export const SelectLong = (args: SelectProps) => {
    return storyHTMLTemplate('Select long', <DDSSelect {...args} label={args.label || 'Label'} items={itemsLong} />);
}

export const SelectError = (args: SelectProps) => {
    return storyHTMLTemplate('Select', <DDSSelect {...args} label={args.label || 'Label'} errorMessage='Dette er en feilmelding' items={items} />);
}