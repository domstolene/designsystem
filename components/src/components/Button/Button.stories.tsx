import {Button as DDSButton, ButtonProps} from './Button';

export default {
  title: 'Designsystem/Button',
  component: DDSButton
};

export const Button = (args:ButtonProps) => {
  return (
    <div className="component-container">
      <h2> Button </h2>
      <hr />
      <DDSButton {...args} label={args.label || 'Tekst'} />
    </div>
  )
}