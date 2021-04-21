import React from 'react';
import TabFooter from '.';

export default {
  title: 'Atom/TableFooter',
};

const Template = (args) => <TabFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 3,
};
