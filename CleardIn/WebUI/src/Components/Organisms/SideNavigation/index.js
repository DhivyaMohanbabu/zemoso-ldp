/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Icon, List, ListItem, ListItemIcon,
} from '@material-ui/core';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsIcon from '@material-ui/icons/Settings';
import NavIcon from '../../Atoms/SideNavigationIcon';
import excel from '../../../../assets/images/excel.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '4rem',
    height: '100%',
  },
  list: {
    margin: '20px 0',
    justifyContent: 'center',
  },
  list2: {
    paddingTop: '22px',
    paddingBottom: '15px',
  },
  selctedIcon: {
    backgroundColor: theme.palette.clearedIn.selectedElementBGColor,
    /* borderWidth: '1px',
    borderStyle: 'solid',
    border: 'none',
    borderLeft: theme.palette.primary, */
    borderLeft: '1px solid blue',
  },
  listBox: {
    justifyContent: 'center',
    justifyItems: 'center',
  },
  listItem: {
    justifyContent: 'center',
  },
  listIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  listIconRoot: {
    minWidth: 0,
  },
}));

function SideNavigation() {
  const classes = useStyles();
  const flag = true;
  return (
    <div className={classes.root}>
      <List data-testid="list" className={classes.listBox}>
        <ListItem className={classes.listItem}>
          <ListItemIcon
            classes={{
              root: classes.listIconRoot,
            }}
            className={classes.listIcon}
          >
            <Icon color="primary">io</Icon>
          </ListItemIcon>
        </ListItem>
        <ListItem className={[classes.listItem, classes.list]}>
          <ListItemIcon
            classes={{
              root: classes.listIconRoot,
            }}
            className={classes.listIcon}
          >
            <NavIcon icon={AccessTimeIcon} size="small" />
          </ListItemIcon>
        </ListItem>
        <div className={classes.selctedIcon}>
          <ListItem className={[classes.listItem, classes.list2]}>
            <ListItemIcon
              className={classes.listIcon}
              classes={{
                root: classes.listIconRoot,
              }}
            >
              <NavIcon icon={PollOutlinedIcon} size="small" isSelected={flag} />
            </ListItemIcon>
          </ListItem>
        </div>
        <ListItem className={[classes.listItem, classes.list]}>
          <ListItemIcon
            className={classes.listIcon}
            classes={{
              root: classes.listIconRoot,
            }}
          >
            <NavIcon icon={SettingsIcon} size="small" />
          </ListItemIcon>
        </ListItem>
        <ListItem className={[classes.listItem, classes.list]}>
          <ListItemIcon
            className={classes.listIcon}
            classes={{
              root: classes.listIconRoot,
            }}
          >
            <img src={excel} alt="close" />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}

export default SideNavigation;
