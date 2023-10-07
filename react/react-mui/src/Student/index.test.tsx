import React from 'react';
import { render, screen } from '@testing-library/react';
import Student from '.';

test('renders learn react link', () => {
  render(<Student />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
