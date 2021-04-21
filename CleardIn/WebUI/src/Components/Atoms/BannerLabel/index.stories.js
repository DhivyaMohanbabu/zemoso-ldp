import React from 'react';
import BannerLabel from '.';

export default {
  title: 'Atom/BannerLabel',
};
const Template = (args) => <BannerLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Your active permissions will appear here.',
};
