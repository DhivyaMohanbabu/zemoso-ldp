import React from 'react';
import {
  Grid, SvgIcon, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.clearedIn.grey[500],
    margin: '2px',
  },
  gridBox: {
    display: 'inline-flex',
    alignSelf: 'center',
  },
  gridBoxItem: {
    alignSelf: 'center',
  },
  gridIcon: {
    height: '24px',
  },
}));

const ActionOption = ({ icon, label, count }) => {
  const classes = useStyles();
  console.log('In actionOption');
  console.log(icon);
  console.log(label);
  console.log(count);
  return (
    <Grid container display="inline" direction="row" className={classes.gridBox}>
      <Grid item className={[classes.gridBoxItem, classes.gridIcon]}>
        <SvgIcon color="secondary" component={icon} />
      </Grid>
      <Grid item className={classes.gridBoxItem}>
        <Typography noWrap className={classes.text} variant="body1">
          {label}
        </Typography>
      </Grid>
      {count > 0 && (
      <Grid item data-testid="count" className={classes.gridBoxItem}>
        <Typography className={classes.text} variant="body1">
          (
          {count}
          )
        </Typography>
      </Grid>
      )}
    </Grid>
  );
};

ActionOption.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  count: PropTypes.number,
};

ActionOption.defaultProps = {
  count: 0,
};

export default ActionOption;
