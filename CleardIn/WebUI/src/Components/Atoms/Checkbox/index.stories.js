// eslint-disable-next-line no-unused-vars
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';

export default {
  title: 'Atom/CheckBox',
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
  variant: 'contained',
  color: 'primary',
};
