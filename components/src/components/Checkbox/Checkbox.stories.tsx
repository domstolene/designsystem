import { Checkbox as DDSCheckbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Design system/Checkbox',
  component: DDSCheckbox
};

export const Checkbox = (args: CheckboxProps) => (
  <div className="component-container">
    <h2> Checkbox</h2>
    <hr />
    <DDSCheckbox {...args} id="test" label={args.label || 'Option'} />
  </div>
);
