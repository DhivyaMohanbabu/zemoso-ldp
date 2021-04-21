/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';

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
  mainContainer: {
    padding: '0.938rem 2rem 1.063rem 1.875rem',
  },
  box: {
    width: '81rem',
    height: '42rem',
    boxShadow: '0 4px 10px 0 rgba(25, 1, 52, 0.16)',
  },
  toolBar: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  body: {
    height: '38.5rem',
    backgroundColor: theme.palette.clearedIn.bodyBackground,
  },
}));

const InnerPageTemplate = ({
  header, sideBar, navigationBar, toolBar, body,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.sidePanel} xs="auto">
        {sideBar}
      </Grid>
      <Grid direction="column" item container className={classes.mainPanel} xs>
        <Grid item className={classes.header}>
          {header}
        </Grid>
        <Grid item direction="column" className={classes.mainContainer} container>
          {navigationBar && (
          <Grid item>
            {navigationBar}
          </Grid>
          )}
          <Grid item container direction="column" className={classes.box}>
            {toolBar && (
            <Grid item className={classes.toolBar}>
              {toolBar}
            </Grid>
            )}
            <Grid item className={classes.body}>
              {body}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

InnerPageTemplate.propTypes = {
  header: PropTypes.any,
  sideBar: PropTypes.any,
  navigationBar: PropTypes.any,
  toolBar: PropTypes.any,
  body: PropTypes.any,
};

InnerPageTemplate.defaultProps = {
  header: null,
  sideBar: null,
  navigationBar: null,
  toolBar: null,
  body: null,
};

export default InnerPageTemplate;
