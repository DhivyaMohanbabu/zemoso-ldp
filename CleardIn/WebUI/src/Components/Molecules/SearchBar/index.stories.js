import React from 'react';
import SeachBar from '.';

export default {
  title: 'Molecule/SearchBar',
};

const Template = (args) => <SeachBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enable Department Access',
};
