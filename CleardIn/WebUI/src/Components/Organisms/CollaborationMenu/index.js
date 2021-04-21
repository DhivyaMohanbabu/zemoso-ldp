/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog, Grid, IconButton, Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PlatformCard from '../../Molecules/PlatformCard';
import platforms from './index.contants';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    fontSize: '30px',
  },
  header: {
    backgroundColor: theme.palette.clearedIn.grey[200],
    margin: '0 0 1.5rem',
    padding: '0.458rem 1.875rem',
    height: '3.75rem',
  },
  body: {
    paddingLeft: '1.85rem',
  },
  overflowHidden: {
    overflow: 'hidden !important',
  },
  cardContainer: {
    padding: '0 1.85rem 1.85rem 0',
  },
}));

const CollaborationMenu = ({ openFlag, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={openFlag} maxWidth="md" className={classes.overflowHidden}>
      <Grid container direction="column" data-testid="platformCard">
        <Grid item container alignItems="center" justify="space-between" className={classes.header}>
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              Choose Collaboration Platforms
            </Typography>
          </Grid>
          <Grid
            item
          >
            <IconButton
              className={classes.closeButton}
              aria-label="close"
              onClick={handleClose}
              data-testid="close"
              size="small"
            >
              <CloseIcon
                className={classes.closeButton}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container className={classes.body}>
            {platforms.map((platform, index) => (
              <Grid item sm={4} md={3} key={index} className={classes.cardContainer}>
                <PlatformCard {...platform} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Dialog>
  );
};

CollaborationMenu.propTypes = {
  openFlag: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
};

CollaborationMenu.defaultProps = {
  handleClose: undefined,
};

export default CollaborationMenu;
