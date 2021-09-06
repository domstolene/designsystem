import {
  CheckboxTest as DDSCheckbox,
  CheckboxTestProps as CheckboxProps
} from './CheckboxTest';

export default {
  title: 'Design system/Checkbox/CheckboxTest',
  component: DDSCheckbox
};

export const CheckboxTest = (args: CheckboxProps) => (
  <div className="component-container">
    <h2> Checkbox</h2>
    <hr />
    <div>OBS! kun til testing i Aktørportalen</div>
    <DDSCheckbox {...args} id="test" label={args.label || 'Option'} />
  </div>
);
