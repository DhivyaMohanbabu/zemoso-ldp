import React from 'react';
import NavigationTabs from '.';

export default {
  title: 'organism/NavigationTabs',
  component: NavigationTabs,
};

const Template = ({ ...args }) => <NavigationTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: ['Top 100', 'Top 1000', 'External partners', 'Box communication base'],
};
