import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CheckBoxGrid from '.';
import theme from '../../../theme';

describe('security OPtion', () => {
  it('should render new Row ', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <CheckBoxGrid />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
