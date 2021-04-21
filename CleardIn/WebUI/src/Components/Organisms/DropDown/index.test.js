/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import DropDown from '.';
import '@testing-library/jest-dom';

describe('security OPtion', () => {
  it('should render new Row ', () => {
    const names = [{ label: 'Top100', color: 'red' }, { label: 'Top 200', color: 'blue' }];
    const flag = true;
    const container = render(<DropDown names={names} isSecurityDropDown={flag} handleGroupChange={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('should render Security Option ', () => {
    const names = [{ label: 'Top100', color: 'red' }];
    const flag = true;
    const { queryByTestId } = render(<DropDown
      names={names}
      isSecurityDropDown={flag}
      handleGroupChange={jest.fn()}
    />);
    fireEvent.change(screen.getByTestId('select'), {
      target: { label: 'Top100', color: 'red' },
    });
    const mySelectComponent = queryByTestId('select');
    const selectNode = mySelectComponent.childNodes[0].childNodes[0];
    fireEvent.change(selectNode, { target: { label: 'Top100', color: 'red' } });
    fireEvent.click(mySelectComponent);
    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
  });
  it('should render department Option ', () => {
    const names = [{ label: 'Top100', icon: ViewStreamOutlinedIcon }];
    const flag = false;
    const { getByText, queryByTestId } = render(<DropDown
      names={names}
      isSecurityDropDown={flag}
      handleGroupChange={jest.fn()}
    />);
    fireEvent.change(screen.getByTestId('select'), {
      target: { label: 'Top100', icon: ViewStreamOutlinedIcon },
    });
    const mySelectComponent = queryByTestId('select');
    const selectNode = mySelectComponent.childNodes[0].childNodes[0];
    fireEvent.change(selectNode, { target: { label: 'Top100', icon: ViewStreamOutlinedIcon } });
    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    fireEvent.mouseEnter(queryByTestId('select'));
    fireEvent.keyDown(mySelectComponent.firstChild, { key: 'ArrowDown' });
    fireEvent.click(getByText('Top100'));
  });

  it('should render Security Option ', () => {
    const mock = jest.fn();
    expect(mock.mock.calls).toEqual([]);
  });
});
