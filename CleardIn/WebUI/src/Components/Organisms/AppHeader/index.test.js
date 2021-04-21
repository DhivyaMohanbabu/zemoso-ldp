import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppHeader from '.';
import theme from '../../../theme';

describe('Top Header Organism', () => {
  it('should render Top Header', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppHeader title="Centralized Communication Command Center" />
      </ThemeProvider>,
    );
    getByText('Centralized Communication Command Center');
  });
});
