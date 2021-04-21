import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import pngImg from '../../../../assets/images/access_logo.png';
import BannerImage from '.';

const allProps = {
  title: 'Sample Test',
  imageSrc: [pngImg],
};

it('renders BannerImage snapshot correctly', () => {
  const { container } = render(<BannerImage {...allProps} />);
  expect(container).toMatchSnapshot();
});
