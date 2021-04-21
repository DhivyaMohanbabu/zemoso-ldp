import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import excel from '../../../../assets/images/excel.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200px',
  },
  imageBlock: {
    backgroundColor: theme.palette.clearedIn.grey[200],
    height: '148px',
    borderRadius: '4px 4px 0 0',
    position: 'relative',
  },
  image: {
    height: '62px',
  },
  footer: {
    height: '52px',
    padding: '0 11px',
    borderRadius: '0 0 4px 4px',
    boxShadow: '1px 5px 7px rgb(200,200,200,.6)',
  },
  closeIcon: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    cursor: 'pointer',
  },
  button: {
    height: '32px',
    fontSize: '16px',
    textTransform: 'capitalize',
    padding: '0 20px',
  },
  name: {
    position: 'absolute',
    bottom: '8px',
    left: '8px',
    color: 'white',
    display: 'none',
    maxWidth: '189px',
  },
}));

const PlatformCard = ({ image, title, link }) => {
  const classes = useStyles();

  const history = useHistory();

  const textRef = useRef();
  const buttonsRef = useRef();
  const titleRef = useRef();
  const imageRef = useRef();

  const onHover = () => {
    textRef.current.style.display = 'none';
    buttonsRef.current.style.display = 'block';
    titleRef.current.style.display = 'block';
    imageRef.current.style.backgroundColor = 'rgb(100,100,100,.5)';
  };

  const onLeave = () => {
    textRef.current.style.display = 'block';
    buttonsRef.current.style.display = 'none';
    titleRef.current.style.display = 'none';
    imageRef.current.style.backgroundColor = 'rgb(200,200,200,.2)';
  };

  return (
    <Grid
      container
      className={classes.root}
      data-testid="card"
      onMouseOver={onHover}
      onMouseLeave={onLeave}
    >
      <Grid
        item
        sm={12}
        container
        justify="center"
        alignItems="center"
        className={classes.imageBlock}
        ref={imageRef}
      >
        <Grid item>
          <img className={classes.image} src={image} alt={`${title} logo`} />
          <img className={classes.closeIcon} src={excel} alt="close" />
          <div className={classes.name} ref={titleRef}>
            <Typography noWrap variant="h5">{title}</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        sm={12}
        className={classes.footer}
      >
        <Grid container ref={textRef}>
          <Grid item zeroMinWidth>
            <Typography noWrap variant="h5">{title}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          ref={buttonsRef}
          direction="row"
          spacing={1}
          style={{ display: 'none' }}
        >
          <Grid item sm={6} style={{ display: 'inline-block' }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => history.push(`/${link}`)}
            >
              Add
            </Button>
          </Grid>
          <Grid item sm={6} style={{ display: 'inline-block' }}>
            <Button variant="outlined" className={classes.button}>
              Preview
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

PlatformCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

PlatformCard.defaultProps = {
  link: '',
};

export default PlatformCard;
