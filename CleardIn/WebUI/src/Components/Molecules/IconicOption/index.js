import React from 'react';
import {
  Grid, SvgIcon, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginRight: '1.25rem',
  },
  icon: {
    paddingTop: '3px',
  },
  text: {
    maxWidth: '200px',
  },

});

const IconicOption = ({ label, icon }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} alignItems="center" justify="flex-start" className={classes.root}>
      <Grid item>
        <SvgIcon className={classes.icon} color="secondary" component={icon} />
      </Grid>
      <Grid item className={classes.text}>
        <Typography noWrap>{label}</Typography>
      </Grid>
    </Grid>
  );
};

IconicOption.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default IconicOption;
