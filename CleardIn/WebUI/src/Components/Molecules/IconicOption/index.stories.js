import React from 'react';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import { number, select, text } from '@storybook/addon-knobs';
import IconicOption from '.';

export default {
  title: 'Molecule/IconicOption',
};

export const Default = () => {
  const departmentOptions = {
    BaseTemplate: {
      label: 'Base Template',
      icon: ViewStreamOutlinedIcon,
    },
    Sales: {
      label: 'Sales',
      icon: ViewStreamOutlinedIcon,
    },
    Finace: {
      label: 'Finance',
      icon: ViewStreamOutlinedIcon,
    },
    Legal: {
      label: 'Legal',
      icon: ViewStreamOutlinedIcon,
    },
  };
  // const defaultValue = actionOptions[3];
  const selectedObj = select('Department Options', Object.keys(departmentOptions), 'BaseTemplate');
  const count = departmentOptions[selectedObj].label === 'Delete selected' ? number('Count', 1) : 0;
  const label = text('Title', '');
  return (
    <IconicOption
      label={label !== '' ? label : departmentOptions[selectedObj].label}
      icon={departmentOptions[selectedObj].icon}
      count={count}
    />
  );
};
