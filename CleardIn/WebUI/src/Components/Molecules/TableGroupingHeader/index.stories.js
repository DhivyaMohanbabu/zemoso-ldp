import React from 'react';
import TableGroupingHeader from '.';

export default {
  title: 'Molecule/TableGroupingHeader',
};

const Template = (args) => <TableGroupingHeader {... args} />;

export const Default = Template.bind({});
Default.args = {
  count: 5,
  text: 'Do not trust',
};
