import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import NavigationTabs from '.';
import theme from '../../../theme';

const allProps = {
  tabs: ['Top 100', 'Top 1000', 'External partners', 'Box communication base'],
};

it('renders NavigationTabs snapshot correctly', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <NavigationTabs {...allProps} />
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
});

it('NavigationTabs onClick tab', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <NavigationTabs {...allProps} />
    </ThemeProvider>,
  );
  fireEvent.click(getByText(allProps.tabs[1]));
  expect(getByText(allProps.tabs[1]).parentElement).toMatchSnapshot();
});
