import { Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '6vh',
    color: theme.palette.clearedIn.grey[500],
  },
}));

const TableFooter = ({ count }) => {
  const classes = useStyles();
  return (
    <Grid zeroMinWidth className={classes.root} data-testid="tabFooter">
      <Typography
        noWrap
        variant="body1"
      >
        {count}
        {' '}
        record
        {count > 1 ? 's ' : ' '}
        selected
      </Typography>
    </Grid>
  );
};
TableFooter.propTypes = {
  count: PropTypes.number.isRequired,
};
export default TableFooter;
