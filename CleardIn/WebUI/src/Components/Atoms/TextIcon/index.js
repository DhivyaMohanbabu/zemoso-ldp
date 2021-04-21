import React from 'react';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextIcon = ({ text }) => (
  <Icon>{text}</Icon>
);

TextIcon.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextIcon;
