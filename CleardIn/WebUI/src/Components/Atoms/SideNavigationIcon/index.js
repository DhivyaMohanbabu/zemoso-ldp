/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Grid, makeStyles, SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
  },
  notSelected: {
  },
});

const NavIcon = ({ icon, size, isSelected }) => {
  const classes = useStyles();
  return (
    isSelected ? (
      <Grid className={classes.root}>
        <SvgIcon component={icon} fontSize={size} color="primary" />
      </Grid>
    ) : (

      <SvgIcon component={icon} fontSize={size} color="secondary" className={classes.notSelected} />

    )
  );
};

NavIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

NavIcon.defaultProps = {
  isSelected: false,
};
export default NavIcon;
