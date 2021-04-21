import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { fireEvent, render } from '@testing-library/react';
import TrustGroupModal from './index';
import '@testing-library/jest-dom';
import theme from '../../../theme';

describe('security OPtion', () => {
  it('Should render TrustGroup Modal to add a new trsut group', () => {
    const trustGroups = [{ label: 'Top100' }, { label: 'Top 200' }, { label: 'Do not trust' }];
    const openFlag = true;
    const isSecurityRelated = true;
    const title = 'Add New Domain';
    const container = render(
      <ThemeProvider theme={theme}>
        <TrustGroupModal
          isOpen={openFlag}
          title={title}
          trustGroups={trustGroups}
          isSecurityDropDown={isSecurityRelated}
        />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('TrustGroupModal should be visible and closeable', () => {
    const trustGroups = [{ label: 'Top100' }, { label: 'Top 200' }, { label: 'Do not trust' }];
    const openFlag = true;
    const isSecurityRelated = true;
    const title = 'Add New Domain';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TrustGroupModal
          isOpen={openFlag}
          title={title}
          trustGroups={trustGroups}
          isSecurityDropDown={isSecurityRelated}
        />
      </ThemeProvider>,
    );
    expect(getByTestId('modal')).toBeVisible();
    fireEvent.click(getByTestId('resetForm'));
    expect(getByTestId('modal')).toBeVisible();
  });
});
