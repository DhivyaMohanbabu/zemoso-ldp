import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textField: {
    height: '36px',
    width: '220px',
  },
});
const SeachBar = ({ placeholder, onChange }) => {
  const classes = useStyles();

  return (
    <TextField
      placeholder={placeholder}
      onChange={onChange}
      variant="outlined"
      InputProps={{
        className: classes.textField,
        startAdornment: <SearchIcon />,
      }}
    />
  );
};

SeachBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SeachBar;
