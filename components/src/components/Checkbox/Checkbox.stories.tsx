import { Checkbox as DDSCheckbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Design system/Checkbox',
  component: DDSCheckbox
};

export const Checkbox = (args: CheckboxProps) => (
  <div className="component-container">
    <h2> Checkbox</h2>
    <hr />
    <div>OBS! kun til testing i Aktørportalen</div>
    <DDSCheckbox {...args} id="test" label={args.label || 'Option'} />
  </div>
);
