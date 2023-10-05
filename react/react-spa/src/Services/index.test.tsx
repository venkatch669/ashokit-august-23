import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '.';

test('renders learn react link', () => {
  render(<Services />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
