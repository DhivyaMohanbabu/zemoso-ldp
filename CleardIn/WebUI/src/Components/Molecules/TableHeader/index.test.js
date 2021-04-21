import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import theme from '../../../theme';
import TableHeader from '.';

describe('TableHeader', () => {
  it('should render new Row ', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <TableHeader icon1={CheckBoxSharpIcon} icon2={MoreVertIcon} text="Text" />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render TableHeader', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <TableHeader icon1={CheckBoxSharpIcon} icon2={MoreVertIcon} text="Text" />
      </ThemeProvider>,
    );
    expect(getByText('Text')).toBeVisible();
  });
});
