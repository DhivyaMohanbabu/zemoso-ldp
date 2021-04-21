import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Icon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '36px',
  },
  Icon: {
    color: blue[900],
  },
  text: {
    height: '16px',
    marginLeft: 8,
    marginTop: 6,
    color: theme.palette.primary.main,
    lineHeight: 'normal',
    width: '90px',
  },

}));

// eslint-disable-next-line react/prop-types
function NewEntry({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.Icon}>
        <Icon>+</Icon>
      </div>
      <div className={classes.text}>
        <Typography component="body1" data-testid="text">
          {text}
        </Typography>

      </div>
    </div>
  );
}
NewEntry.protoTypes = {
  text: PropTypes.func.isRequired,
};
export default NewEntry;
