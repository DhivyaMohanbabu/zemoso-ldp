/* eslint-disable arrow-body-style */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import ActionOption from '../../Molecules/ActionOption';
import DropDown from '../DropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 10px',
    backgroundColor: '#ffff',
    boxShadow: '0 4px 10px 0 rgba(25, 1, 52, 0.16)',
    border: '1px',
    borderColor: theme.palette.info.main,
    height: '54px',
    color: theme.palette.clearedIn.grey[500],
  },
  groupBox: {
    alignSelf: 'center',
  },
  dropDownBox: {
    paddingRight: '16px',
  },
  input: {
    borderRadius: '100px',
    height: '20px',
    padding: '4px',
    fontSize: '16px',
    width: '130px',
  },
  searchBarBox: {
    padding: '8px 0px',
  },
  actionBox: {
    height: '24px',
    paddingRight: '15px',
  },
}));
const ToolBar = ({
  userActions,
  placeholder,
}) => {
  const classes = useStyles();
  const [display, setDisplay] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleClick = () => {
    setDisplay(!display);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const isSecurityDropDown = false;
  const names = [{ label: 'Sales', icon: ViewStreamOutlinedIcon }, { label: 'Department', icon: ViewStreamOutlinedIcon }];
  console.log(userActions);

  return (
    <Grid container className={classes.root} justify="space-between" data-testid="toolbar">
      <Grid item className={classes.groupBox}>
        <Grid container alignItems="center">
          <Grid item className={classes.dropDownBox}>
            <div style={{ display: 'flex', borderRight: '1px solid grey' }} data-testid="toolbar1">
              <DropDown
                isSecurityDropDown={isSecurityDropDown}
                names={names}
                value="Sales"
              />
            </div>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              {userActions && userActions.map((action, index) => {
                return (
                  <Grid item key={index} className={classes.actionBox}>
                    <ActionOption icon={action.icon} label={action.label} count={action.count} />
                  </Grid>
                );
              })}
              {/*
                <Grid item key={index} className={classes.actionBox}>
                  <ActionOption icon={action.icon} label={action.label} count={action.count} />
                </Grid>
              ))} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container className={classes.searchBarBox}>
          <Grid item onClick={handleClick} data-testid="handleClick">
            <SearchIcon />
          </Grid>
          <Grid item>
            {display && (
            <TextField aria-label="text" placeholder={placeholder} value={value} variant="outlined" onChange={(e) => handleChange(e)} className={classes.textField} inputProps={{ className: classes.input }} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

ToolBar.propTypes = {
  userActions: PropTypes.arrayOf(Object).isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default ToolBar;
