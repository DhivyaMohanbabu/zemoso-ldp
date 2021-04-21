import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default {
  title: 'Atom/Avatar',
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'Avatar',
  src: 'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/2b30765c-80ae-450d-82ca-32e45d3efd44-3x.png',
};
