import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductContainer from '.';

test('renders learn react link', () => {
  render(<ProductContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
