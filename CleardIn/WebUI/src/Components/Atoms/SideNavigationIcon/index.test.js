import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import NavIcon from '.';

const allProps = {
  icon: PollOutlinedIcon,
  size: 'large',
};

it('renders Nav Icon snapshot correctly when selected true', () => {
  const { container } = render(<NavIcon {...allProps} isSelected />);
  expect(container).toMatchSnapshot();
});

it('renders Nav Icon snapshot correctly', () => {
  const { container } = render(<NavIcon {...allProps} />);
  expect(container).toMatchSnapshot();
});
