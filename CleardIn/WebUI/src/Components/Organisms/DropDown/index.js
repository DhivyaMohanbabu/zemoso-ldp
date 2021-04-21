/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { InputLabel } from '@material-ui/core';
import SearchBar from '../../Molecules/SearchBar';
import IconicOption from '../../Molecules/IconicOption';
import NewEntry from '../../Molecules/NewEntry';
import ColoredOption from '../../Atoms/ColoredOption';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    maxWidth: 150,
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 4,

  },
  chipred: {
    margin: 2,
    backgroundColor: theme.palette.primary.main,
  },
  chip: {
    margin: 2,
    backgroundColor: (props) => props.color,
  },
}));

// eslint-disable-next-line react/prop-types
const DropDown = ({
  names, isSecurityDropDown, value, handleGroupChange,
  data, labelFlag,
}) => {
  const classes = useStyles(names);
  const [option, setOption] = useState('');
  const [input, setInput] = useState('');
  if (option === '') {
    names.map((name) => (
      name.label.includes(value) && setOption(name)
    ));
  }

  const handleChange = (event) => {
    setOption(event.target.value);
    handleGroupChange(event.target.value, data);
  };
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const icon = isSecurityDropDown ? (ArrowDropDownIcon) : (MoreVertIcon);
  const flag = true;
  return (
    <div>
      <FormControl className={classes.root}>
        {labelFlag && (<InputLabel id="select-label">TrustGroup</InputLabel>)}
        <Select
          // eslint-disable-next-line react/jsx-boolean-value
          autoWidth={true}
          data-testid="select"
          disableUnderline={flag}
          labelId="select-label"
          id="demo-controlled-open-select"
          value={option}
          onChange={handleChange}
          IconComponent={icon}
          renderValue={(selected) => (
            isSecurityDropDown
              ? (<ColoredOption key={selected.label} label={selected.label} className={classes.chip} />) : (<IconicOption icon={selected.icon} label={selected.label} />)
          )}

        >
          {isSecurityDropDown ? (
            <SearchBar placeholder="find option" onChange={onChange} />) : (<SearchBar placeholder="Enable  Department Access" onChange={onChange} />)}
          {names.map((name) => (

            name.label.includes(input) && (
            <MenuItem key={name.label} value={name}>
              {isSecurityDropDown ? (
                <ColoredOption key={name.label} label={name.label} />)
                : (<IconicOption icon={name.icon} label={name.label} />)}
            </MenuItem>
            )
          ))}
          {!isSecurityDropDown && (
          <MenuItem>
            <NewEntry text="New Department" />
          </MenuItem>
          )}
        </Select>
      </FormControl>

    </div>
  );
};
DropDown.prototype = {
  names: PropTypes.arrayOf(Object).isRequired,
};
export default DropDown;
