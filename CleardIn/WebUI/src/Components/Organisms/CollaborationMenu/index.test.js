import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CollaborationMenu from '.';
import theme from '../../../theme';

it('renders CollaborationMenu snapshot correctly', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <CollaborationMenu openFlag="true" />
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
});
