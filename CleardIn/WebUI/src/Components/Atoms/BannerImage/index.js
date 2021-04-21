import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  image: {
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      height: '150px',
      width: '176px',
      objectFit: 'cover',
    },
    [theme.breakpoints.up('sm')]: {
      height: '170px',
      width: '225px',
      objectFit: 'cover',
    },
    [theme.breakpoints.up('md')]: {
      height: '264px',
      width: '310px',
      objectFit: 'cover',
    },
    [theme.breakpoints.up('lg')]: {
      height: '350px',
      width: '406px',
      objectFit: 'cover',
    },
  },
}));

export default function BannerImage({ title, imageSrc }) {
  const classes = useStyles();
  const imageSrcSet = `${imageSrc[1]} 2x, ${imageSrc[2]} 3x`;
  return (
    <CardMedia
      className={classes.image}
      component="img"
      title={title}
      src={imageSrc[0]}
      srcSet={imageSrcSet}
    />
  );
}

BannerImage.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
};
