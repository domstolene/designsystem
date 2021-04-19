import React from 'react';
import Checkbox from "./Checkbox";

export default {
    title: 'Designsystem/Checkbox',
    component: Checkbox,
  };

const Template = (args) => <Checkbox {...args} id="test"  label={args.label || 'Option'} />;
export const Normal = Template.bind({});