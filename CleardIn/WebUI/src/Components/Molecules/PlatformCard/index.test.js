import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import PlatformCard from '.';
import theme from '../../../theme';

const allProps = {
  image:
    'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/9e69db6f-95ca-4221-b76f-545a010ea986-3x.png',
  title: 'Docusign',
};

it('renders PlatformCard snapshot correctly', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <PlatformCard {...allProps} />
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
});

it('renders PlatformCard onMouseEnter and onMouseLeave correctly', () => {
  const { getByTestId, getByText } = render(
    <ThemeProvider theme={theme}>
      <PlatformCard {...allProps} />
    </ThemeProvider>,
  );
  fireEvent.mouseEnter(getByTestId('card'));
  expect(getByText('Add')).toBeVisible();
  expect(getByText('Preview')).toBeVisible();
  fireEvent.mouseOut(getByTestId('card'));
  expect(getByText('Add')).not.toBeVisible();
  expect(getByText('Preview')).not.toBeVisible();
});
