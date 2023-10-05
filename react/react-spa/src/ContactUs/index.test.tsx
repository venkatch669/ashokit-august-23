import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '.';

test('renders learn react link', () => {
  render(<ContactUs />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
