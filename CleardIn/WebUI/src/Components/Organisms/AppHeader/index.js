import React from 'react';
import {
  Grid, SvgIcon, Typography, makeStyles,
} from '@material-ui/core';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
import Persona from '../../../../assets/images/Persona.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '14px 10px 10px',
    backgroundColor: '#ffff',
  },
  headerText: {
    color: theme.palette.clearedIn.grey[500],
  },
  headerRightBox: {
    color: theme.palette.clearedIn.grey[400],
    marginRight: '1.25rem',
  },
  headerRightBoxItem: {
    padding: '0 0.65rem',
  },
}));

const AppHeader = () => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" direction="row" className={classes.root} display="flex" alignItems="center">
      <Grid item>
        <Typography variant="h3" className={classes.headerText}>Centralized Communication Command Center</Typography>
      </Grid>
      <Grid item className={classes.headerRightBox}>
        <Grid container alignItems="center">
          <Grid item className={classes.headerRightBoxItem}>
            <SvgIcon component={SmsOutlinedIcon} />
          </Grid>
          <Grid item className={classes.headerRightBoxItem}>
            <SvgIcon component={NotificationsNoneOutlinedIcon} />
          </Grid>
          <Grid item className={classes.headerRightBoxItem}>
            <Avatar src={Persona} alt="avatar" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppHeader;
