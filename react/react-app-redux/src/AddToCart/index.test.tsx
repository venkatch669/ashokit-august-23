import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToCart from '.';

test('renders learn react link', () => {
  render(<AddToCart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
