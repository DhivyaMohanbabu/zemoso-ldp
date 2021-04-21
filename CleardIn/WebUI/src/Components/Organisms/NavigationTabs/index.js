import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import Tab from '../../Atoms/Tab';
import NewRow from '../../Molecules/NewEntry';

const useStyles = makeStyles({
  tab: {
    marginRight: '18px',
    marginTop: '2px',
  },
  newTab: {
    marginLeft: '15px',
    marginTop: '2px',
  },
});

const NavigationTabs = ({ tabs }) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Grid container direction="row" justify="flex-start">
      {tabs && tabs.map((tab, index) => (
        <Grid item onClick={() => setActiveTab(index)} key={index} className={classes.tab}>
          <Tab title={tab} isSelected={index === activeTab} />
        </Grid>
      ))}
      <Grid item className={classes.newTab}>
        <NewRow text="New Tab" />
      </Grid>
    </Grid>
  );
};

NavigationTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavigationTabs;
