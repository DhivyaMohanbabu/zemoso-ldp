import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  imageLabel: {
    color: theme.palette.clearedIn.grey[500],
  },
}));

export default function BannerLabel({ text }) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.imageLabel}
      variant="h1"
      align="center"
    >
      {text}
    </Typography>
  );
}

BannerLabel.propTypes = {
  text: PropTypes.string.isRequired,
};
