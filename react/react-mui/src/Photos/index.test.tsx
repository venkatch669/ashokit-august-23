import React from 'react';
import { render, screen } from '@testing-library/react';
import Photos from '.';

test('renders learn react link', () => {
  render(<Photos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
