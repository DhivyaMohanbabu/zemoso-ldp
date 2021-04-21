import React from 'react';
import { TextField } from '@material-ui/core';
import {
  boolean,
  select, text,
} from '@storybook/addon-knobs';

export default {
  title: 'Atom/TextField',
};

export const Default = () => {
  const variantOptions = ['standard', 'filled', 'outlined'];
  const sizeOptions = ['small', 'medium', 'large'];
  const buttonColorOptions = ['primary', 'secondary'];
  return (
    <TextField
      variant={select('Vairant', variantOptions, variantOptions[2])}
      size={select('Size', sizeOptions, sizeOptions[0])}
      color={select('Color', buttonColorOptions, buttonColorOptions[0])}
      placeholder={text('PlaceHolder', 'Enable Department Access')}
      label={text('Label', '')}
      disabled={boolean('isDisabled', false)}
    />
  );
};
