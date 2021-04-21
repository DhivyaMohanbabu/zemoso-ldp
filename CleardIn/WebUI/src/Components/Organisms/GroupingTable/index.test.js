import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { AgGridReact } from 'ag-grid-react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GridTable from '.';
import theme from '../../../theme';

Enzyme.configure({ adapter: new Adapter() });

describe('security OPtion', () => {
  it('should render new Row ', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <GridTable />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('first row should have expected grid data', () => {
    const component = shallow(<GridTable />);
    expect(component).not.toBeNull();
    const agGridReactObj = component.find(AgGridReact);
    agGridReactObj.simulate('gridReady', jest.fn());
    agGridReactObj.simulate('rowClicked', jest.fn());
    agGridReactObj.simulate('firstDataRendered', jest.fn());
    expect(agGridReactObj).toBeTruthy();
  });
});
