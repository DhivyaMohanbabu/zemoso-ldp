import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MainTemplate from '../../Components/Templates/MainTemplate';
import AppHeader from '../../Components/Organisms/AppHeader';
import SideNavigation from '../../Components/Organisms/SideNavigation';
import BannerLabel from '../../Components/Atoms/BannerLabel';

const useStyles = makeStyles(() => ({
  gridItem: {
    paddingTop: '1rem',
    alignSelf: 'center',
  },
}));
const WIPPage = () => {
  const classes = useStyles();
  const bodyComponent = (
    <Grid container direction="column" justify="center" alignContent="center">
      <Grid item className={classes.gridItem}>
        <BannerLabel
          text="Page is under construction....Will be up soon"
        />
      </Grid>
    </Grid>
  );

  return (
    <MainTemplate
      sideBar={<SideNavigation />}
      header={<AppHeader />}
      body={bodyComponent}
    />
  );
};

export default WIPPage;
