import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { setColloborationPlatform } from '../../../redux/actions';
import BannerImage from '../../Atoms/BannerImage';
import BannerLabel from '../../Atoms/BannerLabel';
import CollaborationMenu from '../CollaborationMenu';

const useStyles = makeStyles(() => ({
  gridItem: {
    paddingTop: '1rem',
    alignSelf: 'center',
  },
}));

const AppLander = ({
  imageTitle, imageSrc, bannerText,
}) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Grid container direction="column" justify="center" alignContent="center">
        <Grid item>
          <BannerImage
            title={imageTitle}
            imageSrc={imageSrc}
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <BannerLabel
            text={bannerText}
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Enable Access
          </Button>
        </Grid>
      </Grid>
      <CollaborationMenu openFlag={isModalOpen} handleClose={handleClose} />
    </div>
  );
};

AppLander.propTypes = {
  imageTitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
  bannerText: PropTypes.string.isRequired,
};
/*
AppLander.defaultProps = {
  handleClick: undefined,
}; */

export default connect(null, { setColloborationPlatform })(AppLander);
