import React from 'react';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import ListIcon from '@material-ui/icons/List';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ToolBar from '.';

export default {
  title: 'Organism/ToolBar',
};

const Template = (args) => <ToolBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Find a Domain',

  dropDownOptions: [
    {
      label: 'Sales',
      icon: MailOutlineOutlinedIcon,
    },
    {
      label: 'Legal',
      icon: MailOutlineOutlinedIcon,
    },
    {
      label: 'Finance',
      icon: MailOutlineOutlinedIcon,
    },
    {
      label: 'Investor relations',
      icon: MailOutlineOutlinedIcon,
    },
  ],
  userActions: [{
    icon: FilterListOutlinedIcon,
    label: 'Filter',
  },
  {
    icon: ListIcon,
    label: 'Group',
  },
  {
    icon: ImportExportOutlinedIcon,
    label: 'Sort',
  },
  {
    icon: DeleteForeverOutlinedIcon,
    label: 'Delete Selected',
    count: 3,
  },
  ],
};
