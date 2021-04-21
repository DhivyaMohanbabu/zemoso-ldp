import { orange } from '@material-ui/core/colors';
import React from 'react';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import DropDown from '.';

export default {
  title: 'Organism/DropDown',
};

const Template = (args) => <DropDown {...args} />;

export const SecurityDropDown = Template.bind({});
SecurityDropDown.args = {
  names: [{ label: 'Top 100', color: 'red' }, { label: 'Top 200', color: orange[500] }],
  isSecurityDropDown: true,
  value: 'Top 100',
  labelFlag: false,
};
export const DepartmentDropDown = Template.bind({});
DepartmentDropDown.args = {
  names: [{ label: 'Sales', icon: ViewStreamOutlinedIcon }, { label: 'Department', icon: ViewStreamOutlinedIcon }],
  isSecurityDropDown: false,
};
