import React from 'react';
import ColoredOption from '.';

export default {
  title: 'Atom/ColoredOption',
};

const Template = (args) => <ColoredOption {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Top 100',
};
