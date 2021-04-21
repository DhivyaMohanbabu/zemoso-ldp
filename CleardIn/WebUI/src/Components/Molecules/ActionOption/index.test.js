import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import ActionOption from '.';
import theme from '../../../theme';

describe('Action Option Molecule', () => {
  it('should render Action Option', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ActionOption icon={ImportExportOutlinedIcon} label="Sort" />
      </ThemeProvider>,
    );
    getByText('Sort');
  });
  it('should render count of selected rows', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ActionOption icon={ImportExportOutlinedIcon} label="Sort" count={3} />
      </ThemeProvider>,
    );
    getByTestId('count').matches.toString('(3)');
  });
});
