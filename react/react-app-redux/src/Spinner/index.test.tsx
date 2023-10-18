import React from 'react';
import { render, screen } from '@testing-library/react';
import SpinnerComp from '.';

test('renders learn react link', () => {
  render(<SpinnerComp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
