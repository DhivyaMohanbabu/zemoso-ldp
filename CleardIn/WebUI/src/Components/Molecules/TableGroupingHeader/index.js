/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ColoredOption from '../../Atoms/ColoredOption';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '0.40rem 0.5rem 0.5rem 0',
    height: 62,
    alignContent: 'center',
  },
  label: {
    direction: 'row',
    color: theme.palette.clearedIn.grey[500],
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    flexGrow: 1,
  },
  text: {
    marginLeft: '4px',
  },
  count: {
    margin: '24px 32px 17px',
    textAlign: 'right',
    color: theme.palette.clearedIn.grey[500],
    fontWeight: theme.typography.button.fontWeight,
  },
}));

function TableGroupingHeader({ text, count }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.label}>
        <label className={classes.text}>Group</label>
        <ColoredOption label={text} />
      </div>
      <Typography className={classes.count} data-testid="count">
        {`Count ${count}`}
      </Typography>
    </div>
  );
}
TableGroupingHeader.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
};
export default TableGroupingHeader;
