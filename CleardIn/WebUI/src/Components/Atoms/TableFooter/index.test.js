import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import TabFooter from '.';
import theme from '../../../theme';

describe('Tab Footer Molecule', () => {
  it('should render Tab Footer molecule', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TabFooter count={4} />
      </ThemeProvider>,
    );
    getByTestId('tabFooter').matches.toString('record selected');
  });
});
