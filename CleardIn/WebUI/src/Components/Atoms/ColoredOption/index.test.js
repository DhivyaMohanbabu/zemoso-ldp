import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColoredOption from '.';

describe('snapshot ColoredOption', () => {
  it('should render new Row ', () => {
    const container = render(<ColoredOption label="Top100" />);
    expect(container).toMatchSnapshot();
  });
  it('should render new Row ', () => {
    const { getByText, queryByTestId } = render(<ColoredOption label="Top100" />);
    const component = queryByTestId('chip');
    expect(component).not.toBeNull();
    expect(getByText('Top100')).toBeVisible();
  });
});
