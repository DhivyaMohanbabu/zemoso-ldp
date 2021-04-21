import React from 'react';
import TrustGroupModal from './index';

export default {
  title: 'Organism/TrustGroupModal',
};

const Template = (args) => <TrustGroupModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Add New Trust Group',
  isOpen: true,
};
