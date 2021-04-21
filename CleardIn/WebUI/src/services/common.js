/* eslint-disable no-unused-vars */
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import ListIcon from '@material-ui/icons/List';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export const getTabNames = () => {
  const tabs = ['Communication base', 'Top 100', 'Top 1000', 'External partners'];
  return tabs;
};

export const getDepartmentNames = () => {
  const departmentNames = ['Sales', 'Finance', 'Legal'];
  return departmentNames;
};

export const getToolBarActionOptions = () => {
  const actionOptions = [
    {
      label: 'Filter',
    },
    /*
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
    */
  ];
  return actionOptions;
};
