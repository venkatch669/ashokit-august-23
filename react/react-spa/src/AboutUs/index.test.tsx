import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from '.';

test('renders learn react link', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
