import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import Tab from '.';
import theme from '../../../theme';

const allProps = {
  title: 'top 10',
};

it('renders inactive Tab correctly', () => {
  const { container, getByText } = render(
    <ThemeProvider theme={theme}>
      <Tab {...allProps} />
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
  expect(getByText(allProps.title)).toBeVisible();
});

it('renders active Tab correctly', () => {
  const { container, getByText } = render(
    <ThemeProvider theme={theme}>
      <Tab isSelected {...allProps} />
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
  expect(getByText(allProps.title)).toBeVisible();
});
