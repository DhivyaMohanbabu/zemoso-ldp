import React from 'react';
import { Typography } from '@material-ui/core';
import { text, select, optionsKnob } from '@storybook/addon-knobs';

export default {
  title: 'Atom/Typography',
};

const variantOptions = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'body1',
  body2: 'body2',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  caption: 'caption',
  button: 'button',
  link: 'link',
};

const colorOptions = {
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary',
  primary: 'primary',
  secondary: 'secondary',
};

const optionsObj = {
  display: 'select',
};
export const Default = () => (
  <Typography
    variant={select('variant', variantOptions, 'h1')}
    color={optionsKnob('color', colorOptions, 'textPrimary', optionsObj)}
  >
    {text('text', 'Sample text')}
  </Typography>
);
