import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import theme from '../../../theme';
import '@testing-library/jest-dom';
import RowAdder from './index';

describe('snapshot for RowAdder', () => {
  it('should render new Row ', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <RowAdder text="New Row" />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render new Row ', () => {
    const { getByText, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <RowAdder text="New Row" />
      </ThemeProvider>,
    );
    const component = queryByTestId('text');
    expect(component).not.toBeNull();
    expect(getByText('New Row')).toBeVisible();
  });
});
