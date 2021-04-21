import React from 'react';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import ListIcon from '@material-ui/icons/List';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { number, select } from '@storybook/addon-knobs';
import ActionOption from '.';

export default {
  title: 'Molecule/ActionOption',
};

export const Default = () => {
  const actionOptions = {
    Sort: {
      label: 'Sort',
      icon: ImportExportOutlinedIcon,
    },
    Filter: {
      label: 'Filter',
      icon: FilterListOutlinedIcon,
    },
    Group: {
      label: 'Group',
      icon: ListIcon,
    },
    Delete: {
      label: 'Delete selected',
      icon: DeleteForeverOutlinedIcon,
    },
  };
  const selectedObj = select('Action Option', Object.keys(actionOptions), 'Sort');
  const count = actionOptions[selectedObj].label === 'Delete selected' ? number('Count', 1) : 0;
  return (
    <ActionOption
      label={actionOptions[selectedObj].label}
      icon={actionOptions[selectedObj].icon}
      count={count}
    />
  );
};
