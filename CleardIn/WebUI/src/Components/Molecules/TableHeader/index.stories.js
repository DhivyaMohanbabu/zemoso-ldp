import React from 'react';
import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TableHeader from '.';

export default {
  title: 'Molecule/TableHeader',
};

const Template = (args) => <TableHeader {...args}>{args.label}</TableHeader>;

export const Default = Template.bind({});
Default.args = {
  text: 'Text',
  icon1: CheckBoxSharpIcon,
  icon2: MoreVertIcon,
};
