import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import theme from '../../../theme';
import BannerLabel from '.';

const allProps = {
  text: 'All Good',
};

it('renders BannerLabel snapshot correctly', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <BannerLabel {...allProps} />
    </ThemeProvider>,
  );
  expect(container).toBeDefined();
  expect(container).toMatchSnapshot();
});
