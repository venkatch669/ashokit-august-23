import React from 'react';
import { render, screen } from '@testing-library/react';
import GridDemo from '.';

test('renders learn react link', () => {
  render(<GridDemo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
