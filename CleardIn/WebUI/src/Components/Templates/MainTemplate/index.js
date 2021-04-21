/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, makeStyles } from '@material-ui/core';
import NavigationTabs from '../../Organisms/NavigationTabs';
import ToolBar from '../../Organisms/ToolBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90rem',
    height: '50.625rem',
    border: `1px solid ${theme.palette.clearedIn.grey[500]}`,
  },
  sidePanel: {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    height: '100%',
  },
  mainPanel: {
    height: '100%',
    backgroundColor: theme.palette.clearedIn.grey[200],
  },
  header: {
    width: '100%',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  body: {
    height: '46.3rem',
    backgroundColor: theme.palette.clearedIn.bodyBackground,
  },
}));

const MainTemplate = ({
  header, sideBar, body,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.sidePanel} xs={0.55}>
        {sideBar}
      </Grid>
      <Grid direction="column" item container className={classes.mainPanel} xs>
        <Grid item className={classes.header}>
          {header}
        </Grid>
        <Grid item className={classes.body} container justify="center" alignContent="center">
          {body}
        </Grid>
      </Grid>
    </Grid>
  );
};

MainTemplate.propTypes = {
  header: PropTypes.any,
  sideBar: PropTypes.any,
  body: PropTypes.any,
};

MainTemplate.defaultProps = {
  header: null,
  sideBar: null,
  body: null,
};

export default MainTemplate;
