/* eslint-disable react/prop-types */
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  text: {
    padding: '5px 0 0',
  },
});

function TrustGroup({ value }) {
  const classes = useStyles();
  return (
    <Typography className={classes.text} variant="body1">{value}</Typography>
  );
}

export default TrustGroup;
