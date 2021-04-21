/* eslint-disable max-len */
import React from 'react';
import Table from '.';

export default {
  title: 'Organism/Table',
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    {
      id: 1, domain: 'zemosolabs.com', trustScore: 22, relationship: 'vendor', checked: false,
    },
    {
      id: 2, domain: 'zemosolabs.com', trustScore: 22, relationship: 'customer', checked: false,
    },
    {
      id: 3, domain: 'zemosolabs.com', trustScore: 22, relationship: 'partner', checked: false,
    },
  ],
};
