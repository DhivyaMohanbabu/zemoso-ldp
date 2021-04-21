import React from 'react';
import svgImg from '../../../../assets/images/access.svg';
import BannerImage from '.';

export default {
  title: 'Atom/BannerImage',
};
const imageSrcForSVG = [svgImg];
const Template = (args) => <BannerImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample SVG Image',
  imageSrc: imageSrcForSVG,
};
