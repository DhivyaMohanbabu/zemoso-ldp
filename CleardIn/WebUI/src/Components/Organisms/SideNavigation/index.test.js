import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import SideNavigation from '.';
import theme from '../../../theme';

describe('TableHeader', () => {
  it('should render new Row ', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <SideNavigation />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render TableHeader', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <SideNavigation />
      </ThemeProvider>,
    );
    const component = queryByTestId('list');
    expect(component).not.toBeNull();
  });
});
