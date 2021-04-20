import { Checkbox as DDSCheckbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Designsystem/Checkbox',
  component: DDSCheckbox
};

export const Checkbox = (args: CheckboxProps) => (
  <div className="component-container">
    <h2> Checkbox</h2>
    <hr />
    <DDSCheckbox {...args} id="test" label={args.label || 'Option'} />
  </div>
);
