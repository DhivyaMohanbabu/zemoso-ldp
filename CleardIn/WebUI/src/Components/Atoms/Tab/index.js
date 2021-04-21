import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  tabSpan: {
    backgroundColor: '#eaefff',
    padding: '8px 12px 8px 20px',
    borderRadius: '5px 8px 0 0',
    color: theme.palette.clearedIn.dark,
    border: `1px solid ${theme.palette.clearedIn.grey[300]}`,
    cursor: 'pointer',
    textAlign: 'center',
    float: 'left',
    height: '36px',
    position: 'relative',
    boxSizing: 'border-box',
    maxWidth: 200,
    '&:after': {
      width: '16px',
      height: '36px',
      content: 'close-quote',
      backgroundColor: '#eaefff',
      position: 'absolute',
      top: '-1px',
      left: '100%',
      border: `1px solid ${theme.palette.clearedIn.grey[300]}`,
      borderLeft: 0,
      borderRadius: '0 5px 0 0',
      transform: 'skewX(30deg)',
      boxSizing: 'border-box',
      zIndex: 1,
    },
    '&:before': {
      width: '10px',
      height: '20px',
      content: 'close-quote',
      backgroundColor: '#eaefff',
      position: 'absolute',
      bottom: '-1px',
      left: '100%',
      borderRadius: ' 0 2px 0 0',
      borderBottom: `1px solid ${theme.palette.clearedIn.grey[300]}`,
      boxSizing: 'border-box',
    },
  },
  currentTab: {
    filter: 'drop-shadow(-1px -3px 3px rgba(50, 50, 0, 0.1))',
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    zIndex: 2,
    color: theme.palette.clearedIn.blue,
    '&:after': {
      content: 'close-quote',
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      top: '0px',
      border: '0',
    },
    '&:before': {
      content: 'close-quote',
      backgroundColor: theme.palette.common.white,
      borderBottomColor: theme.palette.clearedIn.grey[300],
      position: 'absolute',
      bottom: '0px',
      border: '0',
    },
  },
}));

const Tab = ({ isSelected, title }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.tabSpan} ${isSelected ? classes.currentTab : ''}`}>
      <Typography noWrap variant="body1">{title}</Typography>
    </div>
  );
};

Tab.propTypes = {
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Tab.defaultProps = {
  isSelected: false,
};

export default Tab;
