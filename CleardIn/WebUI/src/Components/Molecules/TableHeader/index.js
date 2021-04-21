/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  text: {
    color: theme.palette.clearedIn.grey[500],
    flexGrow: 1,
    paddingTop: '5px',
    maxWidth: '180px',
  },
  icon1: {
    marginRight: 6,
    color: theme.palette.clearedIn.grey[400],
  },
  icon2: {
    color: theme.palette.clearedIn.grey[400],
  },
}));

// eslint-disable-next-line react/prop-types
function TableHeader({ icon2, icon1, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.icon1}>
        <Icon component={icon1} />
      </div>
      <div className={classes.text}>
        <Typography noWrap variant="body1">{text}</Typography>
      </div>
      <div className={classes.icon2}>
        <Icon component={icon2} />
      </div>
    </div>
  );
}
TableHeader.protoTypes = {
  icon2: PropTypes.func.isRequired,
  icon1: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired,
};

export default TableHeader;
