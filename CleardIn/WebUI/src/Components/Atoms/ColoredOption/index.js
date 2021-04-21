/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  top100: {
    backgroundColor: theme.palette.success.main,
  },
  top200: {
    backgroundColor: theme.palette.primary.light,
  },
  donottrust: {
    backgroundColor: theme.palette.error.main,
  },
  customer: {
    backgroundColor: theme.palette.info.light,
  },
  chipFont: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
    height: '1.375rem',
    maxWidth: '200px',
  },
}));

function ColoredOption({ label, color }) {
  const classes = useStyles();
  let backgroundColor = classes.top100;
  if (label === 'Top 200' || label === 'patner') {
    backgroundColor = classes.top200;
  } else if (label === 'Do not trust') {
    backgroundColor = classes.donottrust;
  } else if (label === 'customer') {
    backgroundColor = classes.customer;
  }
  return (
    <div>
      <Chip label={label} data-testid="chip" className={[backgroundColor, classes.chipFont]} />
    </div>
  );
}
ColoredOption.protoTypes = {
  label: PropTypes.string.isRequired,
};

export default ColoredOption;
