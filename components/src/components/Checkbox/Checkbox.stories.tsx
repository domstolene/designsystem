import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Designsystem/Checkbox',
  component: Checkbox
};

const Template = (args: CheckboxProps) => (
  <Checkbox {...args} id="test" label={args.label || 'Option'} />
);
export const Normal = Template.bind({});
