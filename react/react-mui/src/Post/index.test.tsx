import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from '.';

test('renders learn react link', () => {
  render(<Post />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
