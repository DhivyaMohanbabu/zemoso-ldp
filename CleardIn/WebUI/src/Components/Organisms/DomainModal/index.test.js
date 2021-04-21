import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import DomainModal from './index';
import '@testing-library/jest-dom';
import theme from '../../../theme';

describe('security OPtion', () => {
  it('should render new Row ', () => {
    const trustGroups = [{ label: 'Top100' }, { label: 'Top 200' }, { label: 'Do not trust' }];
    const flag = true;
    const title = 'Add New Domain';
    const container = render(
      <ThemeProvider theme={theme}>
        <DomainModal
          title={title}
          trustGroups={trustGroups}
          isSecurityDropDown={flag}
        />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
