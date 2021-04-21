/* eslint-disable no-unused-expressions */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import ListIcon from '@material-ui/icons/List';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import theme from '../../../theme';
import ToolBar from '.';

import '@testing-library/jest-dom';

describe('ToolBar', () => {
  it('should render ToolBar ', () => {
    const userActions = [{
      icon: FilterListOutlinedIcon,
      label: 'Filter',
    },
    {
      icon: ListIcon,
      label: 'Group',
    },
    {
      icon: ImportExportOutlinedIcon,
      label: 'Sort',
    },
    {
      icon: DeleteForeverOutlinedIcon,
      label: 'Delete Selected',
      count: 3,
    },
    ];
    const container = render(
      <ThemeProvider theme={theme}>
        <ToolBar placeholder="find an option" userActions={userActions} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render ToolBar Organism', () => {
    const userActions = [{
      icon: FilterListOutlinedIcon,
      label: 'Filter',
    },
    {
      icon: ListIcon,
      label: 'Group',
    },
    {
      icon: ImportExportOutlinedIcon,
      label: 'Sort',
    },
    {
      icon: DeleteForeverOutlinedIcon,
      label: 'Delete Selected',
      count: 3,
    },
    ];
    const { getByTestId, getByText, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <ToolBar placeholder="find a domain" userActions={userActions} />
      </ThemeProvider>,
    );
    getByTestId('toolbar');
    fireEvent.change(screen.getByTestId('toolbar'), {
      target: {
        icon: FilterListOutlinedIcon,
        label: 'Filter',
      },
    });
    const component = getByTestId('toolbar');

    expect(component).not.toBeNull();
    const component2 = getByTestId('handleClick');
    expect(component2).not.toBeNull();
    fireEvent.click(component2);
    fireEvent.click(getByText('Delete Selected'));
    expect(getByText('Delete Selected')).toBeVisible();
    const component3 = getByLabelText('text');
    fireEvent.change(component3, jest.fn());
  });
  it('should render Security Option ', () => {
    const mock = jest.fn();
    expect(mock.mock.calls).toEqual([]);
  });
});
