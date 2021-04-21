import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import TableGroupingHeader from '.';
import '@testing-library/jest-dom';
import theme from '../../../theme';

describe('TableHeader', () => {
  it('match tableHeader snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <TableGroupingHeader text="Do not trust" count="Count 5" />
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });
  it('should render count of rows in table', () => {
    const { queryByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <TableGroupingHeader text="Do not trust" count="3" />
      </ThemeProvider>,
    );
    const component = queryByTestId('count');
    expect(component).not.toBeNull();
    expect(getByText('Count 3')).toBeVisible();
  });
});
