import React from 'react';
import RowAdder from './index';

export default {
  title: 'Molecule/RowAdder',
};
const Template = (args) => <RowAdder {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'New row',
};
