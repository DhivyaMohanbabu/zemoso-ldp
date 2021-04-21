import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../theme';
import NewEntry from '.';

describe('snapshot for NewRow', () => {
  it('should render new Row ', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <NewEntry text="New Row" />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render new Row ', () => {
    const { getByText, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <NewEntry text="New Tab" />
      </ThemeProvider>,
    );
    const component = queryByTestId('text');
    expect(component).not.toBeNull();
    expect(getByText('New Tab')).toBeVisible();
  });
});
