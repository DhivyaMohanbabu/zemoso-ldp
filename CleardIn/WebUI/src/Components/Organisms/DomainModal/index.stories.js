import React from 'react';
import DomainModal from './index';

export default {
  title: 'Organism/DomainModal',
};

const Template = (args) => <DomainModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Add New Domain',
  trustGroups: [{ label: 'Top 100' }, { label: 'Top 200' }, { label: 'Do not trust' }],
  isOpen: true,
};
