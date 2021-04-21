import React from 'react';
import { render } from '@testing-library/react';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import IconicOption from '.';

describe('Department Option Molecule', () => {
  it('should render Department Option', () => {
    const { getByText } = render(<IconicOption icon={ImportExportOutlinedIcon} label="Sales" />);
    getByText('Sales');
  });
});
