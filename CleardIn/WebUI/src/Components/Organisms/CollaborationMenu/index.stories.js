import React from 'react';
import CollaborationMenu from '.';

export default {
  title: 'organism/CollaborationMenu',
  component: CollaborationMenu,
};

const Template = ({ ...args }) => <CollaborationMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  openFlag: true,
};
