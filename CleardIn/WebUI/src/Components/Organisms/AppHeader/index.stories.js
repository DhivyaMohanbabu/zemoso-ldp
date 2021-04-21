import React from 'react';
import AppHeader from '.';

export default {
  title: 'Organism/AppHeader',
};

const Template = (args) => <AppHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Centralized Communication Command Center',
};
