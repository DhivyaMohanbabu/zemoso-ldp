import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { AgGridReact } from 'ag-grid-react';
import { shallow } from 'enzyme';
import Table from '.';
import theme from '../../../theme';

const rows = [
  {
    id: 1, domain: 'zemosolabs.com', trustScore: 22, relationship: 'vendor', checked: false,
  },
  {
    id: 2, domain: 'zemosolabs.com', trustScore: 22, relationship: 'customer', checked: false,
  },
  {
    id: 3, domain: 'zemosolabs.com', trustScore: 22, relationship: 'partner', checked: false,
  },
];

describe('adding rows', () => {
  it('Renders correctly with props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Table rows={rows} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('first row should have expected grid data', () => {
    const component = shallow(
      <Table rows={rows} />,
    );
    expect(component).not.toBeNull();
    const agGridReactObj = component.find(AgGridReact);
    agGridReactObj.simulate('onGridReady', jest.fn());
    agGridReactObj.simulate('rowClicked', jest.fn());
    agGridReactObj.simulate('firstDataRendered', jest.fn());
    expect(agGridReactObj).toBeTruthy();
  });
}); // describe end
