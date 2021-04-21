import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const useStyles = makeStyles((theme) => ({
  rowAdder: {
    display: 'flex',
    height: '36px',
    alignItems: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.clearedIn.grey[300],
  },
  rowAdderBox: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '27px',
    color: theme.palette.primary.main,
  },
  rowAdderText: {
    lineHeight: '16px',
  },
}));

export default function RowAdder({ text, handleOnClick }) {
  const classes = useStyles();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={classes.rowAdder} onClick={handleOnClick} role="button" tabIndex={0}>
      <div className={classes.rowAdderBox}>
        <AddRoundedIcon fontSize="small" />
        <Typography
          noWrap
          data-testid="text"
          className={classes.rowAdderText}
          variant="body1"
        >
          {text}
        </Typography>
      </div>
    </div>
  );
}

RowAdder.propTypes = {
  text: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
};

RowAdder.defaultProps = {
  handleOnClick: undefined,
};
