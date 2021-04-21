/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Icon from '@material-ui/core/Icon';
import { select, text } from '@storybook/addon-knobs';
import { InlineIcon } from '@iconify/react';
import fileExcel from '@iconify-icons/mdi/file-excel';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsIcon from '@material-ui/icons/Settings';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SideBar from '../../../asserts/Image/SideBar';

export default {
  title: 'Atom/Icon',
};

export const Default = () => {
  const iconOptions = {
    TextBased: {
      label: 'Text',
      component: 'IO',
    },
    Department: {
      component: ViewStreamOutlinedIcon,
    },
    ColloborationPreview: {
      label: 'Excel',
      component: fileExcel,
    },
    Dashboard: {
      component: AccessTimeIcon,
    },
    CentralizedCommandCenter: {
      component: PollOutlinedIcon,
    },
    Settings: {
      component: SettingsIcon,
    },
    Notifications: {
      component: NotificationsNoneOutlinedIcon,
    },
    Messages: {
      component: SmsOutlinedIcon,
    },
    Department1: {
      label: 'SVG',
      component: SideBar,
    },
  };
  const colorOptions = ['primary', 'secondary'];
  const selectedObj = select('Icon', Object.keys(iconOptions), 'TextBased');
  const fontSize = selectedObj.label === 'SVG' ? 'default' : select('Size', ['small', 'large', 'default'], 'default');
  const iconColor = select('Color', colorOptions, colorOptions[1]);
  let iconText = null;
  if (iconOptions[selectedObj].label === 'Text') {
    iconText = text('Text', 'io');
  }
  if (iconOptions[selectedObj].label === 'Excel') {
    return <InlineIcon fontSize={fontSize} icon={fileExcel} />;
  }
  if (iconOptions[selectedObj].label === 'Text') {
    return (
      <Icon
        fontSize={fontSize}
        color={iconColor}
        style={{
          color: iconColor,
          maxWidth: 100,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {iconText}
      </Icon>
    );
  }
  return (
    <Icon
      fontSize={fontSize}
      component={iconOptions[selectedObj].component}
      color={iconColor}
    />
  );
};
