import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextIcon from '.';

describe('snapshot for TextIcon', () => {
  it('should render new Row ', () => {
    const container = render(<TextIcon text="io" />);
    expect(container).toMatchSnapshot();
  });
  it('should render TextIcon ', () => {
    const { getByText } = render(<TextIcon text="io" />);
    const component = getByText('io');
    expect(component).not.toBeNull();
    expect(getByText('io')).toBeVisible();
  });
});
