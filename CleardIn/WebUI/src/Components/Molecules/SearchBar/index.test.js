import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '.';

describe('Search bar Molecule', () => {
  it('should render Search bar', () => {
    const { getAllByPlaceholderText } = render(<SearchBar placeholder="Enable Department" onChange={jest.fn()} />);
    getAllByPlaceholderText('Enable Department');
  });
});
